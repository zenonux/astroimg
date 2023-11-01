# AsyncButton

### 介绍

用于防抖，避免多次提交。

## 代码演示

### 基础用法

```html
<ai-async-button v-slot="slotProps" @click="(e) => asyncFunc()">
  <button :loading="slotProps.loading">button</button>
</ai-async-button>
```

## API

### Props

| 参数     | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| disabled | 是否禁用 | _bollean_ | `false` |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
