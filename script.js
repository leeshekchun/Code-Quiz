
// Score display
var score = 0;

  document.getElementById("Start").addEventListener("click", startquiz);
  function startquiz(timeEl) {
      document.getElementById("wrapper-2").innerHTML = "<div class='card-header'>test</div>";
      clearInterval(countdown());
  };

// insert timer
var timerEl = document.getElementById('TimerEl');
function countdown() {
    var timeLeft = 75;
  
    // TODO: Add a comment describing the functionality of the setInterval() method:
    var timeInterval = setInterval(function () {
      // TODO: Add comments describing the functionality of the `if` statement:
      if (timeLeft > 1) {
        TimerEl.textContent = 'Time: ' + timeLeft;
        timeLeft--;
      } // TODO: Add comments describing the functionality of the `else if` statement:
      else if (timeLeft === 1) {
        TimerEl.textContent = 'Time: ' + timeLeft;
        timeLeft--;
      } // TODO: Add comments describing the functionality of the `else` statement:
      else {
        TimerEl.textContent = '';
        clearInterval(timeInterval);
        // displayMessage();
      }
    }, 1000);
  }
  countdown();

// Question 01
var set0 ={
  question: "How many toes does a chicken feet have?",
  options: ["Three", "Four", "Five", "Six"],
};
// answer: Four

// question 02
var set1 ={
  question: "Who is bigger, Mr. Bigger, Mrs. Bigger, or their baby?",
  options: ["Mr. Bigger", "Mrs. Bigger", "their baby", "You"],
};
// answer: their baby

//question 03
var set2 ={
  question: "How many countries in the world?",
  options: ["150", "175", "195", "210"],
};
// answer: 195

var allQuestion = [set0.question, set1.question, set2.question];
var allOptions = [options[0], options[1], options[2], options[3]];

// options div
for (let i = 0; i < allOptions.length; i++) {
var buttonAns1 = allOptions[0];
console.log(buttonAns1);
var buttonAns2 = allOption[1];
var buttonAns3 = allOption[2];
var buttonAns4 = allOption[3];
}

//question div
for (let i = 0; i < allQuestion.length; i++) {
var quesBox = document.createElement("textarea");
quesBox.textContent = allQuestion[i];
console.log(quesBox.textContent)
}

  //answer buttons container
    var buttonContainer = document.createElement("div");
    buttonContainer.className = "button1";
    buttonContainer.id = "button.taskid";
    //answer buttons
      var buttonAns1 = document.createElement("button");
      buttonAns1.textContent = allOptions[0]
      console.log(buttonAns1.textContent)

      var buttonAns2 = document.createElement("button");
      buttonAns2.textContent = allOptions[1]
      console.log(buttonAns2.textContent)

      var buttonAns3 = document.createElement("button");
      buttonAns3.textContent = allOptions[2]
      console.log(buttonAns3.textContent)

      var buttonAns4 = document.createElement("button");
      buttonAns4.textContent = allOptions[3]
      console.log(buttonAns4.textContent)

      //appendChild button buttonP1Container div
        buttonContainer.appendChild(buttonAns1);
        buttonContainer.appendChild(buttonAns2);
        buttonContainer.appendChild(buttonAns3);
        buttonContainer.appendChild(buttonAns4);



// footer for answer result        
var footer = document.createElement("div");
footer.id = "card-footer";
footer.className = "card-footer";
footer.textContent = ""




