# module-template

#### 本地测试组件

```javascript
// 在当前npm模块项目下
npm link
//or
sudo npm link

// 在引入该模块的项目下
npm link module-template //模块名称

```

#### 如何使用本模板

```javascript

npx degit https://github.com/JaremyCheng/module-template.git dirName

```

#### TODO
- eslint rules补充
- 脚手架

#### 已完成

- typescript
- rollup 打包
- eslint
- lint-staged + prettier
- 提交信息格式化 - husky + commitizen + commitlint
- changeLog 生成



> 以下为模板格式, 发布前需自行替换内容

## Installation

```shell
$ npm i module-name
```

## Quick Start

```javascript
import xxx from 'module-name';
import { xxx } from 'module-name';
```

## Documentation

Some Description...
[Some Link](https://blabla-example-name.com)
