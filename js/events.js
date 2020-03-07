//define functions here

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
});


function getIt(){
  $("p").on("click", function(){ return alert("Hey!")})
}

function frameIt(){
  $("p").on("load", function(){ $("img").append()})
}
