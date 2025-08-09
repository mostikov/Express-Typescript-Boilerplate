import { GlobalLogger } from 'types'

class AppLogger implements GlobalLogger {
    private transport: GlobalLogger = console // By default use regular console

    constructor(transport?: GlobalLogger){
        transport && (this.transport = transport)
        this.checkIsComplete()
    }

    private checkIsComplete(): void {
        if (!this.transport){
            throw new Error('Transport system for logger was not defined properly')
        }
    }

    log (...args: any) {
        this.transport.log(...args)
    }
}

export function initLogger(): GlobalLogger {
    return new AppLogger(console)
}