function getLocation() {
    document.getElementById("locationDropDown").classList.toggle("show");
  }
  function getCatagories() {
    document.getElementById("catagoryDropDown").classList.toggle("show");
  }
  
  window.onclick = function(e) {
    if (!e.target.matches('.Cdropbtn')) {
    var myDropdown = document.getElementById("catagoryDropDown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }else if(e.target.matches('.Ldropbtn')){
        var myDropdown = document.getElementById("locationDropDown");
        if (myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
    }
  }