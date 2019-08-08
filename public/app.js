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
    if (!e.target.matches('.Cdropbtn')) {
    var catagoryDropDown = document.getElementById("catagoryDropDown");
      if (catagoryDropDown.classList.contains('show')) {
        catagoryDropDown.classList.remove('show');
      }
    }else if(!e.target.matches('.Ldropbtn')){
        var locationDropDown = document.getElementById("locationDropDown");
        if (locationDropDown.classList.contains('show')) {
            locationDropDown.classList.remove('show');
        }
    }
  }

  addEvent.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
