exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(() => {
      // Inserts seed entries
      return knex('students').insert([
        {
          id: 1,
          firstName: 'Alex',
          lastName: 'Gaby',
          email: 'bouuahdh@gmail.com',
          universityName: 'Hostos Community College',
          gender: 'Male'
        },
        {
          id: 2,
          firstName: 'Assy',
          lastName: 'Brown',
          email: 'assydh@yahoo.com',
          universityName: 'university of ihio',
          gender: 'Female'
        },
        {
          id: 3,
          firstName: 'Micheal',
          lastName: 'Sameal',
          email: 'MichealS@yahoo.com',
          universityName: 'Harvard university ',
          gender: 'Male'
        },
        {
          id: 4,
          firstName: 'Venessa',
          lastName: 'Cartel',
          email: 'venCart@gmail.com',
          universityName: 'Boston university ',
          gender: 'Female'
        },
        {
          id: 5,
          firstName: 'Marta',
          lastName: 'Taper',
          email: 'ven@gmail.com',
          universityName: 'New York university',
          gender: 'Female'
        }
      ]);
    })
    .then(() => {
    console.log('Students table was seeded');
   });
};
