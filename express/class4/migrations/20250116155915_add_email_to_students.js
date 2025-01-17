// migrations/<timestamp>_add_email_to_students.js

exports.up = function (knex) {
    return knex.schema.table("students", function (table) {
      table.string("email");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table("students", function (table) {
      table.dropColumn("email");
    });
  };
  
  
