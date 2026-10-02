import type { NextFunction, Request, Response } from 'express'
import { BaseAppError } from 'types'
import type { ErrorResponse } from 'types'

const handleGenericError = (err: unknown, res: Response<ErrorResponse>): Response<ErrorResponse> => {
  console.error(err)

  return res.status(500).json({ message: 'An unexpected error occurred on the server. Please try again later or contact support for assistance.' })
}

export const errorHandler = (err: unknown, req: Request, res: Response<ErrorResponse>, next: NextFunction): Response<ErrorResponse> | undefined => {
  void req
  void next

  if (err instanceof BaseAppError) {
    console.error(err)

    return res.status(err.status).json({ message: err.message })
  }

  return handleGenericError(err, res)
}
