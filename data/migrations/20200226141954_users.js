exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments()
                .unique();
            tbl.text('username', 128)
                .notNullable()
                .unique();
            tbl.text('password', 128)
                .notNullable();
            tbl.boolean('isDonater', false)
                .notNullable();

        })


        .createTable('projects', tbl => {
            tbl.increments()
                .unique();

            // tbl.image('productImage');

            tbl.text('projectname')
                .notNullable()
                .unique();

            tbl.text('description')
                .notNullable()
                .unique();

            // tbl.image('userImage');

            tbl.text('username', 128)
                .notNullable()

            tbl.text('bio')
                .notNullable()
                .unique();

            // tbl.integer('user_id')
            //     .unsigned()
            //     .notNullable()
            //     .references('id')
            //     .inTable('users')
            //     .onDelete('CASCADE')
            //     .onUpdate('CASCADE');

        });

};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('users');
};