/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('students').del();
  await knex('students').insert([
    {name: 'Hugo', last_name: 'López', date_of_birth: '2018-10-01', email: 'hugo.lopez@example.com'},
    {name: 'María', last_name: 'Jiménez', date_of_birth: '1982-11-04', email: 'maria.jimenez@example.com'},
    {name: 'Asier', last_name: 'Valencia', date_of_birth: '2019-05-12', email: 'asier.valencia@example.com'}
  ]);
};

