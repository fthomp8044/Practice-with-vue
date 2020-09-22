//detect button press
let numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function() {

      let buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML) {

      }

      //detect key presse

      document.addEventListener("keydown", function(e) {
        makeSound(e.key)
      })


      function keySound(e) {
        switch (key) {
          case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

          case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

          case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

          case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

          case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

          case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

          case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();


          default:
            console.log();

        }
      })
  }




  // let valetAttendant = {
  //   name:"Freddy",
  //   age: 27,
  //   driversLicense: true,
  //   skills: ['customer service skills', 'Driving Skills']
  // };
  // let valetAttendant1 = new ValetAttendant("Bob", 22, true, ["customer service", "driving"]);
  //
  // function ValetAttendant(name, age, driversLicense, skills) {
  //   this.name = name;
  //   this.age = age;
  //   this.driversLicense = driversLicense;
  //   this.skills = skills;
  //   this.moveCar = function () {
  //     alert("Hey, Ive got the car. Its on the way.");
  //     pickUpCar();
  //     dropOffCar();
  //   }
  // }
