declare enum LogLevel {
    TRACE = 1,
    DEBUG = 2,
    LOG = 3,
    INFO = 4,
    WARN = 5,
    ERROR = 6
}
declare const GeLog: {
    readonly version: string;
    showDetail: boolean;
    showLevel: boolean;
    showStack: boolean;
    maxStackLevel: number;
    level: LogLevel;
    error: (...args: any) => void;
    log: (...args: any) => void;
    info: (...args: any) => void;
    debug: (...args: any) => void;
    trace: (...args: any) => void;
    warn: (...args: any) => void;
    replaceConsole(): void;
};
export default GeLog;
