# [筆記] Vite 配置 twin.marco / styled-components 的配置

為了方便配置 styled-component 與 tailwind 的組合, 選擇了 `twin.marco`

### 安裝
- 安裝 `twin.marco`, `styled-components`
- 安裝 `babel-plugin-macros`, `babel-plugin-styled-components`

- 再來是 建立 `twin.d.ts` 確保型別 

- `babel-plugin-macros`, `babel-plugin-styled-components` 配置於 `vite.config.ts` 
  此項可以透過 devTool 看到 className 對應組件名稱, 也可以取消選擇 `{ displayName: false }`

- `"preset": "styled-components"` 配置於 `package.json`

```js
// vite.config.ts
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
      },
    }),
  ],

// package.json
  "babelMacros": {
    "twin": {
      "preset": "styled-components"
    }
  }
```