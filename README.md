# 工具包

> 封装一些常用的 JS 方法，后面会慢慢增加；

## 使用方法

### 安装

```bash
npm i @shaokang/k-utils
#or
yarn add @shaokang/k-utils
```

### 引入

```javascript
import kUtils from "@shaokang/k-utils"; //整包
import { strUtils } from "@shaokang/k-utils"; //按需引入
```

### 方法

#### strUtils 字符串相关方法

1. ##### getUrlPrmt(url) 获取 url？后面的参数，以对象的方式返回

   - url: 传入的网址，浏览器默认为当前的网址

#### check 校验方法，输出为 true 或 false

1. ##### isNode 判断是否是 node 环境

   - url: 传入的网址，浏览器默认为当前的网址
