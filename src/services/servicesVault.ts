import { BaseService } from 'types'

export class ServiceVault {
  public readonly vault: Record<string, BaseService> = {}
  constructor(services: BaseService[]) {
    for (let service of services) {
      this.set(service)
    }
  }

  public get(name: string): BaseService {
    const service = this.vault[name] ?? null

    if (!service) {
      throw new Error(`Service ${name} was not found`)
    }
    return service
  }

  private set(service: BaseService) {
    this.vault[service.name] = service
  }
}
