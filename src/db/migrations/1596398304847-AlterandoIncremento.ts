import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterandoIncremento1596398304847 implements MigrationInterface {
    name = 'AlterandoIncremento1596398304847'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pontos" ("codigo" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "ponto" integer NOT NULL, "tipo" varchar(1) NOT NULL, "codigo_funcionario" integer NOT NULL, "codigo_banco_horas" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_configuracoes" ("codigo" int PRIMARY KEY NOT NULL, "chave" varchar NOT NULL, "valor_texto" varchar NOT NULL, "valor_inteiro" int NOT NULL, "valor_booleano" tinyint(1) NOT NULL, "valor_data" datetime NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_configuracoes"("codigo", "chave", "valor_texto", "valor_inteiro", "valor_booleano", "valor_data") SELECT "codigo", "chave", "valor_texto", "valor_inteiro", "valor_booleano", "valor_data" FROM "configuracoes"`);
        await queryRunner.query(`DROP TABLE "configuracoes"`);
        await queryRunner.query(`ALTER TABLE "temporary_configuracoes" RENAME TO "configuracoes"`);
        await queryRunner.query(`CREATE TABLE "temporary_configuracoes" ("codigo" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "chave" varchar NOT NULL, "valor_texto" varchar NOT NULL, "valor_inteiro" integer NOT NULL, "valor_booleano" tinyint NOT NULL, "valor_data" datetime NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_configuracoes"("codigo", "chave", "valor_texto", "valor_inteiro", "valor_booleano", "valor_data") SELECT "codigo", "chave", "valor_texto", "valor_inteiro", "valor_booleano", "valor_data" FROM "configuracoes"`);
        await queryRunner.query(`DROP TABLE "configuracoes"`);
        await queryRunner.query(`ALTER TABLE "temporary_configuracoes" RENAME TO "configuracoes"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "configuracoes" RENAME TO "temporary_configuracoes"`);
        await queryRunner.query(`CREATE TABLE "configuracoes" ("codigo" int PRIMARY KEY NOT NULL, "chave" varchar NOT NULL, "valor_texto" varchar NOT NULL, "valor_inteiro" int NOT NULL, "valor_booleano" tinyint(1) NOT NULL, "valor_data" datetime NOT NULL)`);
        await queryRunner.query(`INSERT INTO "configuracoes"("codigo", "chave", "valor_texto", "valor_inteiro", "valor_booleano", "valor_data") SELECT "codigo", "chave", "valor_texto", "valor_inteiro", "valor_booleano", "valor_data" FROM "temporary_configuracoes"`);
        await queryRunner.query(`DROP TABLE "temporary_configuracoes"`);
        await queryRunner.query(`ALTER TABLE "configuracoes" RENAME TO "temporary_configuracoes"`);
        await queryRunner.query(`CREATE TABLE "configuracoes" ("codigo" int PRIMARY KEY NOT NULL, "chave" varchar NOT NULL, "valor_texto" varchar NOT NULL, "valor_inteiro" int NOT NULL, "valor_booleano" tinyint(1) NOT NULL, "valor_data" datetime NOT NULL, "valor_horas" time NOT NULL)`);
        await queryRunner.query(`INSERT INTO "configuracoes"("codigo", "chave", "valor_texto", "valor_inteiro", "valor_booleano", "valor_data") SELECT "codigo", "chave", "valor_texto", "valor_inteiro", "valor_booleano", "valor_data" FROM "temporary_configuracoes"`);
        await queryRunner.query(`DROP TABLE "temporary_configuracoes"`);
        await queryRunner.query(`DROP TABLE "pontos"`);
    }

}
