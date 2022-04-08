// "Start-Quiz button"
var startquizBtn = document.getElementById(Start);


// Question 01
var set0 ={
  question: "How many toes does a chicken feet have?",
  options: ["Three", "Four", "Five", "Six"],
};
// answer: Four

// question 02
var set1 ={
  question: "Who is bigger, Mr. Bigger, Mrs. Bigger, or their baby?",
  options: ["Mr. Bigger", "Mrs. Bigger", "their baby"],
};
// answer: their baby

//question 03
var set2 ={
  question: "How many countries in the world?",
  options: ["150", "175", "195", "210"],
};
// answer: 195

var allQuestion = [set0.question, set1.question, set2.question]


// Score display
var score = 0;


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
  
  document.getElementById("Start").addEventListener("click", startquiz);
  function startquiz() {
      document.getElementById("wrapper-2").innerHTML = "<div class='card-header'>test</div>";
  };




// buttons for question one
var ques1 = function () {

//question div
var quesBox = document.createElement("textarea");


  //answer buttons container
    var buttonContainer = document.createElement("div");
    buttonContainer.className = "button1";
    buttonContainer.id = "button.taskid";
    //answer buttons
      var buttonAns1 = document.createElement("button");
      buttonAns1.textContent = "Three"
      var buttonAns2 = document.createElement("button");
      buttonAns2.textContent = "Four"
      buttonAns2.Id = "btnP1Correct"
      var buttonAns3 = document.createElement("button");
      buttonAns3.textContent = "Five"
      var buttonAns4 = document.createElement("button");
      buttonAns4.textContent = "Six"
      //appendChild button buttonP1Container div
        buttonContainer.appendChild(buttonAns1);
        buttonContainer.appendChild(buttonAns2);
        buttonContainer.appendChild(buttonAns3);
        buttonContainer.appendChild(buttonAns4);

        // if buttonP1Ans2 is clicked, it will show correct and jump to next page
        if (buttonP1An2)
        document.getElementById("btnP1Correct").addEventListener("click", ques2)
        // if else button is clicked, it will show incorrect
};

var ques2 = function () {

};

// After clicking on the "start quiz" button, function to start question
$("startquizBtn").click(function(allQuestion)) {
for (let i=0,; i < allQuestion.length; i++) {
  if (allQuestion[0]);
  $("ques1").show(function(){})
}

}
