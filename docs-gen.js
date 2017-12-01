const fs = require('fs')
const path = require('path')
const fse = require('fs-extra')
const pretty = require('pretty')
const mkdirp = require('mkdirp')
const hljs = require('highlight.js')
const Mustache = require('mustache')

const HIGHLIGHT_CSS= 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css'

// Actual default values
const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (__) {}
        }
    
        return ''; // use external default escaping
      }
})

md.use(require("markdown-it-anchor"))
md.use(require("markdown-it-table-of-contents"))

const result = md.render(fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8'))
const output = pretty(
    Mustache.render(
        fs.readFileSync(path.join(__dirname, 'docs/docs.tmpl.html'), 'utf8'), {
            __body_content: result,
            __highlight_css: HIGHLIGHT_CSS
        }
    )
)

mkdirp(path.join(__dirname, 'dist'), (err) => {
    if (err) console.error(err)
    else {
        fs.writeFile(path.join(__dirname, 'dist', 'index.html'), output, (err) => {
            if (err) console.log(err)
            else console.log('success!')
        })
    }
});