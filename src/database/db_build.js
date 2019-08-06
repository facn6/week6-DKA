const fs = require('fs');
const dbConnection = require('./db_connection');
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();
console.log("Check results:", fs.readFileSync(`${__dirname}/db_build.sql`));
console.log("Check sql:", sql);


dbConnection.query(sql, (err, results) => {
console.log("DB created with the results:", results)
});
