import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableConfiguracoes1595817070075 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "configuracoes",
            columns: [
                {
                    name: "codigo",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "chave",
                    type: "varchar",
                },
                {
                    name: "valor_texto",
                    type: "varchar",
                },
                {
                    name: "valor_inteiro",
                    type: "int",
                },
                {
                    name: "valor_booleano",
                    type: "tinyint",
                    length: '1'
                },
                {
                    name: "valor_data",
                    type: "datetime",
                },
                {
                    name: "valor_horas",
                    type: "time",
                },
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("configuracoes");
    }

}
