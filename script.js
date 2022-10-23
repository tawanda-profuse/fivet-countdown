var startButton = document.getElementById("startBtn"); // Button to start the countdown
var pauseButton = document.getElementById("pauseBtn"); // Button to stop the countdown
var upOne = document.getElementById("plusOne"); // Button to speed up by 1
var upOneHalf = document.getElementById("plusOneHalf"); // Button to speed up by 1.5
var upTwo = document.getElementById("plusTwo"); // Button to speed up by 2
var minuteInput = document.getElementById("minutes"); // User input for minutes
var miniMinutes = document.getElementById("seconds"); // Seconds output
var minuteOutput = document.getElementById("time"); // Minutes output
var divider = document.getElementById("divide"); // Minutes/Seconds divider
var message = document.getElementById("userAlert"); // A message to the user
var reset = document.getElementById("reset"); // Button that refreshes the page
const menu = document.querySelector('#mobile-menu'); // Selects three elements that will be turned to hamburger menu
const menuLinks = document.querySelector('.nav');

reset.addEventListener("click", function(){
  stopTimer();
  window.location.reload();
});

// Navigation bar responsive action
menu.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// Store a reference to the variable
var startTimer = null;
var secondsValue = 60;

function timer(){

  if(minuteInput.value == 0 && secondsValue == 0){
    minuteInput.value = 0;
    secondsValue = 0;
    miniMinutes.innerHTML = secondsValue;
    minuteOutput.innerHTML = minuteInput.value;
    message.innerHTML = "Time's up!"; // When the timer is finished
    reset.innerHTML = "Restart";
    reset.style.color = "green";
    reset.style.fontWeight = "bold";
    reset.style.padding = "10px"; 
    reset.style.borderRadius = "30px";
    reset.style.width = "120px";
  } else if(secondsValue != 0){
    secondsValue--;
    miniMinutes.innerHTML = secondsValue;
    minuteOutput.innerHTML = minuteInput.value;
  } else if(minuteInput.value != 0 && secondsValue == 0){
    secondsValue = 60;
    minuteInput.value--;
    miniMinutes.innerHTML = secondsValue;
    minuteOutput.innerHTML = minuteInput.value;
  } 

  return;
}

function stopTimer(){
  clearInterval(startTimer);
}

// Button that begins the countdown
startButton.addEventListener("click", function(){
    startButton.innerText = "Start";
    pauseButton.classList.remove("hide");
    upOne.classList.remove("hide");
    upOneHalf.classList.remove("hide");
    upTwo.classList.remove("hide");
    message.classList.remove("hide");
    reset.classList.remove("hide");
    message.innerText = "";
    upOne.classList.add("active");
    upOneHalf.classList.remove("active");
    upTwo.classList.remove("active");

    // The function below takes a parameter that determines the speed of the count
    function startInterval(param1){

      startTimer = setInterval(function() {
        timer();
        if(minuteInput.value <= minuteInput.value / 2 ){
          message.innerHTML = "More than halfway there!";
        }
        
        if(minuteInput.value == 0 && secondsValue < 20){
          miniMinutes.style.color = "red"; // The last 20 seconds
          minuteOutput.style.color = "red";
          divider.style.color = "red";
        }

        if(minuteInput.value == 0 && secondsValue == 0){
          message.innerHTML = "Time's up! 😢";
          message.style.fontSize = "24px";
          miniMinutes.innerHTML = "--"; // The last 10 seconds
          minuteOutput.innerHTML = "--";
        }

        if(minuteInput.value == 0 && secondsValue <= 10){
          miniMinutes.classList.add("blink"); // The last 10 seconds
          minuteOutput.classList.add("blink");
          divider.classList.add("blink");
        }

    }, param1);
  }

  startInterval(1000); // Calling the function to perform actions every 1 second or 1000 milliseconds
});

// Increase speed by 1X (default)
upOne.addEventListener("click", function(){
  upOneHalf.classList.remove("active");
  upOne.classList.add("active");
  upTwo.classList.remove("active");
  message.innerText = "";

   // The function below takes a parameter that determines the speed of the count
   function startIntervalOne(param1){
    stopTimer();
    startTimer = setInterval(function() {
      timer();
      if(minuteInput.value <= minuteInput.value / 2 ){
        message.innerHTML = "More than halfway there!";
      }

      if(minuteInput.value == 0 && secondsValue < 20){
        miniMinutes.style.color = "red"; // The last 20 seconds
        minuteOutput.style.color = "red";
        divider.style.color = "red";
      }

      if(minuteInput.value == 0 && secondsValue == 0){
        message.innerHTML = "Time's up! 😢";
        message.style.fontSize = "24px";
        miniMinutes.innerHTML = "--"; // The last 10 seconds
        minuteOutput.innerHTML = "--";
      }

      if(minuteInput.value == 0 && secondsValue <= 10){
        miniMinutes.classList.add("blink"); // The last 10 seconds
        minuteOutput.classList.add("blink");
        divider.classList.add("blink");
      }

  }, param1);
}

  startIntervalOne(1000);
});

// Increase speed by 1.5
upOneHalf.addEventListener("click", function(){
  upOneHalf.classList.add("active");
  upOne.classList.remove("active");
  upTwo.classList.remove("active");
  message.innerText = "";

   // The function below takes a parameter that determines the speed of the count
   function startIntervalOneHalf(param1){
    stopTimer();
    startTimer = setInterval(function() {
      timer();
      if(minuteInput.value <= minuteInput.value / 2 ){
        message.innerHTML = "More than halfway there!";
      } 

      if(minuteInput.value == 0 && secondsValue < 20){
        miniMinutes.style.color = "red"; // The last 20 seconds
        minuteOutput.style.color = "red";
        divider.style.color = "red";
      }

      if(minuteInput.value == 0 && secondsValue == 0){
        message.innerHTML = "Time's up! 😢";
        message.style.fontSize = "24px";
        miniMinutes.innerHTML = "--"; // The last 10 seconds
        minuteOutput.innerHTML = "--";
      }

      if(minuteInput.value == 0 && secondsValue <= 10){
        miniMinutes.classList.add("blink"); // The last 10 seconds
        minuteOutput.classList.add("blink");
        divider.classList.add("blink");
      }
     }, param1);
}

  startIntervalOneHalf(666.6);
});

// Increase speed by 2
upTwo.addEventListener("click", function(){
  upTwo.classList.add("active");
  upOne.classList.remove("active");
  upOneHalf.classList.remove("active");
  message.innerText = "";

   // The function below takes a parameter that determines the speed of the count
   function startIntervalTwo(param1){
    stopTimer();
    startTimer = setInterval(function() {
      timer();
      if(minuteInput.value <= minuteInput.value / 2 ){
        message.innerHTML = "More than halfway there!";
      }

      if(minuteInput.value == 0 && secondsValue < 20){
        miniMinutes.style.color = "red"; // The last 20 seconds
        minuteOutput.style.color = "red";
        divider.style.color = "red";
      }

      if(minuteInput.value == 0 && secondsValue == 0){
        message.innerHTML = "Time's up! 😢";
        message.style.fontSize = "24px";
        miniMinutes.innerHTML = "--"; // The last 10 seconds
        minuteOutput.innerHTML = "--";
      }

      if(minuteInput.value == 0 && secondsValue <= 10){
        miniMinutes.classList.add("blink"); // The last 10 seconds
        minuteOutput.classList.add("blink");
        divider.classList.add("blink");
      }
  }, param1);
}

  startIntervalTwo(500);
});

// Stops the counter temporarily
pauseButton.addEventListener("click", function(){
  startButton.innerText = "Continue";
  message.innerText = "Paused...";
  stopTimer();
});


