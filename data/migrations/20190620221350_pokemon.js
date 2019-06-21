exports.up = function(knex, Promise) {
    return knex.schema.createTable('pokemon', tbl => {
      tbl.increments();
  
      tbl.string('name', 125).notNullable().unique();
      tbl.string('TypeOne', 125).notNullable();
      tbl.string('TypeTwo', 125)

    });
  };
  
  exports.down = function(knex, Promise) {
    // undo the operation in up
    return knex.schema.dropTableIfExists('pokemon');
  };
  