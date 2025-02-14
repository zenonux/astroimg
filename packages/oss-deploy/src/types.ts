
export interface BucketManager {
  uploadLocalFile(
    prefix: string,
    filePath: string,
    options: Record<string, any>
  ): Promise<any>;
  uploadLocalDirectory(
    prefix: string,
    dirPath: string,
    options: {
      filter: Record<string, any>;
      cacheControl?: string;
    }
  ): Promise<any>;
}

export type OssOptions = {
  region: string;
  secretId: string;
  secretKey: string;
  bucket: string;
};

export type TargetOptions = {
  prefix: string;
  cacheControl?: string;

};

export type LocalOptions = {
  dist: string;
  filter: Record<string, any>;
};
