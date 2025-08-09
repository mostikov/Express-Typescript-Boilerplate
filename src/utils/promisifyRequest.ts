import { type Response, type Request, type NextFunction } from 'express'

type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>

export const promisifyRequest = (cb: AsyncRequestHandler) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(cb(req, res, next)).catch(next)
  }
}
