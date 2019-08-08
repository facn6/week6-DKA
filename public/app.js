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
  } else if (!e.target.matches(".Ldropbtn")) {
    var locationDropDown = document.getElementById("locationDropDown");
    if (locationDropDown.classList.contains("show")) {
      locationDropDown.classList.remove("show");
    }
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
      console.log(response);
      return response.json();
    })
    .then(function(parsed) {
      console.log(parsed);
      var results = parsed;
    });
}

getValuesSelected();
