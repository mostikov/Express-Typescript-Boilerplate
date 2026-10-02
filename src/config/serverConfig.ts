export interface ServerConfig {
  host: string
  port: number
}

function parsePort (value: string): number {
  const port = Number(value)

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`Invalid APP_PORT value: ${value}`)
  }

  return port
}

export function readServerConfig (env: NodeJS.ProcessEnv = process.env): ServerConfig {
  const host = env.APP_HOST?.trim() || 'localhost'
  const port = parsePort(env.APP_PORT?.trim() || '3000')

  return { host, port }
}
