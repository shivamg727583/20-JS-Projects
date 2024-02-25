var screen =document.querySelector(".main")
var startBtn=document.querySelector(".startBtn")
var stopBtn=document.querySelector(".endBtn")


startBtn.addEventListener("click",function(){
var inter= setInterval(function(){

    var c1=Math.floor(Math.random()*255);
var c2=Math.floor(Math.random()*255);
var c3=Math.floor(Math.random()*255);
console.log(c1,c2,c3)
    screen.style.backgroundColor=`rgb(${c1},${c2},${c3})`
},1000)

stopBtn.addEventListener("click",function(){
    clearInterval(inter)
})
})

