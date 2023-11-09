import { Knex } from "knex";

//criando tabela
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('transactions', (table) => {
        table.uuid('id').primary()
        table.text('title').notNullable()
        table.decimal('amount', 10, 2).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    })
}

//deletando tabela
export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('transactions')
}

//up e down: up faz e down desfaz. se up criou uma tabela o down desfaz ela caso ocorra algum erro