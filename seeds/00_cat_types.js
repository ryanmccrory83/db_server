
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cat_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('cat_types').insert([
        {breed: 'Tabby', popularity: 5},
        {breed: 'Bengal', popularity: 10},
        {breed: 'Siamese', popularity: 4},
        {breed: 'Ocelot', popularity: 9}
      ]);
    });
};
