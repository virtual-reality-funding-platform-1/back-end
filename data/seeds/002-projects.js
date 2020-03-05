exports.seed = function (knex) {
  return knex('projects')
    .then(function () {
      return knex('projects').insert([{
          projectname: "Test",
          description: "Test",
          username: "Test",
          bio: "Test"
        },
        {
          projectname: "Testing",
          description: "Testing",
          username: "Testing",
          bio: "Testing"
        }

      ]);
    });
};