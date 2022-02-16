import { ServerResponse } from "http";

export default (async () => {
  const { readFile } = await import("fs/promises");
  const { join } = await import("path");

  const basePath = join(__dirname, "../../public/");

  return {
    "/": async (res: ServerResponse) => {
      const file = await readFile(`${basePath}/pages/index.html`);
      res.end(file);
    },
    "/404": async (res: ServerResponse) => {
      const file = await readFile(`${basePath}/pages/404.html`);
      res.end(file);
    },
    "/style": async (res: ServerResponse) => {
      const file = await readFile(`${basePath}/styles/index.css`);
      res.end(file);
    },
  };
})();
