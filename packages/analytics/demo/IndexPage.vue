<template>
 <div>
    <button @click="onClickRegister">注册点击</button>
    <button @click="onClickRegisterEnd">注册结果</button>
    <router-link to="/test">页面跳转</router-link>
  </div>
    </template>
    <script setup lang="ts">
import { getAnalytics } from "../src";
function onClickRegister() {
  getAnalytics().track("sign_up_button_click");
}
function onClickRegisterEnd() {
  getAnalytics().track("sign_up_result", {
    sign_up_method: "手机号注册",
    is_success: false,
    fail_reason: "账号已存在",
  });
}
</script>
