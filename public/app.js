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