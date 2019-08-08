const dbConnection = require('../database/db_connection.js');

const postData = (event_name, event_description, event_date, interested, category, event_location,  cb) => {
  dbConnection.query(
    'INSERT INTO events (event_name, event_description, event_date, interested, category, event_location) VALUES ($1, $2, $3 ,$4, $5, $6)',
    [event_name, event_description, event_date, interested, category, event_location],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = postData;