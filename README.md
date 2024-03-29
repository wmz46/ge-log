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
需要有github read:packages 权限的token
在.npmrc中加入源和token
```
@wmz46:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken={你的token}
```
```js
npm install @wmz46/ge-log
# 或
yarn add @wmz46/ge-log
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
### 5.其他
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
  //设置最大堆栈层数，0不显示
  log.maxStackLevel = 1
  //设置是否显示堆栈信息
  log.showStack = false
  //设置是否显示日志级别
  log.showLevel = false

```
### 6.和VConsole一起使用的注意事项

如果使用了GeLog的代替默认console功能，需注意和VConsole的兼容问题。

GeLog原理和VConsole以及其他日志插件原理一样，均是替换原始`console`来实现。

既然要替换，必定会先要把原始`console`对应的log、info、error、debug存储起来。

假如GeLog和VConsole是在同个\<script>下，则会出现大家都缓存了最原始的`console`，从而导致出现不兼容的情况。

比较好的方案是先初始化VConsole先替换原始`console`，然后GeLog再替换被VConsole替换的的`console`。

VConsole有以下几种引入方式
- 1.微信小程序调试模式
由于代码不需要引入VConsole，不存在冲突，GeLog可以直接使用
- 2.VConsole是通过html直接引入
由于\<script>隔离，不存在冲突，GeLog可以直接使用
- **3.VConsole通过npm引入**
npm处理比较麻烦，原因编译后都是在同个\<script>，所以需要通过异步引入GeLog
```ts
import VConsole from 'vconsole';
const vConsole = new VConsole();
import('@wmz46/ge-log').then((module:any)=>{
  const GeLog = module.default
  GeLog.replaceConsole()
})

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
