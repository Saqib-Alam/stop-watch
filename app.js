
var hrsDigit=document.getElementById('hours');
var minDigit=document.getElementById('mins');
var secDigit=document.getElementById('sec');
var msecDigit=document.getElementById('msec');


var hrs=0;
var min=0;
var sec=0;
var msec=0;

var interval;

function timeStart(){
    msec++  
    msecDigit.innerHTML = msec
    if(msec == 100){
        sec++;
        secDigit.innerHTML = sec;
        msec = 0;
    }
    else if(sec == 60){
        min++;
        minDigit.innerHTML = min;
        sec = 0;
    }
    else if(min == 60){
        hrs++;
        hrsDigit.innerHTML = hrs;
        min = 0;
}

}




function start(){
    interval = setInterval(timeStart , 10 );
    var startBtn =document.getElementById("startBtn");
    startBtn.disabled = true;

}

function stopTime(){
    clearInterval(interval)
    var startBtn =document.getElementById("startBtn");
    startBtn.disabled = false;
}


function reset(){
    clearInterval(interval)
    msecDigit.innerHTML = 0
    secDigit.innerHTML = 0
    minDigit.innerHTML = 0
    hrsDigit.innerHTML = 0
    min=0
    sec=0
    msec=0
    hrs=0
    var startBtn =document.getElementById("startBtn");
    startBtn.disabled = false;

}