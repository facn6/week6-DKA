const dbConnection = require('../database/db_connection.js');

const postData = (name, description, eventDate, interested, category, location,  cb) => {
  dbConnection.query(
    'INSERT INTO event (name, description, eventDate, interested, category, location) VALUES ($1, $2, $3 ,$4, $5, $6)',
    [name, description, eventDate, interested, category, location],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = postData;