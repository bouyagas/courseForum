/* eslint-disable jsx-a11y/href-no-hash,no-console */

exports.up = function (knex, Promise) {
  return knex.schema.createTable('courses', (table) => {
    table.increments('id').unsigned().primary();
    table.string('nameOfTheCourse').notNullable();
    table.string('nameOfTheTeacher').notNullable();
    table.string('durationOfTheCourse').notNullable();
    table.integer('numberOfStudentsTakingTheCourse').notNullable();
    table.timestamp('createAt').defaultTo(knex.fn.now());
    table.timestamp('updateAt').defaultTo(knex.fn.now());
  }).then(() => {
    console.log('Courses table was created');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('courses')
    .then(() => {
      console.log('Courses table was dropped');
    });
};
