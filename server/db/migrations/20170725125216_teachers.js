/* eslint-disable jsx-a11y/href-no-hash,no-console */

exports.up = function (knex, Promise) {
  return knex.schema.createTable('teachers', (table) => {
    table.increments('id').unsigned().primary();
    table.string('fullName').notNullable();
    table.string('lessonTeach').notNullable();
    table.string('universityName').notNullable();
    table.timestamp('createAt').defaultTo(knex.fn.now());
    table.timestamp('updateAt').defaultTo(knex.fn.now());
    table.integer('studentId').references('id').inTable('students').unsigned()
      .notNullable();
    table.integer('courseId').references('id').inTable('courses').unsigned()
      .notNullable();
  }).then(() => {
    console.log('Teachers table was created');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('teachers')
    .then(() => {
      console.log('Teachers table was dropped');
    });
};
