import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('file:///' + toAbsolute('dist/server/entry-server.js').replace(/\\/g, '/'))

// Determine routes to prerender
const routesToPrerender = fs.readdirSync(toAbsolute('src/pages')).map((file) => {
  const name = file.replace(/\.tsx$/, '')
  return name === 'Index' ? '/' : `/${name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}`
})

;(async () => {
  // pre-render each route...
  for (const url of routesToPrerender) {
    const context = {}
    const appHtml = render(url, context)
    const { helmet } = context

    const html = template
      .replace(`<!--app-html-->`, appHtml)
      .replace(
        `<!--app-head-->`,
        helmet ? helmet.title.toString() + helmet.meta.toString() + helmet.link.toString() : ''
      )

    const filePath = `dist${url === '/' ? '/index.html' : `${url}/index.html`}`
    // Ensure directory exists
    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
})()
