import { type Response, type Request, type NextFunction } from "express";

export function healthCheck (req: Request, res: Response, next: NextFunction) {
const currentDate = new Date()
  return res.status(200).json({
    time: currentDate.toISOString(),
    status: 'Health'
  })
}
