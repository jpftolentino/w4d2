const argOne = process.argv[2];
const argTwo = process.argv[3];
var argThree = process.argv[4];

console.log(argThree);

const settings = require("./settings"); // settings.json

const knex = require("knex")({
  client: 'pg',
  connection: settings,
  searchPath: 'knex,public'
});

//inserting data
knex('famous_people')
  .insert([{first_name: argOne, last_name:argTwo, birthdate: argThree}])
.then((rows) => {
  console.log('it worked!');
});
console.log(typeof argOne,argTwo,argThree);