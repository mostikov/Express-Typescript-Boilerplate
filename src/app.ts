import express, { type Express } from 'express'
import cors from 'cors'
import { errorHandler } from 'middlewares'
import { publicRouter, routeNotFound } from 'routes'
import { getServices } from 'services'
import type { GlobalLogger } from 'types'

interface InitWebServerOptions {
  host: string
  port: number
  logger: GlobalLogger
}

const app = express()

function createWebServer (): Express {
  app.use(cors())
  app.use(express.json({ limit: '1mb' }))
  app.use('/public-api', publicRouter)
  app.use(routeNotFound)
  app.use(errorHandler)

  return app
}

export async function initWebServer ({ host, port, logger }: InitWebServerOptions): Promise<void> {
  const webApp = createWebServer()

  getServices(logger)

  webApp.listen(port, () => {
    logger.log(`Server started on http://${host}:${port}`)
  })
}
