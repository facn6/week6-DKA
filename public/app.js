var addEvent = document.getElementById("addEvent");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function getLocation() {
  document.getElementById("locationDropDown").classList.toggle("show");
}
function getCatagories() {
  document.getElementById("catagoryDropDown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches(".Cdropbtn")) {
    var catagoryDropDown = document.getElementById("catagoryDropDown");
    if (catagoryDropDown.classList.contains("show")) {
      catagoryDropDown.classList.remove("show");
    }
  }
}// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var addEvent = document.getElementById("add-event");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



  addEvent.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }else if (!e.target.matches(".Ldropbtn")) {
      var locationDropDown = document.getElementById("locationDropDown");
      }else if (locationDropDown.classList.contains("show")) {
        locationDropDown.classList.remove("show");
      }
};


function getValuesSelected() {
  // var dateOfEvent = document.getElementById("a").value;
  // var category = document.getElementById("b").value;
  // var location = document.getElementById("c").value;
  var dateOfEvent = "all";
  var category = "nazareth";
  var location = "all";

  fetch(
    `/selection?dateOfEvent=${dateOfEvent}?category=${category}?location=${location}`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(parsed) {
      var results = parsed;
    });
}

getValuesSelected();


