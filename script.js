// Global Variable
var score = 0;
var progress = 0;
var timeLeft = 75;


var result = document.createElement("h3");
result.innerText = ""

var footer = document.createElement("div");
footer.id = "card-footer";
footer.className = "card-footer";

// When Startquiz button is clicked
document.getElementById("Start").addEventListener("click", startquiz);
  

// startquiz function
  function startquiz() {
      timeLeft = 75;
       countdown();
       clearHTML();
       addQuestions();
       addContainerBtn();
       addAnswers();
  };

// insert timer
var timerEl = document.getElementById('TimerEl');
function countdown() {
  
    var timeInterval = setInterval(function () {
      
      if (timeLeft > 1) {
        TimerEl.textContent = 'Time: ' + timeLeft;
        timeLeft-=1;
      } 
      else if (timeLeft === 1) {
        TimerEl.textContent = 'Time: ' + timeLeft;
        timeLeft-=1;
      } 
      else if (timeLeft < 1) {
        TimerEl.textContent = 'Times up';
        timeLeft-=1;
      }
        else if (timeLeft < -4 ) {
        startquiz();
      }
    }, 1000);
  }
  
// answers variable
var answer1 = ""
var answer2 = ""
var answer3 = ""
var answer4 = ""


// questions variable
var question1 = document.createElement("h2")
question1.innerText = "How many toes does a chicken feet have?";


var question2 = document.createElement("h2")
question2.innerText = "Who is bigger, Mr. Bigger, Mrs. Bigger, or their baby?";

var question3 = document.createElement("h2")
question3.innerText = "How many countries in the world?";


  //answer buttons container
  function addContainerBtn() {
  document.getElementById("card-body").appendChild(buttonContainer);
  }
    var buttonContainer = document.createElement("div");
    buttonContainer.className = "button1";
    buttonContainer.id = "button.taskid";
    //answer buttons
      var buttonAns1 = document.createElement("button");
      // buttonAns1.textContent = allOptions[0]
      buttonAns1.className = "btn"
      buttonAns1.id = "Ans1"
      buttonAns1.onclick = function(){
      keepScore1();
      displayResult();
      trackprogress();
      addQuestions();
      addAnswers();
     }
      console.log(buttonAns1.textContent)

      var buttonAns2 = document.createElement("button");
      // buttonAns2.textContent = allOptions[1]
      buttonAns2.className = "btn"
      buttonAns2.id = "Ans2"
      buttonAns2.onclick = function(){
      keepScore2();
      displayResult();
      trackprogress();
      addQuestions();
      addAnswers();
      }
      console.log(buttonAns2.textContent)

      var buttonAns3 = document.createElement("button");
      // buttonAns3.textContent = allOptions[2]
      buttonAns3.className = "btn"
      buttonAns3.id = "Ans3"
      buttonAns3.onclick = function(){
      keepScore3();
      displayResult();
      trackprogress();
      addQuestions();
      addAnswers();
      }
      console.log(buttonAns3.textContent)

      var buttonAns4 = document.createElement("button");
      // buttonAns4.textContent = allOptions[3]
      buttonAns4.className = "btn"
      buttonAns4.id = "Ans4"
      buttonAns4.onclick = function(){
      keepScore4();
      displayResult();
      trackprogress();
      addQuestions();      
      addAnswers();
      }
      console.log(buttonAns4.textContent)

      //appendChild button buttonP1Container div
        buttonContainer.appendChild(buttonAns1);
        buttonContainer.appendChild(buttonAns2);
        buttonContainer.appendChild(buttonAns3);
        buttonContainer.appendChild(buttonAns4);


// function to clear the whole page
function clearHTML() {
  document.getElementById("card-body").innerHTML = ""
  document.getElementById("wrapper-2").innerHTML = ""
}


// each questions
function addQuestions() {
  document.getElementById("wrapper-2").innerHTML = ""
  if (progress == 0) {
    document.getElementById("wrapper-2").appendChild(question1);
  }
  else if (progress == 1) {
    document.getElementById("wrapper-2").appendChild(question2);
  }
  else if (progress == 2) {
    document.getElementById("wrapper-2").appendChild(question3);
  }
  else if (progress > 2){
  document.getElementById("wrapper-2").innerHTML = ""
  }
  };

  // Answers for each questions
  function addAnswers() {
    if (progress == 0) {
      answer1 = "Three"
      answer2 = "Four"
      answer3 = "Five"
      answer4 = "Six"
    }
    else if (progress == 1) {
      answer1 = "Mr. Bigger"
      answer2 = "Mrs. Bigger"
      answer3 = "Their baby"
      answer4 = "You"
    }
    else if (progress == 2) {
      answer1 = "150"
      answer2 = "175"
      answer3 = "195"
      answer4 = "210"
    }    
    
    else if (progress > 2) {
      document.getElementById("card-body").innerHTML = "";
      allDone()
    }
    if (progress <= 2) {
    document.getElementById("Ans1").innerHTML = answer1
    document.getElementById("Ans2").innerHTML = answer2
    document.getElementById("Ans3").innerHTML = answer3
    document.getElementById("Ans4").innerHTML = answer4
  }
}

// track which question is answering
function trackprogress() {
  progress += 1
  if (progress > 2) {
  }
};


// If answer wrong, it will deduct 10 seconds and show result as wrong!
function keepScore1() {
    timeLeft -= 10
    result.innerText = "Wrong!"
  }


function keepScore2() {
  if (progress == 0) {
    score += 1
    result.innerText = "Correct!"
    return score
  }  
  else if (progress != 0) {
timeLeft -= 10
result.innerText = "Wrong!"
  }
}


function keepScore3() {
  if (progress == 1, 2) {
    score += 1
    result.innerText = "Correct!"
    return score
  }
  else if (progress == 0) {
    timeLeft -= 10
    result.innerText = "Wrong!"
}
}

function keepScore4() {
    timeLeft -= 10
    result.innerText = "Wrong!"
}



// All done page
function displayResult() {
document.getElementById("card").appendChild(footer);
document.getElementById("card-footer").appendChild(result);
}

var finish = document.createElement("div");
var finishTitle = document.createElement("h3");
var finalScore = document.createElement("p");
var nameid = document.createElement("p");
var nameidInput = document.createElement("textarea");
var submitBtn = document.createElement("button");

function endingFunction() {
finish.id = "finished";
finishTitle.innerText = "All Done!";
finalScore.innerText = `Your final score is ${score}`;
// finalScore.innerText = "Your final score is: " + score 
nameid.innerText = "Enter initials:";
nameidInput.id = "initial";
submitBtn.innerHTML = "Submit";
submitBtn.className = "btn";

submitBtn.onclick = function(){

var person = document.getElementById("initial").value

localStorage.setItem(person, score);
console.log(localStorage);

lastpage();
};


};

// After all the questions is answered
function allDone() {
document.getElementById("wrapper-2").innerHTML = ""
document.getElementById("card-body").innerHTML = ""
endingFunction();
document.getElementById("wrapper-2").appendChild(finish);
document.getElementById("finished").appendChild(finishTitle);
document.getElementById("wrapper-2").appendChild(finalScore);
document.getElementById("wrapper-2").appendChild(nameid);
document.getElementById("wrapper-2").appendChild(nameidInput);
document.getElementById("wrapper-2").appendChild(submitBtn);
} 


// Last page high scores 
var highScore = document.createElement("div")
var highScoretext = document.createElement("h3")
highScoretext.innerText = "High Scores"
var nameidTextbox = document.createElement("ol")
nameidTextbox.id = "list"
var highestScore = document.createElement("li")

// Highest score
highestScore.innerHTML = Object.entries(localStorage)[0];
// Second highest score
// secondHighest.innerHTML = Object.entries(localStorage)[1];
// // Third highest score
// thirdHighest.innerHTML = Object.entries(localStorage)[2];


// Last page variables
var gobackBtn = document.createElement("button")
gobackBtn.innerHTML = "Go Back"
var clearHighscoreBtn = document.createElement("button")
clearHighscoreBtn.innerHTML = "Clear high scores"


// Last page
function lastpage() {
document.getElementById("wrapper-2").innerHTML = ""
document.getElementById("card-body").innerHTML = ""

document.getElementById("wrapper-2").appendChild(highScoretext);
document.getElementById("wrapper-2").appendChild(nameidTextbox);
document.getElementById("wrapper-2").appendChild(gobackBtn);
document.getElementById("wrapper-2").appendChild(clearHighscoreBtn);

document.getElementById("list").appendChild(highestScore);
// document.getElementById("list").appendChild(secondHighest);
// document.getElementById("list").appendChild(thirdHighest);
}

// go back button function
gobackBtn.onclick = function() {
  startquiz();
};

// clear high score fuunction
clearHighscoreBtn.onclick = function() {
  localStorage.clear();
  // nameidTextbox.innerHTML = "";
};
