//define functions here

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});


function getIt(){
  $("p").on("click", function(){ return alert("Hey!")})
}

function frameIt(){
  $("img").on("load", function(){ $("img").addClass("tasty")})
}

function pressIt(){
  $("#typing").on("keydown", function(){
      if($("#typing").val() === "G"){
        alert("G was pressed");
        return;
      }
      return;
  })
}

function submitIt(){
  $("form").on("submit", function(){ $("img").addClass("tasty")})
}
