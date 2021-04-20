const dotenv = require("dotenv");

dotenv.config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.production",
});

module.exports = {
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "imobe",
  logging: false,
  entities: [process.env.TYPEORM_ENTITY],
  migrations: [process.env.TYPEORM_MIGRATION],
  cli: {
    entitiesDir: "src/models",
    migrationsDir: process.env.TYPEORM_MIGRATION_DIR,
  },
};
