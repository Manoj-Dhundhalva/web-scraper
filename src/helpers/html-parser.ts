import * as cheerio from "cheerio";
import type { Element } from "domhandler";

type HtmlNode = {
  tag: string;
  attributes: Record<string, string>;
  children?: Array<HtmlNode | string>;
};

function parseElement(node: Element): HtmlNode {
  const children: Array<HtmlNode | string> = [];

  for (const child of node.children ?? []) {
    if (child.type === "text") {
      const text = child.data?.trim();
      if (text) children.push(text);
    } else if (child.type === "tag") {
      children.push(parseElement(child));
    }
  }

  return {
    tag: node.name,
    attributes: node.attribs ?? {},
    ...(children.length > 0 && { children }),
  };
}

export function htmlToJson(html: string): HtmlNode | null {
  const $ = cheerio.load(html);

  const body = $("body")[0];

  if (!body) return null;

  return parseElement(body);
}
