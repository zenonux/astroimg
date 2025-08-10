// src/vite.ts
import { exec } from "child_process";
function ViteI18nGeneratePlugin(route, command, options) {
  return {
    name: "i18n-generate",
    configureServer(server) {
      server.middlewares.use(route, (req, res, next) => {
        let execOptions = options || {};
        if (req.method !== "GET") {
          res.statusCode = 405;
          res.end("Method Not Allowed");
          return;
        }
        exec(`${command}`, execOptions, (error) => {
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
    }
  };
}
export {
  ViteI18nGeneratePlugin
};
