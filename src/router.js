const {
    homeHandler,
    postEventHandler,
    publicHandler,
    errorHandler
  } = require('./handlers');
  
  const router = (request, response) => {
    const { url } = request;
  
    if (url === '/') {
      homeHandler(response);
    
    } else if (url.includes('public')) {
      publicHandler(url, response);
    }else if (url === '/create-event') {
      postEventHandler(request, response);
     } else {
      errorHandler(response);
    }
  };
  
  module.exports = router;
  