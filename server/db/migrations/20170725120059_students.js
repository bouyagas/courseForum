/* eslint-disable jsx-a11y/href-no-hash,no-console */

exports.up = function (knex, Promise) {
  return knex.schema.createTable('students', (table) => {
    table.increments('id').unsigned().primary();
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('email').unique().notNullable();
    table.string('universityName').notNullable();
    table.string('gender').notNullable();
    table.timestamp('createAt').defaultTo(knex.fn.now());
    table.timestamp('updateAt').defaultTo(knex.fn.now());
  }).then(() => {
    console.log('Students table was created');
  });
};

exports.down = function (knex, Promise) {
  console.log('Dropping students');
  return knex.schema.dropTable('student')
    .then(() => {
      console.log('Students table was dropped');
    });
};
