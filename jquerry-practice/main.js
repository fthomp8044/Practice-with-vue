$("h1").css("color");

$("h1").attr("class", "small-title");

$("input").keypress(function(e){
  $("h1").text(e.key);
})
