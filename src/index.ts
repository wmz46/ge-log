import { version } from '../package.json'
// 定义日志等级
enum LogLevel {
  TRACE = 1,
  DEBUG = 2,
  LOG = 3,
  INFO = 4,
  WARN = 5,
  ERROR = 6

}
// 定义日志等级对应的样式，不影响用户自己的消息格式
const Style: { [name: string]: string } = {
  ERROR: 'color:red',
  WARN: 'color:orange',
  DEBUG: 'color:gray',
  INFO: 'color:green',
  LOG: 'color:grean'
}
// 格式化日期
const formatDate = (date: Date): string => {
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2,'0')
  const day = `${date.getDate()}`.padStart(2,'0')
  const hour = `${date.getHours()}`.padStart(2,'0')
  const minute = `${date.getMinutes()}`.padStart(2,'0')
  const second = `${date.getSeconds()}`.padStart(2,'0')
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
// 查询打印参数中占位符个数
const getPlaceholderNum = (str: string) => {
  if (str == null) {
    return 0
  }
  const arr = str.match(/%[csdifoO]/g)
  if (arr == null) {
    return 0
  }
  return arr.length
}
// 生成最终的打印参数数组
const generateMessage = (level: LogLevel, ...args: any) => {
  const arr1 = [] // 占位符数组
  const arr2 = [] // 对象数组

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (typeof (arg) == 'object') {
      arr1.push('%o')
      arr2.push(arg)
    } else if (typeof (arg) == 'string') {
      const num = getPlaceholderNum(arg)
      if (num > 0) {
        arr1.push(arg)
        for (let j = 0; j < num; j++) {
          arr2.push(args[i + j + 1])
        }
        i += num
      } else {
        arr1.push('%s')
        arr2.push(arg)
      }
    } else {
      arr1.push('%s')
      arr2.push(arg)
    }
  }

  const err = new Error();
  (Error as any).captureStackTrace(err, generateMessage)
  const stack = err.stack || ''
  const matchResult = stack.match(/at .*/g) || []
  arr1.push('%c')
  arr2.push(Style[LogLevel[level]])
  const arr = [
    '',
    `调用时间：${formatDate(new Date())}`
  ]
  if (showLevel) {
    arr.push(`日志级别：${LogLevel[level]}`)
  }

  if (showStack) {
    if (maxStackLevel == 0) {
      arr.push(`调用堆栈：`)
      arr2.push(err)
    } else {
      // 处理堆栈信息
      matchResult.splice(0, 1)
      if (maxStackLevel > 0 && matchResult.length > maxStackLevel) {
        matchResult.splice(maxStackLevel, matchResult.length - maxStackLevel)
      }
      if (matchResult.length > 0) {
        arr.push(`调用堆栈：${matchResult.join('\r\n         ')}`)
      }
    }
  }
  arr1.push(arr.join('\r\n'))
  return [arr1.join(' '), ...arr2]
}
const _log = console.log
const _error = console.error
const _info = console.info
const _trace = console.trace
const _warn = console.warn
const _debug = console.debug
const error = function (...args: any) {
  if (level <= LogLevel.ERROR) {
    if (showDetail) {
      _error(...generateMessage(LogLevel.ERROR, ...args))
    } else {
      _error(...args)
    }
  }
}
const log = function (...args: any) {
  if (level <= LogLevel.LOG) {
    if (showDetail) {
      _log(...generateMessage(LogLevel.LOG, ...args))
    } else {
      _log(...args)
    }
  }
}
const info = function (...args: any) {
  if (level <= LogLevel.INFO) {
    if (showDetail) {
      _info(...generateMessage(LogLevel.INFO, ...args))
    } else {
      _info(...args)
    }
  }
}
const debug = function (...args: any) {
  if (level <= LogLevel.DEBUG) {
    if (showDetail) {
      _debug(...generateMessage(LogLevel.DEBUG, ...args))
    } else {
      _debug(...args)
    }
  }
}
const trace = function (...args: any) {
  if (level <= LogLevel.TRACE) {
    if (showDetail) {
      _trace(...generateMessage(LogLevel.TRACE, ...args))
    } else {
      _trace(...args)
    }
  }
}
const warn = function (...args: any) {
  if (level <= LogLevel.WARN) {

    if (showDetail) {
      _warn(...generateMessage(LogLevel.WARN, ...args))
    } else {
      _warn(...args)
    }
  }
}
/**
 * 是否显示日志详情
 */
let showDetail = true
/**
 * 是否显示日志级别
 */
let showLevel = true
/** 显示堆栈信息 */
let showStack = true
/**
 * 最多堆栈层级，0表示不限制
 */
let maxStackLevel = 0

/**
* 最低显示级别日志
*/
let level = LogLevel.TRACE
const GeLog = {
  get version() {
    return version
  },
  get showDetail() {
    return showDetail
  },
  set showDetail(value: boolean) {
    if (value) {
      _info('开启日志详情')
    } else {
      _info('关闭日志详情')
    }
    showDetail = value
  },

  get showLevel() {
    return showLevel
  },
  set showLevel(value: boolean) {
    if (value) {
      _info('开启日志级别显示')
    } else {
      _info('关闭日志级别显示')
    }
    showLevel = value
  },
  get showStack() {
    return showStack
  },
  set showStack(value) {
    if (value) {
      _info('开启堆栈信息显示')
    } else {
      _info('关闭堆栈信息显示')
    }
    showStack = value
  },
  get maxStackLevel() {
    return maxStackLevel
  },
  set maxStackLevel(value: number) {
    _info('限制堆栈层级最多为' + value + '(0不限制)')
    maxStackLevel = value
  },
  get level() {
    return level
  },
  set level(value: LogLevel) {
    _info(`设置日志显示级别为：${LogLevel[value]}`)
    level = value
  },

  error: error,
  log: log,
  info: info,
  debug: debug,
  trace: trace,
  warn: warn,
  replaceConsole() {
    console.log = log
    console.error = error
    console.debug = debug
    console.trace = trace
    console.info = info
    console.warn = warn
  }
}
export default GeLog