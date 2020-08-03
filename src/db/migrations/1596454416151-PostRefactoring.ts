import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoring1596454416151 implements MigrationInterface {
    name = 'PostRefactoring1596454416151'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "configuracoes" ("codigo" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "chave" varchar NOT NULL, "valor_texto" varchar, "valor_inteiro" integer, "valor_booleano" tinyint, "valor_data" datetime)`);
        await queryRunner.query(`CREATE TABLE "banco_horas" ("codigo" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "pontos" ("codigo" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "ponto" integer NOT NULL, "tipo" varchar(1) NOT NULL, "codigo_funcionario" integer NOT NULL, "codigo_banco_horas" integer NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pontos"`);
        await queryRunner.query(`DROP TABLE "banco_horas"`);
        await queryRunner.query(`DROP TABLE "configuracoes"`);
    }

}
