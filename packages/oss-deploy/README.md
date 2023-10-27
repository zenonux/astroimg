# oss-deploy

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/@urcloud/oss-deploy.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@urcloud/oss-deploy

Cli tool for deploy assets to tencent cos.

## How it works

1. Read config from `oss-deploy.yaml`.(use `--config` to custom config)
2. Upload local assets from `dist`.

## Install

```bash
npm i @urcloud/oss-deploy -D
```

## Usage

1. create `oss-deploy.yaml`

```yaml
local:
  dist: ./dist
# filter:
#   directoryFilter:
#     - '!.git'
#     - '!*modules'
target:
  prefix: oss-deploy/
  #cacheControl: 'max-age=31536000'
oss:
  region: ${env.COS_REGION}
  bucket: ${env.COS_BUCKET}
  secretId: ${env.COS_SECRET_ID}
  secretKey: ${env.COS_SECRET_KEY}
```

2. add `scripts` in package.json

```json
{
  "scripts": {
    "deploy-oss": "cross-env COS_REGION=aa COS_BUCKET=bb COS_SECRET_ID=cc COS_SECRET_KEY=dd oss-deploy upload"
  }
}
```