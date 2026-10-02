import type { BaseService, GlobalLogger } from 'types'

export class RedisService implements BaseService {
  public readonly name = 'RedisService'

  constructor (private readonly logger: GlobalLogger) {
    this.logger.log(`${this.name} was created`)
  }
}
