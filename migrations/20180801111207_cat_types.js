//migrate:latest

exports.up = function(knex, Promise) {
    return knex.schema.createTable('cat_types',(table)=>{
        table.increments()
        table.text('breed')
        table.integer('popularity')
    })
};
//migrate:rollback

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cat_types')
};
