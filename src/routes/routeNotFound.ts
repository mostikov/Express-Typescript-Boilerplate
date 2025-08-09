import { type Request, type Response, type NextFunction } from 'express'
import { promisifyRequest } from 'utils'

export const routeNotFound = promisifyRequest(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  console.log(`[Route Not Found]: ${req.method} ${req.originalUrl}`)
  res.status(404).json({ message: 'Not found' })
})