const argument = process.argv[2];

const settings = require("./settings"); // settings.json

const knex = require("knex")({
  client: 'pg',
  connection: settings,
  searchPath: 'knex,public'
});


const showOutput = (output) => {

  console.log('Found 1 person(s) by the name \'' + output.firstName + '\'');
  console.log('- ' + output.id + ': ' + output.firstName + ' ' + output.lastName + ', born \'' + output.birthdate + '\'');
}

knex.select('*').from('famous_people')
.then((rows) => {

  let firstName = rows[0].first_name;
  let id = rows[0].id;
  let lastName = rows[0].last_name;
  let birthdate = (rows[0].birthdate.toISOString().slice(0,10));

  let output = {
    'id': id,
    'firstName': firstName,
    'lastName': lastName,
    'birthdate': birthdate
  }

  showOutput(output);
});

