import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('first_name')
      table.string('last_name')
      table.string('phone_number').unique()
      table.string('password')
      table.dateTime('email_verified_at').nullable()
      table.string('gender').nullable()
      table.date('dob').nullable()

      table.text('address').nullable()
      table.string('city').nullable()
      table.string('state').nullable()
      table.string('country').nullable()
      table.string('zipcode').nullable()

      table.tinyint('status').defaultTo(1)
      table.integer('referred_by').nullable().unsigned().references('users.id').onDelete('CASCADE')

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
