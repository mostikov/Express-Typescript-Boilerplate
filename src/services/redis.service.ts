import { BaseService } from 'types'

export class RedisService implements BaseService {
  public readonly name: string = 'RedisService'

  constructor() {
    logger.log(`${this.name} was created`)
  }
}
