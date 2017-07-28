exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(() => {
      // Inserts seed entries
      return knex('courses').insert([
        {
          id: 1,
          nameOfTheCourse: 'Mathematics',
          nameOfTheTeacher: 'Dr Johnson',
          durationOfTheCourse: '10 hours',
          numberOfStudentsTakingTheCourse: 15
        },
        {
          id: 2,
          nameOfTheCourse: 'Physics',
          nameOfTheTeacher: 'Dr Robert',
          durationOfTheCourse: '119 hours',
          numberOfStudentsTakingTheCourse: 125
        },
        {
          id: 3,
          nameOfTheCourse: 'Chemistry',
          nameOfTheTeacher: 'Dr Johnson',
          durationOfTheCourse: '152 hours',
          numberOfStudentsTakingTheCourse: 335
        },
        {
          id: 4,
          nameOfTheCourse: 'Computer Science',
          nameOfTheTeacher: 'Miss Jada',
          durationOfTheCourse: '150 hours',
          numberOfStudentsTakingTheCourse: 133
        },
        {
          id: 5,
          nameOfTheCourse: 'Social Studies',
          nameOfTheTeacher: 'Miss Sara',
          durationOfTheCourse: '10 hours',
          numberOfStudentsTakingTheCourse: 15
        }
      ]);
    })
   .then(() => {
    console.log('Courses table was seeded');
   });
};
