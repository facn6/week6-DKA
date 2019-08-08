const databaseConnection = require('../database/db_connection.js');

const getData = cb => {
  databaseConnection.query('SELECT * FROM events', (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};


 





module.exports ={
    getData ,
    getCategories,
    getLocation,
};