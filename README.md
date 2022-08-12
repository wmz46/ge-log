# GeLog

封装console,支持输出调用事件、日志级别、调用堆栈等信息

调用
```js
import log from '@wmz46/go-log'
log.info('hello','world')
```
在控制台输出结果如下
```
hello world

调用时间：2022-8-12 15:4:9
日志级别：INFO
调用堆栈：at console.info (http://localhost:3000/src/utils/log.ts?t=1660287137216:176:16)
         at <anonymous>:1:9
```

## 使用方法

### 1.使用包管理器安装
```js
npm install @wmz46/ge-log --registry=https://npm.pkg.github.com
# 或
yarn add @wmz46/ge-log --registry=https://npm.pkg.github.com
```

### 2.浏览器直接引入
将`dist/index.umd.js`拷贝到你的项目
```html
<head>
  <script src='dist/index.umd.js'></script>
  <script>
    //请参考后面文档写法
    const log = GeLog
    log.info('hello world')
    ...
  </script>
</head>
```

### 3.打印日志
接口调用同console,目前支持的日志方法有debug,trace,info,log,warn,error
```js
  import log from '@wmz46/go-log'
  log.trace('hi')
  log.debug('hi')
  log.log('hi')
  log.info('hi')
  log.warn('hi')
  log.error('hi')
```
### 4.代替默认console
如果不想修改原日志代码，可以引入后调用`relaceConsole`方法来代替默认console
```js
  log.replaceConsole()
```
### 4.其他
```js
  // 关闭详细信息,关闭后效果同默认console
  log.showDetail = false
  // 设置最低级别显示日志，枚举值如下
  // TRACE = 1,
  // DEBUG = 2,
  // LOG = 3,
  // INFO = 4,
  // WARN = 5,
  // ERROR = 6
  log.level = 3

```


## 发布到github package（作者发布备忘）

修改`package.json`的版本号
```
# 登录
npm login ----registry=https://npm.pkg.github.com
# 打包
yarn build:lib
# 发布
npm publish
```