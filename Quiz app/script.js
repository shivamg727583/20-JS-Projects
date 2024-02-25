const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
   question: "What does JSON stand for?",
    a: "JavaScript Oriented Notation ",
    b:"JavaScript Object Notation ",
    c: "Java Ordered Notation ",
    d: "Java Object Notation" ,
    correct:"b"
},{
  question: " What is the file extension commonly used for JSON files? ",
    a:".xml ",
    b: ".js ",
    c: ".json ",
    d: ".html ",
    correct:"c"
}
,{
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C++",
    c: "Javascript",
    d: "Python",
    correct: "c",
  },
  {
    question: "How can you open a link in a new browser window?",
    a: '<a href="url" new>',
    b: '<a href="url" new>',
    c: '<a href="url" target="_blank">',
    d: '<a href="url" target="">',
    correct: "c",
  },
  {
    question: "_________ keyword is used to declare variables in javascript.",
    a: "Var",
    b: "Dim",
    c: "Stringt",
    d: "None of above",
    correct: "a",
  },
  {
    question: "What's so great about XML?",
    a: "Easy data exchange",
    b: "High speed on network",
    c: "Only B is correct",
    d: "Both A & B",
correct: "d",
  },
];

var index=0;
var total=quizData.length;
var right=0,wrong=0;
var ques=document.querySelector(".ques h2");
var optionInput=document.querySelectorAll(".options")


function CreateQuestion(){
    if(index == total){
        return endQuiz();
    }
    else{

        reset();
        var data=quizData[index];
        ques.innerHTML = `${index+1}) ${data.question}`;
        optionInput[0].nextElementSibling.innerText =data.a;
        optionInput[1].nextElementSibling.innerText =data.b;
        optionInput[2].nextElementSibling.innerText =data.c;
        optionInput[3].nextElementSibling.innerText =data.d;
    }
   
}




function submitQuiz(){
var data=quizData[index];
var ans =getAnswer();
if(ans===data.correct){
    right++;
}
else{
    wrong++;
}
index++;
CreateQuestion();
return;
}

function getAnswer(){
    var answer;
optionInput.forEach(function(input){
    if(input.checked){
        answer = input.value;
    }
})
return answer;
}
function reset(){
    optionInput.forEach(function(input){
    input.checked=false;
    })
}

function endQuiz(){
document.querySelector(".box").innerHTML =`
<h3> Thank you the playing Quiz</h3>
<h2> ${right} / ${total} is correct </h2>`
}
CreateQuestion();

function preQuiz(){
    if(index >0){
        index--;
        CreateQuestion();
    }
  
}