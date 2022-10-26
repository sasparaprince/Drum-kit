var numberoffdrumbutton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberoffdrumbutton; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  })
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

function buttonAnimation(currentkey) {
  var activeBtton = document.querySelector("." + currentkey);
  activeBtton.classList.add("pressed");

  setTimeout(function () {
    activeBtton.classList.remove("pressed");
  }, 100);
}

function makeSound(key) {
  switch (key) {
    case "w":
      var w = new Audio('sounds/tom-1.mp3');
      w.play();

      break;
    case "a":
      var a = new Audio('sounds/tom-2.mp3');
      a.play();

      break;
    case "s":
      var s = new Audio('sounds/tom-3.mp3');
      s.play();

      break;
    case "d":
      var d = new Audio('sounds/tom-4.mp3');
      d.play();

      break;
    case "j":
      var j = new Audio('sounds/snare.mp3');
      j.play();

      break;
    case "k":
      var k = new Audio('sounds/crash.mp3');
      k.play();

      break;
    case "l":
      var l = new Audio('sounds/kick-bass.mp3');
      l.play();

      break;

    default:
      break;

  }
}





