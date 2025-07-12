import GithubSlugger from "github-slugger";
import remarkParse from "remark-parse";
import { unified } from "unified";

const slugger = new GithubSlugger();

export function slugify(text) {
  slugger.reset();
  const tree = unified().use(remarkParse).parse(text);
  const newToc = [];
  tree.children.forEach((node) => {
    if (node.type === "heading" && node.depth >= 2 && node.depth <= 3) {
      const text = node.children
        .filter((n) => n.type === "text" || n.type === "inlineCode")
        .map((n) => n.value)
        .join("");
      const id = slugger.slug(text.toLowerCase().trim());
      newToc.push({ id, text, level: node.depth });
    }
  });
  return newToc;
}
