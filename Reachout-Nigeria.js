



  var div =document.getElementById("location");
  function getlocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError);
      }else{
          div.innerHTML="The Browser Does not Support Geolocation";
      }
  }


  function showPosition(position) {
    div.innerHTML="Latitude:"+position.coords.latitude+"<br>Longitude:"+position.coords.longitude;
  }


   function showError(error) {
      if (error.PERMISSION_DENIED) {
          div.innerHTML="The User have denied the request for Geolocation.";
      }
  } 


  getlocation();