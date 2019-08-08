const { readFile } = require('fs');
const path = require('path');
const postData = require('./queries/postData.js');
var qs = require('qs');

const serverError = (err, response) => {
    response.writeHead(500, 'Content-Type:text/html');
    response.end('<h1>Sorry, there was a problem loading the homepage</h1>');
    console.log(err);
  };
  
  const homeHandler = response => {
    const filepath = path.join(__dirname, '..', 'public', 'index.html');
    readFile(filepath, (err, file) => {
      if (err) return serverError(err, response);
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    });
  };
  const publicHandler = (url, response) => {
    const filepath = path.join(__dirname, '..', url);
    readFile(filepath, (err, file) => {
      if (err) return serverError(err, response);
      const [, extension] = url.split('.');
      const extensionType = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        ico: 'image/x-icon'
      };
      response.writeHead(200, { 'content-type': extensionType[extension] });
      response.end(file);
    });
  };

  const postEventHandler = (request, response) => {
    let data = '';
    request.on('data', chunk => {
      data += chunk;
      console.log("data&&&&&&&&&&&&&&&&&&&&&&&&",data);
    });
    request.on('end', () => {
      const {event, description, event_date, interested, category, location } = qs.parse(data);
      postData(event, description, event_date, interested, category, location, err => {
        if(err){ return serverError(err, response);}
        else{response.writeHead(302, {'Location': '/' });
        response.end()
      }
      });
    });
  };
  const errorHandler = response => {
    response.writeHead(404, { 'content-type': '/' });
    response.end('<h1>404 Page Requested Cannot be Found</h1>');
  };


  module.exports = {
    homeHandler,
    publicHandler,
    errorHandler,
    postEventHandler
  };
  