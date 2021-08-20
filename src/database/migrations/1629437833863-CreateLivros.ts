import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLivros1629437833863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "createLivros",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "titulo",
                        type: "varchar"
                    },
                    {
                        name: "editora",
                        type: "varchar"
                    },
                    {
                        name: "foto",
                        type: "varchar"
                    },
                    {
                        name: "autores",
                        type: "varchar",
                        isArray: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("createLivros")
    }

}
