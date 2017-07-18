const argument = process.argv[2];

const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

function showOutput (output){

  console.log('Found 1 person(s) by the name \'' + output.firstName + '\'');
  console.log('- ' + output.id + ': ' + output.firstName + ' ' + output.lastName + ', born \'' + output.birthdate + '\'');
}

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * FROM famous_people WHERE last_name = $1", [argument],(err, result) => {

    console.log('Searching ...');
    if (err) {
      return console.error("error running query", err);
    }

    let id = (result.rows[0].id);
    let firstName = (result.rows[0].first_name); //output: 1
    let lastName = (result.rows[0].last_name);
    let birthdate = (result.rows[0].birthdate.toISOString().slice(0,10));

    let output = {
      'id': id,
      'firstName': firstName,
      'lastName': lastName,
      'birthdate': birthdate
    };

    showOutput(output);

    client.end();
  });
});

//console.log(argument);