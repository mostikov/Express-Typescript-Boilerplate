import express, { type Express } from 'express'
import cors from 'cors'
import { errorHandler } from 'middlewares'
import { publicRouter, routeNotFound } from 'routes'
import { getServices } from 'services'

const app = express()

async function createWebServer(): Promise<Express> {
  app.use(cors())

  app.use(express.json({ limit: '1mb' }))

  app.use('/public-api', publicRouter)

  app.use(routeNotFound)

  app.use(errorHandler)

  return app
}

export async function initWebServer(host: string, port: string): Promise<void> {
  const app = await createWebServer()

  getServices()

  app.listen(port, () => {
    void logger.log(`Server started on http://${host}:${port}`)
  })
}
