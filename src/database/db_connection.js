const {Pool} = require('pg');
const url = require('url');
require('env2')('./src/config.env');

if(!process.env.DB_URL)
throw new Error('Environment variable DB_URL missing');

const params = url.parse(process.env.DB_URL);
const [username, password] = params.auth.split(':'); 
console.log("Before parse:", process.env.DB_URL);
console.log("Params:", params);

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 5,
  user: username,
  password,
  ssl: params.hostname != "localhost"
};
console.log("Options:", options);
module.exports = new Pool(options);
