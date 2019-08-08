(function() {
  var container = document.getElementById("container");
  var addEventForm = document.getElementById("add-event");



  //document.getElementById("h4").insertAdjacentHTML("afterend","<h3>"+currentDate+"</h3>");

  var state = [
    {
      id: 1,
      name: "first events",
      description: "thiiiiis is my first event",
      category: "popular",
      intersted: 1,
      date: "01/01/2019"
    },
    {
      id: 2,
      name: "second events",
      description: "thiiiiis is my first event",
      category: "meeting",
      intersted: 0,
      date: "12/03/2020"
    },
    {
      id: 3,
      name: "third event",
      description: "thiiiiis is my first event",
      category: "workshop",
      intersted: 3,
      date: "15/10/2020"
    }
  ]; // this is our initial
  // This function takes an event, it returns the DOM node representing that event
  var createEventNode = function(event) {
    var eventNode = document.createElement("li");
    eventNode.setAttribute("id", event.id);
    var eventCard = document.createElement("div");
    eventCard.setAttribute("class", "card");
    eventNode.appendChild(eventCard);
    var eventName = document.createElement("h4");
    eventName.textContent = event.name;
    eventName.setAttribute("style", "  margin-left: 10px");
    eventCard.appendChild(eventName);
    var descriptionSpan = document.createElement("span");
    descriptionSpan.textContent = event.description;
    eventCard.appendChild(descriptionSpan);
    eventCard.setAttribute("style", "background-color:rgb(58, 55, 50)");

    var eventDate = document.createElement("span");
    eventDate.setAttribute("class", "time");
    eventDate.textContent = event.date;
    eventCard.appendChild(eventDate);
    //add on click event on intersted icon
    return eventNode;
  };

  // bind create event form
  if (addEventForm) {
    addEventForm.addEventListener("submit", function(event) {
      event.preventDefault();

      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var EventListNode = document.createElement("ul");

    state.forEach(function(event) {
      EventListNode.appendChild(createEventNode(event));
    });

    // you may want to add a class for css
    container.replaceChild(EventListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
