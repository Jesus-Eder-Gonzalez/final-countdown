exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('packages').insert([
    { id: 1, package_maker_id: 1 },
    { id: 2, package_maker_id: 1 },
    { id: 3, package_maker_id: 1 },
    { id: 4, package_maker_id: 2 },
    { id: 5, package_maker_id: 2 },
    { id: 6, package_maker_id: 2 },
    { id: 7, package_maker_id: 3 },
    { id: 8, package_maker_id: 3 },
    { id: 9, package_maker_id: 3 },
    { id: 10, package_maker_id: 4 },
    { id: 11, package_maker_id: 4 },
    { id: 12, package_maker_id: 4 },
    { id: 13, package_maker_id: 5 },
    { id: 14, package_maker_id: 5 },
    { id: 15, package_maker_id: 5 },
    // { id: 16, package_maker_id: 5 },
    // { id: 17, package_maker_id: 5 },
    // { id: 18, package_maker_id: 5 },
    // { id: 19, package_maker_id: 5 },
    // { id: 20, package_maker_id: 5 },
    // { id: 21, package_maker_id: 6 },
    // { id: 22, package_maker_id: 6 },
    // { id: 23, package_maker_id: 6 },
    // { id: 24, package_maker_id: 6 },
    // { id: 25, package_maker_id: 6 },
    // { id: 26, package_maker_id: 7 },
    // { id: 27, package_maker_id: 7 },
    // { id: 28, package_maker_id: 7 },
    // { id: 29, package_maker_id: 7 },
    // { id: 30, package_maker_id: 7 },
    // { id: 31, package_maker_id: 8 },
    // { id: 32, package_maker_id: 8 },
    // { id: 33, package_maker_id: 8 },
    // { id: 34, package_maker_id: 8 },
    // { id: 35, package_maker_id: 8 },
    // { id: 36, package_maker_id: 9 },
    // { id: 37, package_maker_id: 9 },
    // { id: 38, package_maker_id: 9 },
    // { id: 39, package_maker_id: 9 },
    // { id: 40, package_maker_id: 9 }
  ]);
};
