const dotenv = require("dotenv");
const fs = require("fs");

const environment = process.env.NODE_ENV || 'development';
const data = dotenv.parse(fs.readFileSync(`.env.${environment}`));

const config = {
    type: data.TYPEORM_TYPE || 'mysql',
    host: data.TYPEORM_HOST,
    port: Number.parseInt(data.TYPEORM_PORT),
    username: data.TYPEORM_USERNAME,
    password: data.TYPEORM_PASSWORD,
    database: data.TYPEORM_DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/**/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: "dist/db/migrations"
    },
    synchronize: data.TYPEORM_SYNCHRONIZE === 'true',
};
module.exports = config;