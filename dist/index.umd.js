(function(f,d){typeof exports=="object"&&typeof module<"u"?module.exports=d():typeof define=="function"&&define.amd?define(d):(f=typeof globalThis<"u"?globalThis:f||self,f.GeLog=d())})(this,function(){"use strict";const O={name:"@wmz46/ge-log",version:"0.0.2",main:"./dist/index.umd.js",module:"./dist/index.es.js",types:"./dist/index.d.ts",type:"module",files:["dist"],exports:{".":{import:"./dist/index.es.js",require:"./dist/index.umd.js"}},repository:{type:"git",url:"https://github.com/wmz46/ge-log"},publishConfig:{registry:"https://npm.pkg.github.com/wmz46"},scripts:{dev:"vite",build:"vue-tsc --noEmit && vite build","build:lib":"vue-tsc --noEmit && vite build --config ./build/lib.config.ts",preview:"vite preview"},dependencies:{},devDependencies:{"@vitejs/plugin-vue":"^3.0.2",typescript:"^4.6.4",vite:"^3.0.6","vite-plugin-dts":"^1.4.1",vue:"^3.2.37","vue-tsc":"^0.39.5"}};var h=(e=>(e[e.TRACE=1]="TRACE",e[e.DEBUG=2]="DEBUG",e[e.LOG=3]="LOG",e[e.INFO=4]="INFO",e[e.WARN=5]="WARN",e[e.ERROR=6]="ERROR",e))(h||{});const B={ERROR:"color:red",WARN:"color:orange",DEBUG:"color:gray",INFO:"color:green",LOG:"color:grean"},G=e=>{const i=e.getFullYear(),t=e.getMonth()+1,n=e.getDate(),g=e.getHours(),x=e.getMinutes(),l=e.getSeconds();return`${i}-${t}-${n} ${g}:${x}:${l}`},N=e=>{if(e==null)return 0;const i=e.match(/%[csdifoO]/g);return i==null?0:i.length},u=(e,...i)=>{const t=[],n=[];for(let p=0;p<i.length;p++){const c=i[p];if(typeof c=="object")t.push("%o"),n.push(c);else if(typeof c=="string"){const m=N(c);if(m>0){t.push(c);for(let a=0;a<m;a++)n.push(i[p+a+1]);p+=m}else t.push("%s"),n.push(c)}else t.push("%s"),n.push(c)}const g={};Error.captureStackTrace(g,u);const l=(g.stack||"").match(/at .*/g)||[];t.push("%c"),n.push(B[h[e]]);const C=["","",`\u8C03\u7528\u65F6\u95F4\uFF1A${G(new Date)}`,`\u65E5\u5FD7\u7EA7\u522B\uFF1A${h[e]}`];return l.splice(0,1),l.length>0&&(C.push("\u8C03\u7528\u5806\u6808\uFF1A%s"),n.push(`${l.join(`
         `)}`)),t.push(C.join(`
`)),[t.join(" "),...n]},E=console.log,F=console.error,r=console.info,y=console.trace,b=console.warn,D=console.debug,R=function(...e){s<=6&&F(...o?u(6,...e):e)},v=function(...e){s<=3&&E(...o?u(3,...e):e)},w=function(...e){s<=4&&r(...o?u(4,...e):e)},A=function(...e){s<=2&&D(...o?u(2,...e):e)},j=function(...e){s<=1&&y(...o?u(1,...e):e)},$=function(...e){s<=5&&b(...o?u(5,...e):e)};let o=!0,s=1;return{get version(){return O.version},get showDetail(){return o},set showDetail(e){r(e?"\u5F00\u542F\u65E5\u5FD7\u8BE6\u60C5":"\u5173\u95ED\u65E5\u5FD7\u8BE6\u60C5"),o=e},get level(){return s},set level(e){r(`\u8BBE\u7F6E\u65E5\u5FD7\u663E\u793A\u7EA7\u522B\u4E3A\uFF1A${h[e]}`),s=e},error:R,log:v,info:w,debug:A,trace:j,warn:$,replaceConsole(){console.log=v,console.error=R,console.debug=A,console.trace=j,console.info=w,console.warn=$}}});
