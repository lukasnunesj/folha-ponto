import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterandoNullable1596423469687 implements MigrationInterface {
    name = 'AlterandoNullable1596423469687'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`CREATE TABLE "pontos" ("codigo" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "ponto" integer NOT NULL, "tipo" varchar(1) NOT NULL, "codigo_funcionario" integer NOT NULL, "codigo_banco_horas" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_configuracoes" ("codigo" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "chave" varchar NOT NULL, "valor_texto" varchar, "valor_inteiro" integer, "valor_booleano" tinyint, "valor_data" datetime)`);
        await queryRunner.query(`INSERT INTO "temporary_configuracoes"("codigo", "chave", "valor_texto", "valor_inteiro", "valor_booleano", "valor_data") SELECT "codigo", "chave", "valor_texto", "valor_inteiro", "valor_booleano", "valor_data" FROM "configuracoes"`);
        await queryRunner.query(`DROP TABLE "configuracoes"`);
        await queryRunner.query(`ALTER TABLE "temporary_configuracoes" RENAME TO "configuracoes"`);
        // await queryRunner.query(`CREATE TABLE "temporary_configuracoes" ("codigo" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "chave" varchar NOT NULL, "valor_texto" varchar NOT NULL, "valor_inteiro" integer NOT NULL, "valor_booleano" tinyint NOT NULL, "valor_data" datetime NOT NULL)`);
        // await queryRunner.query(`INSERT INTO "temporary_configuracoes"("codigo", "chave", "valor_texto", "valor_inteiro", "valor_booleano", "valor_data") SELECT "codigo", "chave", "valor_texto", "valor_inteiro", "valor_booleano", "valor_data" FROM "configuracoes"`);
        // await queryRunner.query(`DROP TABLE "configuracoes"`);
        // await queryRunner.query(`ALTER TABLE "temporary_configuracoes" RENAME TO "configuracoes"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "configuracoes" RENAME TO "temporary_configuracoes"`);
        await queryRunner.query(`CREATE TABLE "configuracoes" ("codigo" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "chave" varchar NOT NULL, "valor_texto" varchar, "valor_inteiro" integer, "valor_booleano" tinyint, "valor_data" datetime)`);
        await queryRunner.query(`INSERT INTO "configuracoes"("codigo", "chave", "valor_texto", "valor_inteiro", "valor_booleano", "valor_data") SELECT "codigo", "chave", "valor_texto", "valor_inteiro", "valor_booleano", "valor_data" FROM "temporary_configuracoes"`);
        await queryRunner.query(`DROP TABLE "temporary_configuracoes"`);
        await queryRunner.query(`ALTER TABLE "configuracoes" RENAME TO "temporary_configuracoes"`);
        await queryRunner.query(`CREATE TABLE "configuracoes" ("codigo" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "chave" varchar NOT NULL, "valor_texto" varchar NOT NULL, "valor_inteiro" integer NOT NULL, "valor_booleano" tinyint NOT NULL, "valor_data" datetime NOT NULL)`);
        await queryRunner.query(`INSERT INTO "configuracoes"("codigo", "chave", "valor_texto", "valor_inteiro", "valor_booleano", "valor_data") SELECT "codigo", "chave", "valor_texto", "valor_inteiro", "valor_booleano", "valor_data" FROM "temporary_configuracoes"`);
        await queryRunner.query(`DROP TABLE "temporary_configuracoes"`);
        await queryRunner.query(`DROP TABLE "pontos"`);
    }

}
