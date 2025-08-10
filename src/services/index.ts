import { ServiceVault } from './servicesVault'
import { RedisService } from './redis.service'

let vault: ServiceVault | null = null

export function getServices(): ServiceVault {
  if (!vault) {
    vault = new ServiceVault([new RedisService()])
  }

  return vault
}

export { RedisService }
