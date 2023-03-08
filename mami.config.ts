import { defineConfig, OutputPlugin } from "@mami/cli";
import * as joplin from "@mami/plugin-joplin";
import { token } from "./.joplin-blog.json";
import path from "path";
import * as local from "@mami/plugin-local";
import { PageFrontmatter } from "vuepress-vite";

export default defineConfig({
  input: [
    joplin.input({
      baseUrl: "http://127.0.0.1:41184",
      token: token,
      tag: "blog",
    }),
  ],
  output: [
    output({
      root: path.resolve(__dirname, "./blog"),
    }),
  ],
});

/**
 * 新增meta，输出文本
 * @param options 
 * @returns 
 */
function output(options?: { root?: string }): OutputPlugin {
  const root = options?.root ?? path.resolve("docs");
  const postsPath = path.resolve(root, "p");
  const resourcePath = path.resolve(root, "resources");
  const p = local.output({
    rootNotePath: postsPath,
    rootResourcePath: resourcePath,
    meta: (item) =>
      ({
        layout: "Post",
        author: "Kilien",
        subtitle: item.id,
        useHeaderImage: true,
        headerImage: `https://picsum.photos/seed/${item.id}/1920/1080`,
        headerMask: `rgb(14, 21, 5, 0.2)`,
        tags: [...item.tags.map((item) => item.title)],
        permalink: `/p/${item.id}`,
        title: item.title,
        date: new Date(item.createAt).toISOString().slice(0, 10),
        updated: new Date(item.updateAt).toISOString().slice(0, 10),
      } as PageFrontmatter),
    noteLink: ({ linkNoteId }) => `/p/${linkNoteId}`,
    resourceLink: ({ resource }) =>
      `../resources/${resource.id}${path.extname(resource.title)}`,
    notePath: (note) => path.resolve(postsPath, note.id + ".md"),
    resourcePath: (resource) =>
      path.resolve(resourcePath, resource.id + path.extname(resource.title)),
  });
  p.name = "vuepress";
  return {
    ...p,
    async handle(note) {
      await p.handle(note);
    },
    async end() {
      await p.end?.();
    },
  };
}
