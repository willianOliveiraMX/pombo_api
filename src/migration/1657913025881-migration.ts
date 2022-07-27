import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class migration1657913025881 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'p_users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'updatedat',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'createdat',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'isvalid',
            type: 'boolean',
            default: true,
          },
        ],
      }),
    );

    queryRunner.createTable(
      new Table({
        name: 'p_workspaces',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'updatedat',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'createdat',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'isvalid',
            type: 'boolean',
            default: true,
          },
        ],
      }),
    );

    queryRunner.createTable(
      new Table({
        name: 'p_messages',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'message_text',
            type: 'text',
          },
          {
            name: 'send_time',
            type: 'timestamp',
          },
          {
            name: 'updatedat',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'createdat',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'isvalid',
            type: 'boolean',
            default: true,
          },
        ],
      }),
    );

    queryRunner.createTable(
      new Table({
        name: 'p_contacts',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'nick_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'text',
            isUnique: true,
          },
          {
            name: 'platforms',
            type: 'json',
            isNullable: true,
          },
          {
            name: 'updatedat',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'createdat',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'isvalid',
            type: 'boolean',
            default: true,
          },
        ],
      }),
    );

    queryRunner.createTable(
      new Table({
        name: 'p_templates',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
          },
          {
            name: 'message_text',
            type: 'text',
          },
          {
            name: 'updatedat',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'createdat',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'isvalid',
            type: 'boolean',
            default: true,
          },
        ],
      }),
    );

    queryRunner.createTable(
      new Table({
        name: 'p_chats',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'message_text',
            type: 'text',
          },
          {
            name: 'sender',
            type: 'json',
          },
          {
            name: 'receiver',
            type: 'json',
          },
          {
            name: 'send_date',
            type: 'timestamp',
          },
          {
            name: 'updatedat',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'createdat',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'isvalid',
            type: 'boolean',
            default: true,
          },
        ],
      }),
    );

    queryRunner.createTable(
      new Table({
        name: 'p_platforms',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'meta_info',
            type: 'json',
          },
          {
            name: 'updatedat',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'createdat',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'isvalid',
            type: 'boolean',
            default: true,
          },
        ],
      }),
    );

    queryRunner.createTable(
      new Table({
        name: 'p_roles',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
          },
          {
            name: 'role_key',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'updatedat',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'createdat',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'isvalid',
            type: 'boolean',
            default: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('p_users');
    queryRunner.dropTable('p_roles');
    queryRunner.dropTable('p_platforms');
    queryRunner.dropTable('p_chats');
    queryRunner.dropTable('p_templates');
    queryRunner.dropTable('p_contacts');
    queryRunner.dropTable('p_messages');
    queryRunner.dropTable('p_workspaces');
  }
}
