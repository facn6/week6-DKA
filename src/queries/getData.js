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

const getCategories = cb => {
    databaseConnection.query('SELECT name FROM category', (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    });
  };
  
  const getLocation = cb => {
    databaseConnection.query('SELECT name FROM location', (err, res) => {
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