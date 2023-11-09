import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'
// as setupKnex para nao dar conflito de nomes na hora de exportar o knex no fim.
// Knex:(com K maiusculo)interface para usar configs para o migrations no config.

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
