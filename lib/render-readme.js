"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlebars_1 = require("./handlebars");
const to_vfile_1 = require("to-vfile");
const package_1 = require("./package");
const document = require("rehype-document");
const html = require("rehype-stringify");
const markdown = require("remark-parse");
const rehype = require("remark-rehype");
const unified = require("unified");
const usage = require("remark-usage");
const wrap = require("rehype-wrap");
const css = 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.css';
const wrapper = 'div.markdown-body';
async function renderReadme(cwd) {
    const pkg = await package_1.readPackage(cwd);
    const { name: title, readme: path } = pkg;
    const file = await to_vfile_1.read({ cwd, path });
    const data = await unified()
        .use(usage)
        .use(markdown)
        .use(rehype)
        .use(document, { title, css })
        .use(wrap, { wrapper })
        .use(html)
        .process(file);
    return handlebars_1.compile(data.toString(), {})(pkg);
}
exports.renderReadme = renderReadme;
