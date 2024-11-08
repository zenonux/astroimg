type OssOptions = {
    region: string;
    secretId: string;
    secretKey: string;
    bucket: string;
};
type TargetOptions = {
    prefix: string;
    cacheControl?: string;
};
type LocalOptions = {
    dist: string;
    filter: Record<string, any>;
};

declare class OssDeploy {
    private _bucket;
    constructor(options: OssOptions);
    uploadAssets(local: LocalOptions, target: TargetOptions): Promise<void>;
}

export { OssDeploy };
