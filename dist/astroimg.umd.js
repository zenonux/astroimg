(function(r,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("cos-js-sdk-v5"),require("element-plus")):typeof define=="function"&&define.amd?define(["exports","vue","cos-js-sdk-v5","element-plus"],e):(r=typeof globalThis<"u"?globalThis:r||self,e(r.astroimg={},r.Vue,r.COS,r.elementPlus))})(this,function(r,e,u,s){"use strict";const f=(i,a)=>{const t=i.__vccOpts||i;for(const[d,p]of a)t[d]=p;return t},_={};function g(i,a){return e.openBlock(),e.createElementBlock("button")}const m=f(_,[["render",g]]),k=["src"],h=e.createElementVNode("div",{class:"el-upload__tip"}," 支持 jpg/jpeg/png 格式，大小不超过500kb，建议使用tinypng压缩后上传 ",-1),y=e.defineComponent({__name:"index",props:{modelValue:{},config:{}},emits:["update:modelValue"],setup(i,{emit:a}){const t=i,d=n=>t.config.domain+"/"+n,p=()=>new u({getAuthorization(n,c){t.config.getTempSecret({region:t.config.region,bucket:t.config.bucket,resource:t.config.resource}).then(o=>{c({TmpSecretId:o.data.credentials.tmpSecretId,TmpSecretKey:o.data.credentials.tmpSecretKey,SecurityToken:o.data.credentials.token,StartTime:o.data.startTime,ExpiredTime:o.data.expiredTime})})}}),x=()=>{const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var c="",o=0;o<10;o++){var l=Math.floor(Math.random()*n.length);c+=n.substring(l,l+1)}return new Date().getTime()+"-"+c},S=n=>{var o;const c=(o=n.split(".").pop())==null?void 0:o.toLowerCase();return t.config.resource+"/"+x()+"."+c},T=n=>n.size/1024>500?(s.ElMessage.error("图片不能超过500kb"),!1):!0,b=n=>p().uploadFile({Bucket:t.config.bucket,Region:t.config.region,Key:S(n.file.name),Body:n.file,onFileFinish:function(c,o,l){c?s.ElMessage.error("上传失败"):a("update:modelValue",l.Key)}});return(n,c)=>(e.openBlock(),e.createBlock(e.unref(s.ElUpload),{class:"a-uploader","show-file-list":!1,"http-request":b,"before-upload":T,accept:".jpg,.jpeg,.png"},{tip:e.withCtx(()=>[h]),default:e.withCtx(()=>[t.modelValue?(e.openBlock(),e.createElementBlock("img",{key:0,src:d(t.modelValue),class:"a-uploader__cover"},null,8,k)):(e.openBlock(),e.createBlock(e.unref(s.ElIcon),{key:1,class:"a-uploader__icon"}))]),_:1}))}}),B="";r.ADebounceAsyncButton=m,r.AUploader=y,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
