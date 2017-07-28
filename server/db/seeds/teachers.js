exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teachers').del()
    .then(() =>  {
      // Inserts seed entries
      return knex('teachers').insert([
        {
          id: 1,
          fullName: 'Dr Johnson',
          lessonTeach: 'Mathematics',
          universityName: 'University of Miami',
          courseId: 1,
          studentId: 1
        },
        {
          id: 2,
          fullName: 'Dr Robert',
          lessonTeach: 'Physics',
          universityName: 'University of London',
          courseId: 2,
          studentId: 2
        },
        {
          id: 3,
          fullName: 'Dr Johnson',
          lessonTeach: 'Chemistry',
          universityName: 'University of Miami',
          courseId: 3,
          studentId: 3
        },
        {
          id: 4,
          fullName: 'Miss Jada',
          lessonTeach: 'Computer Science',
          universityName: 'University of Delaware',
          courseId: 4,
          studentId: 4
        },
        {
          id: 5,
           fullName: 'Miss Sara',
          lessonTeach: 'Social Studies',
          universityName: 'University of Washington',
          courseId: 5,
          studentId: 5
        }
      ]);
    })
    .then(() => {
      console.log('Teachers table was seeded');
   });
};
