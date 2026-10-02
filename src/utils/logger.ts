import type { GlobalLogger } from 'types'

class AppLogger implements GlobalLogger {
  constructor (private readonly transport: GlobalLogger = console) {}

  log (...args: unknown[]): void {
    this.transport.log(...args)
  }
}

export function initLogger (): GlobalLogger {
  return new AppLogger()
}
