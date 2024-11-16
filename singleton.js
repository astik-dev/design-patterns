class Logger {

    static #PRIVATE_CONSTRUCTOR_KEY = Symbol();

    static instance;

    logs = [];


    constructor (key) {
        if (key != Logger.#PRIVATE_CONSTRUCTOR_KEY) {
            throw new Error("Cannot create multiple instances of Logger. Use Logger.getInstance.");
        }
    }

    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger(Logger.#PRIVATE_CONSTRUCTOR_KEY);
        }
        return Logger.instance;
    }


    getLogs() {
        return this.logs;
    }

    clearLogs() {
        this.logs = [];
    }


    info(message) {
        this.log("INFO", message);
    }

    warn(message) {
        this.log("WARN", message);
    }

    error(message) {
        this.log("ERROR", message);
    }


    log(level, message) {
        const logMessage = `[${level}]: ${message}`;
        this.logs.push(logMessage);
        console.log(logMessage);
    }
}



function clientCode() {

    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();
    const logger3 = Logger.getInstance();
  
    logger1.info('Info message from logger1');
    logger2.warn('Warning message from logger2');
    logger3.error('Error message from logger3');
    
    console.log('All logs:', logger1.getLogs());
}
  
clientCode();
