import { NextFunction, type Request, type Response } from 'express'
import { BaseAppError, ErrorResponse } from 'types'

/**
 * Handles a generic error response by logging the error
 * and sending a response with a user-friendly message to the client.
 *
 * @param {any} err - The error to be handled
 * @param {Response<ErrorResponse>} res - Express Response object for sending HTTP responses with `message` in body.
 */
const handleGenericError = (err: any, res: Response<ErrorResponse>) => {
  console.error(err)

  return res.status(500).json({ message: 'An unexpected error occurred on the server. Please try again later or contact support for assistance.' })
}

/**
 * Error handler middleware.
 * Logs the error, sends an appropriate HTTP response
 *
 * @param {any} err - Error instance.
 * @param {Request} req - Express Request object representing the HTTP request.
 * @param {Response<ErrorResponse>} res - Express Response object for sending HTTP responses with `message` in body.
 * @param {NextFunction} next - Express NextFunction to invoke the next middleware.
 */
export const errorHandler = (err: any, req: Request, res: Response<ErrorResponse>, next: NextFunction) => {
  const hooks = (req as any).hooks
  if (typeof hooks?.onError === 'function') hooks.onError()

  if (err instanceof BaseAppError) {
    console.error(err)

    return res.status(err.status).json({ message: err.message })
  } else {
    handleGenericError(err, res)
  }
}
