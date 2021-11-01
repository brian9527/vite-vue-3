## Layouts

此目錄下的檔案作為佈局組件使用

未指定時默認使用 `default.vue`

以下設定需要搭配 [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) 與 [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) 使用

```html
<route lang="yaml">
meta:
  layout: demo
</route>
```

## Type error fix

型別錯誤修正(`v0.2.2`)：不影響開發，但要修正後才能正常 build ~~(或是不要執行vue-tsc)~~

```ts
// vite-plugin-vue-layouts/client.d.ts
declare module 'layouts-generated' {
  import { Component } from 'vue'; // 補上沒匯入的型別
  import { RouteRecordRaw } from 'vue-router'
  export function setupLayouts(routes: RouteRecordRaw[]): RouteRecordRaw[]; // 補上回傳型別
  export function createRouterLayout(
    resolve: (layoutName: string) => Promise<Component | { default: Component }>): Component; // 補上回傳型別
}
```
