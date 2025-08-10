import type { Plugin } from "vite";
import { type ExecOptions } from "child_process";
declare function ViteI18nGeneratePlugin(
  /**
   * 监听的请求路径，比如 '/i18n-generate'，必须以 `/` 开头
   */
  route: string,

  /**
   * 要执行的命令字符串，比如 'npm run i18n:generate'
   */
  command: string,
  options?: ExecOptions,
): Plugin;
