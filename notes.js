/*coisas para instalar ao iniciar um projeto com typescript

* typescript - javascript tipado
* fastify - framework
* types/node - para ts funcionar no node
* tsx - para ts = js
* knex - query builder
* sqlite - banco de dados
* eslint - para correção de sintax
* dotenv - para lidar com variaveis de ambiente
* zod - para validação de dados

npm i -D typescript - instalar como uma dependencia de desenvolvimento, o typescript

npm i fastify - framework base

npm install  -D @types/node - para o node reconhecer os padrões ts

npm i tsx -D - instalar como uma dependencia de desenvolvimento, o tsx, para o node executar o ts como se fosse o js

npm install knex sqlite
sqlite é um banco de dados sql relacional
knex é um query builder, ou seja, um criador de query

formas de comunicação com o db: drivers nativos, querybuilders, e orms

migrations: forma de deixar o codigo dinamico, facil de trabalhar com mais pessoas,todas podem mexer no codigo ao mesmo tempo e o migrations salva um em uma tabela,com data e horario das mudanças feitas do db.
To work: edit package.json on scripts:"knex": "node --no-warnings --loader tsx ./node_modules/knex/bin/cli.js --knexfile ./knexfile.ts",
para executar uma migration: npm run knex -- migrate:latest
para desfazer uma migration: npm run knex -- migrate:rollback
 
migrations nao podem ser editadas depois de enviadas para a equipe, é preciso criar uma nova migration que corriga o erro, exemplo está no 02-api-rest-nodejs/db/migrations/add session id to transactions

npm i eslint @rocketseat/eslint-config -D - para automatizar a correção de erros na escrita do codigo 
necessário instalar a extensão eslint
criar arquivo .eslintrc.json e especificar qual o padrão de escrita da rocketsear eu quero usar, exemplo:
{
    "extends": [
        "@rocketseat/eslint-config/node"
    ]
}

também adicionei um novo script ao package, o "lint": "eslint src --ext .ts --fix"
para fazer a correção ao abrir um arquivo, executar comando npm run lint



novo comando para executar o server
npx tsx src/server.ts

para facilitar a execução do server, editar o package.json scripts.
"dev": "tsx src/server.ts"
depois é só usar o 'npm run dev' ao inves de 'npx tsx src/server.ts'

adicionar 'watch no script dev para o servidor salvar alterações automaticamente. resultado final: "dev": "tsx watch src/server.ts"

para transformar o ts em js
npx tsc src/server.ts
*/

/*Criando esqueleto de uma tabela

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('nomeDaTabela', (table) => {
        table.uuid('id').primary()
        table.text('title').notNullable()
        table.decimal('amount', 10, 2).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    })
}


Preenchendo tabela

app.get('/hello', async () => {
  const nomeDaInserção = await knex('nomeDaTabela').insert({
    id: crypto.randomUUID(),
    title: 'Transação de teste',
    amount: 1000,
  })
  return transaction
})
*/

/*
Variaveis de ambientes 
informações que podem ser diferentes dependendo de em qual ambiente a aplicação está executando.
tipos de ambientes: desenvolvimento, produção, teste, preview
.env: é a extensão para esse serviço.
nele vc coloca os dados variaveis
ps:o arquivo .env n deve ser enviado para o github, normalmente cria-se outro arquivo chamado .env.exemple, nele coloca-se os nomes dos arquivos variaveis, mas sem os valores.

*/