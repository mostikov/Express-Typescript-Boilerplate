import { config } from 'dotenv'
import { initWebServer } from './app'
import { initLogger } from 'utils'
import { readServerConfig } from './config/serverConfig'

config()

async function boot (): Promise<void> {
  const logger = initLogger()
  const { host, port } = readServerConfig(process.env)

  await initWebServer({ host, port, logger })
}

boot().catch((err: unknown): void => {
  console.error('Global error handler')
  console.error(err)
  process.exitCode = 1
})
