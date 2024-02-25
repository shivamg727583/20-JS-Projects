var endTime=`25 feb 2024 11:00 PM`
document.querySelector("#endTime").innerHTML=endTime;


function clock(){
    var end=new Date(endTime)
    var now =new Date();
    var diff=(end-now)/1000; //conver millisec into seconds
// 1 day = 24hours = 24*3600 second
// 1hour = 60 minutes = 60*60=3600 seconds
// 1 minute = 60 seconds
if(diff < 0) return;

var days=Math.floor(diff/3600/24);
var hours=Math.floor(diff/3600)%24;
var minutes=Math.floor(diff/60)%60;
var seconds=Math.floor(diff)%60
document.querySelector(".days").innerHTML=days;
document.querySelector(".hour").innerHTML=hours;
document.querySelector(".mins").innerHTML=minutes;
document.querySelector(".sec").innerHTML=seconds;

}

setInterval(function(){
clock()
    
},1000)