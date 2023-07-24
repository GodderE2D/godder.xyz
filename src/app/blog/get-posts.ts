import React from "react";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import Markdoc from "@markdoc/markdoc";
import yaml from "js-yaml";
import { z } from "zod";
import { alert } from "./alert-tag";
import { fence } from "./fence-node";
import Alert from "../../components/Alert";
import Fence from "../../components/Fence";

export async function getFiles() {
  const folderNames = await readdir(join(process.cwd(), "posts"));

  let allPosts: string[] = [];

  for (const folderName of folderNames) {
    const fileNames = await readdir(join(process.cwd(), "posts", folderName));
    for (const fileName of fileNames) {
      if (fileName.endsWith(".mdoc") || fileName.endsWith(".md")) {
        const file = await readFile(join(process.cwd(), "posts", folderName, fileName), "utf-8");
        allPosts.push(file);
      }
    }
  }

  return allPosts;
}

export async function getPosts() {
  const files = await getFiles();

  return files
    .map((source) => {
      const ast = Markdoc.parse(source);
      const rawFrontmatter = ast.attributes.frontmatter ? yaml.load(ast.attributes.frontmatter) : {};

      const schema = z.object({
        title: z.string(),
        slug: z.string(),
        date: z.string(),
        tags: z.array(z.string()),
        description: z.string(),
      });

      const frontmatter = schema.parse(rawFrontmatter);
      const content = Markdoc.transform(ast, {
        variables: { frontmatter },
        tags: { alert },
        nodes: { fence },
      });
      const html = Markdoc.renderers.react(content, React, { components: { Alert, Fence } });

      return { meta: frontmatter, html };
    })
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
}
