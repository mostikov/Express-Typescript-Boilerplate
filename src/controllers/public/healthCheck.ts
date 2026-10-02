import { type Response, type Request, type NextFunction } from 'express'

interface HealthResponse {
  time: string
  status: string
}

export function healthCheck (req: Request, res: Response, next: NextFunction): Response<HealthResponse> {
  void req
  void next

  const currentDate = new Date()
  return res.status(200).json({
    time: currentDate.toISOString(),
    status: 'Health'
  })
}
