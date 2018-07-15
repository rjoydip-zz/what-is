const fs = require('fs')
const path = require('path')
const fse = require('fs-extra')
const pretty = require('pretty')
const mkdirp = require('mkdirp')
const hljs = require('highlight.js')
const Mustache = require('mustache')

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
            data: result
        }
    )
)

mkdirp(path.join(__dirname, 'dist'), (err) => {
    if (err) console.error(err)
    else {
        fs.writeFile(path.join(__dirname, 'dist', 'index.html'), output, (err) => {
            if (err) console.log(err)
            else {
                fse.copy(path.join(__dirname, 'docs', 'style.css'), path.join(__dirname, 'dist', 'style.css'))
                    .then(() => console.log('success!'))
                    .catch(err => console.error(err))
            }
        })
    }
});