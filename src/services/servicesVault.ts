import type { BaseService } from 'types'

export class ServiceVault {
  public readonly vault: Record<string, BaseService> = {}

  constructor (services: BaseService[]) {
    for (const service of services) {
      this.set(service)
    }
  }

  public get (name: string): BaseService {
    const service = this.vault[name] ?? null

    if (!service) {
      throw new Error()
    }

    return service
  }

  private set (service: BaseService): void {
    this.vault[service.name] = service
  }
}
