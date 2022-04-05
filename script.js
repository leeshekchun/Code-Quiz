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
  //answer buttons container
    var buttonP1Container = document.createElement("div");
    buttonP1Container.className = "buttonP1";
    buttonP1Container.id = "buttonP1.taskid";
    //answer buttons
      var buttonP1Ans1 = document.createElement("button");
      buttonP1Ans1.textContent = "Three"
      var buttonP1Ans2 = document.createElement("button");
      buttonP1Ans2.textContent = "Four"
      buttonP1Ans2.Id = "btnP1Correct"
      var buttonP1Ans3 = document.createElement("button");
      buttonP1Ans3.textContent = "Five"
      var buttonP1Ans4 = document.createElement("button");
      buttonP1Ans4.textContent = "Six"
      //appendChild button buttonP1Container div
        buttonP1Container.appendChild(buttonP1Ans1);
        buttonP1Container.appendChild(buttonP1Ans2);
        buttonP1Container.appendChild(buttonP1Ans3);
        buttonP1Container.appendChild(buttonP1Ans4);

        // if buttonP1Ans2 is clicked, it will show correct and jump to next page
          document.querySelector("#btnP1Correct").addEventListener("click", ques2)
};   
        // if else button is clicked, it will show incorrect
          document.querySelector("").addEventListener("click", )

var ques2 = function () {

}