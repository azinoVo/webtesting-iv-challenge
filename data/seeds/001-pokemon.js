
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pokemon').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemon').insert([
        { name: 'Bulbasaur', typeOne: 'Grass', TypeTwo: 'Poison'},
        { name: 'Squirtle', typeOne: 'Water'},
        { name: 'Charmander', typeOne: 'Fire'}
      ]);
    });
};
