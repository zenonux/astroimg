import { exec } from "child_process";
import type { Connect } from "vite";

export function ViteI18nGeneratePlugin(route: string, command: string) {
  return {
    name: "i18n-generate",
    configureServer(server: { middlewares: Connect.Server }) {
      server.middlewares.use(route, (req, res, next) => {
        if (req.method !== "GET") {
          res.statusCode = 405; // 方法不允许
          res.end("Method Not Allowed");
          return;
        }
        exec(`${command}`,  {
          env: {
            ...process.env,
          },
        },(error) => {
          if (error) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ errmsg: error.message }));
            return;
          }
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ data: null }));
        });
      });
    },
  };
}
