//define functions here

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
});


function getIt(){
  $("p").on("click", function(){ return alert("Hey!")})
}

function frameIt(){
  $("img").on("load", function(){ $("img").addClass("tasty")})
}

function pressIt(){
  $("#typing").on("keydown", function(){
      if($( "#tyoing" ).val() === 71){
        alert("G was pressed");
        return;
      }
      return;
  })
}
