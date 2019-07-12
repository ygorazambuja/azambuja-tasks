// Update with your config settings.
const { DATABASE_URL } = require("./.env");
module.exports = {
  client: "postgresql",
  connection: DATABASE_URL || {
    database: "tasks",
    user: "postgres",
    password: "123456"
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
