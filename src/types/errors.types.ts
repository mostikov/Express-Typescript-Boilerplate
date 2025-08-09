export abstract class BaseAppError extends Error {
  readonly status: number

  constructor(status: number, msg: string) {
    super(msg)
    this.status = status
  }
}

export class BadRequestError extends BaseAppError {
  constructor(msg: string) {
    super(400, msg)
  }
}

export class UnauthorizedError extends BaseAppError {
  constructor(msg: string) {
    super(401, msg)
  }
}

export class ForbiddenError extends BaseAppError {
  constructor(msg: string) {
    super(403, msg)
  }
}

export class NotFoundError extends BaseAppError {
  constructor(msg: string) {
    super(404, msg)
  }
}

export class InternalServerError extends BaseAppError {
  constructor(msg: string) {
    super(500, msg)
  }
}

export type ErrorResponse = {
  message: string
}
