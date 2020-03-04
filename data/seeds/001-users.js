exports.seed = function (knex) {
  return knex('users')
    .then(function () {
      return knex('users').insert([{
          username: "Test",
          password: "Test",
          isDonater: true
        },
        {
          username: "Testing",
          password: "Testing",
          isDonater: false
        }

      ]);
    });
};