document.querySelector(".start").addEventListener("click", function (params) {
   document.querySelector("#home").style.display = "none" 
   document.querySelector("#quiz").style.display = "flex" 
   renderQuestion()
   timer()
})

var questions = [
    {
        question: 'What is the first zodiac sign in astrology?',
        choice1: 'Aries',
        choice2: 'Gemini',
        choice3: 'Leo',
        choice4: 'Capricorn',
        answer: 1
    },
    {
        question: 'Who is the head of the Soprano family?',
        choice1: 'Paulie',
        choice2: 'Silvio',
        choice3: 'Chrissy',
        choice4: 'Tony',
        answer: 4
    },
    {
        question: 'Bears is to beets as beets is to _____?',
        choice1: 'Bubblegum',
        choice2: 'Battlestar Galactica',
        choice3: 'Barracuda',
        choice4: 'Barcelona',
        answer: 2
    },
    {
        question: 'What house was Harry Potter in at Hogwarts?',
        choice1: 'Slytherin',
        choice2: 'Hufflepuff',
        choice3: 'Gryffindor',
        choice4: 'Ravenclaw',
        answer: 3
    },
]

var index = 0
function renderQuestion(){
document.querySelector("#question").innerText = questions[index].question
document.querySelector("#btn1").innerText = questions[index].choice1
document.querySelector("#btn2").innerText = questions[index].choice2
document.querySelector("#btn3").innerText = questions[index].choice3
document.querySelector("#btn4").innerText = questions[index].choice4
}

document.querySelector("#quiz").addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON"){
        var choice = event.target.innerText
        var correctIndex = questions[index].answer
        if (choice !== questions[index]["choice" + correctIndex]){
           time -= 5
        } 
        index++
        if (index>=questions.length){
            document.querySelector("#quiz").style.display = "none" 
            clearInterval(timerId)
            var initials = prompt("Enter Your Initials")
            var scoreObj = {
                initials, time
            }
            localStorage.setItem("highscore", JSON.stringify(scoreObj))
            return window.location.reload()
        }
        renderQuestion()
    }
})
var highScore = JSON.parse(localStorage.getItem("highscore"))||{
    initials:"",
    time:""
}
document.querySelector("#highscore").innerText = highScore.initials + " " + highScore.time
var timerId;
var time = 60
function timer(){
    timerId = setInterval(function () {
     if (time>0){
        time --
        document.querySelector("#timer").innerText = time
     }   
    },1000)
}