import express, { type Router } from 'express'
import { publicController } from 'controllers'

export const publicRouter: Router = express.Router() as Router

/**
 * Endpoint for checking the health status of the server.
 * @api GET /health-check
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response with date\time of the health check.
 * @throws {Error} Any unhandled errors during the health check.
 * @example
 * HTTP 200 OK
 * { "time": "2022-01-04T12:34:56.789Z", status: "Health" }
 */

publicRouter.get('/health-check', publicController.healthCheck)
