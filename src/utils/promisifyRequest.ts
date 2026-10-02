import { type NextFunction, type Request, type Response } from 'express'

type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>

export const promisifyRequest = (cb: AsyncRequestHandler): ((req: Request, res: Response, next: NextFunction) => void) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(cb(req, res, next)).catch(next)
  }
}
