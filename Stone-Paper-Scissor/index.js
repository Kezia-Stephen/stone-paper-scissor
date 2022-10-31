//Player 1
var randomNumber1 = Math.floor((Math.random()*3)+1);
var randomImage1 = "img" + randomNumber1 + ".jpeg";
var randomImageSource1 = "images/" + randomImage1;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

//Player 2
var randomNumber2 = Math.floor((Math.random()*3)+1);
var randomImage2 = "img" + randomNumber2 + ".jpeg";
var randomImageSource2 = "images/" + randomImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Conditions
if (randomNumber1 == 1){
  if (randomNumber2 == 1){
    document.querySelector(".heading").innerHTML = "🚩 Draw 🚩";
  }
  else if (randomNumber2 == 2){
    document.querySelector(".heading").innerHTML = "Player 2 Wins! 🚩";
  }
  else if (randomNumber2 == 3){
    document.querySelector(".heading").innerHTML = "🚩 Player 1 Wins!";
  }
}


if (randomNumber1 == 2){
  if (randomNumber2 == 1){
    document.querySelector(".heading").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (randomNumber2 == 2){
    document.querySelector(".heading").innerHTML = "🚩 Draw 🚩";
  }
  else if (randomNumber2 == 3){
    document.querySelector(".heading").innerHTML = "Player 2 Wins! 🚩";
  }
}

if (randomNumber1 == 3){
  if (randomNumber2 == 1){
    document.querySelector(".heading").innerHTML = "Player 2 Wins! 🚩";
  }
  else if (randomNumber2 == 2){
    document.querySelector(".heading").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (randomNumber2 == 3){
    document.querySelector(".heading").innerHTML = "🚩 Draw 🚩";
  }
}
