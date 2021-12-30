/**
 * 提供 ::: leivii、img、video ::: 语法，用于构建 markdown 中的示例
 */
 const path = require('path')
 const mdContainer = require('markdown-it-container')
 
 module.exports = (options = {}, ctx) => {
   return {
     enhanceAppFiles: path.resolve(__dirname, './enhanceAppFile.js'),
     extendMarkdown: md => {
       md.use(mdContainer, 'leivii', {
         validate(params) {
           return params.trim().match(/^leivii\s*(.*)$/)
         },
         render(tokens, idx) {
           const m = tokens[idx].info.trim().match(/^leivii\s*(.*)$/)
           if (tokens[idx].nesting === 1) {
             const description = m && m.length > 1 ? m[1] : ''
             const content = encodeURI(tokens[idx + 1].content)
             return `<leivii-block content="${content}" :options="${JSON.stringify(options)}">
               ${description ? `<div slot="description">${md.render(description).html}</div>` : ''}
               <template slot="source">`
           }
           return `</template></leivii-block>`;
         }
       }).use(mdContainer, 'img', {
         validate(params) {
           return params.trim().match(/^img\s*(.*)$/)
         },
         render(tokens, idx) {
           const m = tokens[idx].info.trim().match(/^img\s*(.*)$/)
           if (tokens[idx].nesting === 1) {
             const description = m && m.length > 1 ? m[1] : ''
             const content = tokens[idx + 2].content
             return `<leivii-img><template slot="img">${md.render(`<img src="${content}" alt="${description}" />`).html}</template>`;
           }
           return `</leivii-img>`
         }
       }).use(mdContainer, 'video', {
         validate(params) {
           return params.trim().match(/^video\s*(.*)$/)
         },
         render(tokens, idx) {
           const m = tokens[idx].info.trim().match(/^video\s*(.*)$/)
           if (tokens[idx].nesting === 1) {
             const description = m && m.length > 1 ? m[1] : ''
             const content = tokens[idx + 2].content
             let options = Object.assign({
               width: 600
             }, ...description.split(/\s+/).map(item => {
               if (item.indexOf('=') > 0) {
                 let [key, val] = item.split('=')
                 return { [key.trim()]: val.trim() }
               } else {
                 return { [item]: item }
               }
             }))
             let videoProperties = Object.entries(options).map(([key, val]) => `${key}="${val}"`).join(' ')
             return `<leivii-video><template slot="video">${md.render(`<video src="${content}" style="max-width: 100%" ${videoProperties} />`).html}</template>`;
           }
           return `</leivii-video>`
         }
       })
     }
   }
 }