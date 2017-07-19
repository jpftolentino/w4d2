exports.up = (knex, Promise) =>{
  return Promise.all([
    knex.schema.createTable('milestones', (table) => {
      table.increments('id');
      table.string('description');
      table.timestamps('date_achieved');
    })
  ])
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('milestones')
  ])
};