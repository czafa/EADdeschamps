// Importa a biblioteca 'pg', que permite conectar e executar comandos SQL em um banco de dados PostgreSQL.
import pg from "pg";

// Extrai a classe Client da biblioteca 'pg'. Essa classe será usada para criar uma conexão com o banco de dados.
const { Client } = pg;

// Declara uma função assíncrona chamada `query` que recebe um `queryObject`.
// Esse objeto representa a consulta que será executada no banco (pode ser uma string SQL ou um objeto com query e parâmetros).
async function query(queryObject) {
  // Cria uma nova instância de conexão com o banco de dados PostgreSQL.
  // A conexão usará as variáveis de ambiente padrão, como PGUSER, PGHOST, PGDATABASE etc.
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD, //process.env.POSTGRES_PASSWORD,
  });

  // Estabelece a conexão com o banco de dados.
  await client.connect();

  // Executa a consulta recebida como parâmetro e armazena o resultado.
  const result = await client.query(queryObject);

  // Encerra a conexão com o banco de dados para liberar recursos.
  await client.end();

  // Retorna o resultado da consulta para quem chamou a função.
  return result;
}

// Exporta um objeto padrão com a função `query`.
// Isso permite que outros arquivos importem este módulo e chamem `db.query(...)`.
export default {
  query: query,
};
