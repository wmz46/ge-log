declare enum LogLevel {
    TRACE = 1,
    DEBUG = 2,
    LOG = 3,
    INFO = 4,
    WARN = 5,
    ERROR = 6
}
declare const log: {
    readonly version: string;
    showDetail: boolean;
    level: LogLevel;
    error(...args: any): void;
    log(...args: any): void;
    info(...args: any): void;
    debug(...args: any): void;
    trace(...args: any): void;
    warn(...args: any): void;
    replaceConsole(): void;
};
export default log;
