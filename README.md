# React 後台管理系統

# 安裝腳手架

```bash
npm i create-react-app -g
```

![image](./images/20220105115642.png)

# 建立模板項目

```bash
create-react-app react-admin
```
![image](./images/20220105115713.png)

進入項目運行
```bash
cd react-admin
npm start
```

![image](./images/20220105115933.png)


# 打包指令

```bash
npm run build
```
![image](./images/20220105135510.png)

```bash
npm install -g serve
```
![image](./images/20220105135535.png)

```bash
serve build
```
![image](./images/20220105135607.png)

# 整理目錄

刪除項目建構時的檔案

![image](./images/20220105143832.png)

建立新的目錄結構

![image](./images/20220105145543.png)

# Ant Design

https://ant.design/docs/react/use-with-create-react-app-cn

![image](./images/20220105150856.png)

安裝

```bash
npm i antd
```

![image](./images/20220105151201.png)

# 實現組件按需打包

```bash
npm i react-app-rewired customize-cra babel-plugin-import
```

![image](./images/20220105151434.png)

## 創建配置文件(目前無法起作用，可能與版本有關，可先跳過此步驟)

config-overrides.js

```js
const { override, fixBabelImports } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  })
)
```

## 修改package.json

原配置

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

修改後配置

```json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
```

# 自定義antd主題(可能版本問題會報錯，先跳過此步驟)

安裝依賴

```bash
npm i less less-loader
```

![image](./images/20220105153904.png)

## 修改config-overrides

```js
const { override, fixBabelImports,addLessLoader } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#cccccc' },
    },
    sourceMap:true,
  }),
)
```

# 上述按需導入跟改antd無法成功

推測是版本問題

先使用之前完成的項目為基底，繼續先行開發

https://github.com/IvesShe/React_AntDesign

# 安裝路由

```bash
npm install react-router-dom@5.2.0
```

沒指定版本的話，目前這時間安裝(2022/1/5)，會裝到6版的，寫法與舊版的不同，真的蠻多坑的

# 新增Login組件

## Login.jsx

```js

```

## Login.less

```less

```
