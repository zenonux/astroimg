import type * as pm from 'picomatch';

export interface GenerateI18nOptions {
  google_service_account_email: string;
  google_private_key: string;
}

/**
 * 生成 i18n 本地化文件
 * @param input 本地文件路径或远程链接（xlsx 文件）
 * @param localesDir 本地化文件输出目录
 * @param ignore 需要忽略的文件匹配规则
 * @param extension 输出文件扩展名，支持 'ts' | 'js' | 'json'
 * @param opts 谷歌服务账号配置
 */
export declare function generateI18n(
  input: string,
  localesDir: string,
  ignore: pm.Glob[],
  extension: 'ts' | 'js' | 'json',
  opts: GenerateI18nOptions
): Promise<void>;


/**
 * 检查 i18n 使用的 key 是否在语言文件中缺失
 * @param opts 参数选项
 * @throws 如果存在缺失的 key，会抛出错误
 */
export declare function checkI18nKeys(
  opts: CheckI18nKeysOptions
): Promise<void>;


export interface ExcludeKeysRequest {
  url: string;
  method: 'POST' | 'GET';
}

export interface CheckI18nKeysOptions {
  excludeKeysRequest?: ExcludeKeysRequest;
  usedGlob: string;
  i18nGlob: string;
}
