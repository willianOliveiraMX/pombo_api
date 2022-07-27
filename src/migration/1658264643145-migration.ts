import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class migration1658264643145 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'p_workspaces',
      new TableColumn({
        name: 'created_by',
        type: 'int',
      }),
    );

    await queryRunner.createForeignKey(
      'p_workspaces',
      new TableForeignKey({
        columnNames: ['created_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_users',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'p_workspaces_users_relation',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
          },
          {
            name: 'user_id',
            type: 'int',
          },
          {
            name: 'workspace_id',
            type: 'int',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'p_workspaces_users_relation',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_users',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'p_workspaces_users_relation',
      new TableForeignKey({
        columnNames: ['workspace_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_workspaces',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'p_contacts_groups_relation',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
          },
          {
            name: 'p_contacts_id',
            type: 'int',
          },
          {
            name: 'p_contacts_groups_id',
            type: 'int',
          },
        ],
      }),
    );

    await queryRunner.addColumns('p_messages', [
      new TableColumn({
        name: 'user_id',
        type: 'int',
      }),
      new TableColumn({
        name: 'contacts_groups_relation_id',
        type: 'int',
      }),
      new TableColumn({
        name: 'workspace_id',
        type: 'int',
      }),
    ]);

    await queryRunner.createForeignKeys('p_messages', [
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_users',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['contacts_groups_relation_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_contacts_groups_relation',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['workspace_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_workspaces',
        onDelete: 'CASCADE',
      }),
    ]);

    await queryRunner.addColumns('p_contacts', [
      new TableColumn({
        name: 'created_by',
        type: 'int',
      }),
      new TableColumn({
        name: 'workspace_id',
        type: 'int',
      }),
    ]);

    await queryRunner.createForeignKeys('p_contacts', [
      new TableForeignKey({
        columnNames: ['created_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_users',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['workspace_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_workspaces',
        onDelete: 'CASCADE',
      }),
    ]);

    await queryRunner.createTable(
      new Table({
        name: 'p_contacts_groups',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_by',
            type: 'int',
          },
          {
            name: 'workspace_id',
            type: 'int',
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
        ],
      }),
    );

    await queryRunner.createForeignKeys('p_contacts_groups', [
      new TableForeignKey({
        columnNames: ['created_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_users',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['workspace_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_workspaces',
        onDelete: 'CASCADE',
      }),
    ]);

    await queryRunner.addColumns('p_templates', [
      new TableColumn({
        name: 'created_by',
        type: 'int',
      }),
      new TableColumn({
        name: 'workspace_id',
        type: 'int',
      }),
    ]);

    await queryRunner.createForeignKeys('p_templates', [
      new TableForeignKey({
        columnNames: ['created_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_users',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['workspace_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_workspaces',
        onDelete: 'CASCADE',
      }),
    ]);

    await queryRunner.addColumns('p_chats', [
      new TableColumn({
        name: 'created_by',
        type: 'int',
      }),
      new TableColumn({
        name: 'workspace_id',
        type: 'int',
      }),
      new TableColumn({
        name: 'contact_id',
        type: 'int',
      }),
      new TableColumn({
        name: 'platform_id',
        type: 'int',
      }),
    ]);

    await queryRunner.createForeignKeys('p_chats', [
      new TableForeignKey({
        columnNames: ['created_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_users',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['workspace_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_workspaces',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['contact_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_contacts',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['platform_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_platforms',
        onDelete: 'CASCADE',
      }),
    ]);

    await queryRunner.addColumns('p_platforms', [
      new TableColumn({
        name: 'created_by',
        type: 'int',
      }),
      new TableColumn({
        name: 'workspace_id',
        type: 'int',
      }),
    ]);

    await queryRunner.createForeignKeys('p_platforms', [
      new TableForeignKey({
        columnNames: ['created_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_users',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['workspace_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_workspaces',
        onDelete: 'CASCADE',
      }),
    ]);

    await queryRunner.createTable(
      new Table({
        name: 'p_platforms_contacts_relation',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
          },
          {
            name: 'contact_id',
            type: 'int',
          },
          {
            name: 'platform_id',
            type: 'int',
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('p_platforms_contacts_relation', [
      new TableForeignKey({
        columnNames: ['contact_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_contacts',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['platform_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_platforms',
        onDelete: 'CASCADE',
      }),
    ]);

    await queryRunner.createTable(
      new Table({
        name: 'p_roles_users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
          },
          {
            name: 'user_id',
            type: 'int',
          },
          {
            name: 'roles_id',
            type: 'int',
          },
          {
            name: 'workspace_id',
            type: 'int',
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('p_roles_users', [
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_users',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['roles_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_roles',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['workspace_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'p_workspaces',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('p_workspaces_users_relation');
    await queryRunner.dropColumn('p_workspaces', 'created_by');
  }
}
