import type { GlobalLogger } from 'types'
import { RedisService } from './redis.service'
import { ServiceVault } from './servicesVault'

let vault: ServiceVault | null = null

export function getServices (logger: GlobalLogger): ServiceVault {
  if (!vault) {
    vault = new ServiceVault([new RedisService(logger)])
  }

  return vault
}

export { RedisService }
