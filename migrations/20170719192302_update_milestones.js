exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('milestones', (table) => {
      table.bigInteger('famous_id').unsigned().index().references('id').inTable('famous_people')

    })
  ])
};

exports.down = (knex, Promise) => {
  return Promise.all([
    table.foreign('id').references('famous_people.famous_person_id')
  ])
};