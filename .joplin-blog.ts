import {
  Application,
  ApplicationConfig,
  BlogVuepressIntegrated,
  BlogVuepressIntegratedConfig,
  GeneratorEvents,
  ProcessInfo,
} from "joplin-blog";
import {
  CommonNote,
  CommonTag,
  CommonResource,
} from "joplin-blog/dist/model/CommonNote";
import { createRequire } from "module";
import _config from './.joplin-blog.json';
import path from "path";
const __dirname = path.resolve();
// const require = createRequire(import.meta.url);
// const _config = require("./.joplin-blog.json");

class GeneratorEventsImpl implements GeneratorEvents {
  copyResources(options: ProcessInfo): void {
    console.log(
      `${options.rate}/${options.all} 正在读取笔记附件与标签: `,
      options.title
    );
  }

  parseAndWriteNotes(options: ProcessInfo): void {
    console.log(
      `${options.rate}/${options.all} 正在解析笔记中的 Joplin 内部链接与附件资源: ${options.title}`,
      options.title
    );
  }

  readNoteAttachmentsAndTags(options: ProcessInfo): void {
    console.log(
      `${options.rate}/${options.all} 正在写入笔记: ${options.title}`,
      options.title
    );
  }

  writeNote(options: ProcessInfo): void {
    console.log(
      `${options.rate}/${options.all} 正在处理资源: ${options.title}`
    );
  }
}

class BlogIntegrated extends BlogVuepressIntegrated {
  // 允许通过覆盖这个方法来修改每个笔记的元数据
  meta(note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] }) {
    return {
      layout: "Post",
      author: "Kilien",
      subtitle: `${note.id}`,
      useHeaderImage: true,
      headerImage: `https://picsum.photos/seed/${note.id}/1920/1080`,
      headerMask: "rgb(14, 21, 5, 0.2)",
      ...super.meta(note),
    };
  }
}

async function main() {
  const config: ApplicationConfig & BlogVuepressIntegratedConfig = {
    ...(_config as ApplicationConfig),
    rootPath: path.resolve(__dirname, "./blog")
  };
  const generatorEvents = new GeneratorEventsImpl();
  await new Application(config, new BlogIntegrated(config))
    .gen()
    .on(
      "readNoteAttachmentsAndTags",
      generatorEvents.readNoteAttachmentsAndTags
    )
    .on("parseAndWriteNotes", generatorEvents.parseAndWriteNotes)
    .on("writeNote", generatorEvents.writeNote)
    .on("copyResources", generatorEvents.copyResources);
}

main();
