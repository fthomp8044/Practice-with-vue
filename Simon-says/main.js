let buttonColors = ["red", "green", "blue", "yellow"];

let gamePattern = [];

let userClickedPatter = [];

$(".btn").click(function() {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

})

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);

  let randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  let audio = new Audio("/sounds" +  randomChosenColor + ".mp3");
  audio.play();
}
