import { config } from 'dotenv'
import { initWebServer } from './app'
import { initLogger } from 'utils'

config()

async function boot(): Promise<void> {
  const { APP_HOST = 'localhost', APP_PORT = '3000' } = process.env

  ;(globalThis as any).logger = initLogger()

  await initWebServer(APP_HOST, APP_PORT)
}

boot().catch(async (err) => {
  console.log('Global error handler')
  console.dir(err)
})
