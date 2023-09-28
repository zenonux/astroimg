<template>
  <el-upload
    class="a-uploader"
    :show-file-list="false"
    :http-request="handleUpload"
    :before-upload="beforeUpload"
    accept=".jpg,.jpeg,.png"
  >
    <img
      v-if="props.modelValue"
      :src="_buildCosUrl(props.modelValue)"
      class="a-uploader__cover"
    />
    <div v-else class="a-uploader__icon"></div>
    <template #tip>
      <div class="el-upload__tip">
        支持 jpg/jpeg/png 格式，大小不超过500kb，建议使用tinypng压缩后上传
      </div>
    </template>
  </el-upload>
</template>
<script lang="ts" setup>
import COS from "cos-js-sdk-v5";
import {
  ElUpload,
  type UploadProps,
  ElMessage,
  type UploadRequestHandler,
} from "element-plus";

const props = defineProps<{
  modelValue: string;
  config: {
    bucket: string;
    region: string;
    resource: string;
    domain: string;
    getTempSecret: (q: {
      region: string;
      bucket: string;
      resource: string;
    }) => Promise<{
      data: {
        credentials: {
          tmpSecretId: string;
          tmpSecretKey: string;
          token: string;
        };
        startTime: number;
        expiredTime: number;
      };
    }>;
  };
}>();

const emit = defineEmits(["update:modelValue"]);

const _buildCosUrl = (prefix: string) => {
  return props.config.domain + "/" + prefix;
};

const _getCosClient = () =>
  new COS({
    getAuthorization(options, callback) {
      // STS 详细文档指引看：https://cloud.tencent.com/document/product/436/14048
      props.config
        .getTempSecret({
          region: props.config.region,
          bucket: props.config.bucket,
          resource: props.config.resource,
        })
        .then((res: any) => {
          callback({
            TmpSecretId: res.data.credentials.tmpSecretId,
            TmpSecretKey: res.data.credentials.tmpSecretKey,
            SecurityToken: res.data.credentials.token,
            StartTime: res.data.startTime, // 时间戳，单位秒，如：1580000000
            ExpiredTime: res.data.expiredTime, // 时间戳，单位秒，如：1580000000
          });
        });
    },
  });

const _randomString = () => {
  const charSet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var randomString = "";
  for (var i = 0; i < 10; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return new Date().getTime() + "-" + randomString;
};

const _buildFilePrefix = (filename: string) => {
  const fileType = filename.split(".").pop()?.toLowerCase();
  return props.config.resource + "/" + _randomString() + "." + fileType;
};

const beforeUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (rawFile.size / 1024 > 500) {
    ElMessage.error("图片不能超过500kb");
    return false;
  }
  return true;
};
const handleUpload: UploadRequestHandler = (options) => {
  return _getCosClient().uploadFile({
    Bucket: props.config.bucket,
    Region: props.config.region,
    Key: _buildFilePrefix(options.file.name),
    Body: options.file,
    onFileFinish: function (err, data, extra) {
      if (err) {
        ElMessage.error("上传失败");
      } else {
        emit("update:modelValue", extra.Key);
      }
    },
  });
};
</script>
<style lang="scss" scoped>
.a-uploader {
  .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
  }
  .el-upload:hover {
    border-color: var(--el-color-primary);
  }
  &__cover {
    display: block;
    width: 148px;
    height: 148px;
    object-fit: cover;
  }
  &__icon {
    border: dashed 1px var(--el-border-color);
    border-radius: 4px;
    width: 148px;
    height: 148px;
    text-align: center;
    position: relative;
    &::before {
      position: absolute;
      width: 26px;
      height: 2px;
      top: 50%;
      left: 50%;
      margin-left: -13px;
      margin-top: -1px;
      background: var(--el-border-color);
      content: "";
    }
    &::after {
      position: absolute;
      width: 2px;
      height: 26px;
      top: 50%;
      left: 50%;
      margin-left: -1px;
      margin-top: -13px;
      background: var(--el-border-color);
      content: "";
    }
  }
}
</style>
