import { compile } from './handlebars';
import { read } from 'to-vfile';
import { readPackage, FilePath } from './package';
import * as document from 'rehype-document';
import * as html from 'rehype-stringify';
import * as markdown from 'remark-parse';
import * as rehype from 'remark-rehype';
import * as unified from 'unified';
import * as usage from 'remark-usage';
import * as wrap from 'rehype-wrap';

const css = 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.css';
const wrapper = 'div.markdown-body';

export async function renderReadme(cwd?: FilePath): Promise<string> {
  const pkg = await readPackage(cwd);
  const { name: title, readme: path } = pkg;
  const file = await read({ cwd, path });
  const data = await unified()
    .use(usage)
    .use(markdown)
    .use(rehype)
    .use(document, { title, css })
    .use(wrap, { wrapper })
    .use(html)
    .process(file);

  return compile(data.toString(), {})(pkg);
}
