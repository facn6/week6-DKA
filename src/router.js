const {
  homeHandler,
  publicHandler,
  errorHandler,
  selectionHandler,
  handleIcon
} = require("./handlers");

const router = (request, response) => {
  const { url } = request;
  let endPoint = "";
  console.log(url);
  if (url.indexOf("?") > -1) {
    endPoint = url.split("?")[0];
  } else {
    endPoint = url;
  }

  // console.log(endPoint);
  if (endPoint === "/") {
    homeHandler(response);
  } else if (endPoint.includes("public")) {
    publicHandler(endPoint, response);
  } else if (endPoint === "/selection") {
    console.log("Endpoint selection", endPoint);
    selectionHandler(request, response);
  } else if (endPoint === "/public/node-icon.ico") {
    handlers.handleIcon(res);
  } else {
    errorHandler(response);
  }
};

module.exports = router;
