// document.querySelectorAll(".drum");
// console.log(document.querySelectorAll(".drum"));

// for (let i = 0; i <= document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     let buttonInnerHTML = this.innerHTML;
//     console.log(this.innerHTML);

//     makeSound(buttonInnerHTML);
//   });
// }

// document.addEventListener("keypress", function () {
//   alert("nor ttttt");
// });

// function makeSound(key) {
//   switch (key) {
//     case "w":
//       let audio = new Audio("/sounds/tom-1.mp3");
//       audio.play();
//       break;
//     case "a":
//       let tom2 = new Audio("/sounds/tom-2.mp3");
//       tom2.play();
//       break;
//     case "s":
//       let tom3 = new Audio("/sounds/tom-3.mp3");
//       tom3.play();
//       break;
//     case "d":
//       let tom4 = new Audio("/sounds/tom-4.mp3");
//       tom4.play();
//       break;
//     case "j":
//       let snare = new Audio("/sounds/snare.mp3");
//       snare.play();
//       break;
//     case "k":
//       let crash = new Audio("/sounds/crash.mp3");
//       crash.play();
//       break;

//     case "l":
//       let kick = new Audio("/sounds/kick-bass.mp3");
//       kick.play();
//       break;

//     default:
//       break;
//   }
// }

// for(let i = 0; i <= document.querySelectorAll(".drum").length; i++ ){

//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
// console.log(this);}
// )

//     }

// for(let i = 0; i <= document.querySelectorAll(".drum").length; i++ ){

//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){alert("cabo");console.log(this.innerHTML);})

//     }


// Get all elements with class "drum"
const drums = document.querySelectorAll(".drum");

// Add click event listener to each drum element
for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}

// Add keypress event listener
document.addEventListener("keypress", function (event) {
  // Use event.key to get the pressed key
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("/sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("/sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("/sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("/sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("/sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("/sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("/sounds/kick-bass.mp3").play();
      break;
    default:
      break;
  }
}
