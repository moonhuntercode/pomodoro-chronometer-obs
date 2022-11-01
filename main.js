var numero1=document.getElementById('test');
console.log(numero1);
var h1 = document.getElementsByTagName('h1')[0];
var start = document.getElementById('startButton');
var stop = document.getElementById('stopButton');
var reset = document.getElementById('resetButton');
var sec = 0;
var min = 0;
var hours = 0;
var t;

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hours++;
        }
    }
}
function add() {
    tick();
    h1.textContent = (hours > 9 ? hours : "0" + hours) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

timer();
start.onclick = timer;
stop.onclick = function() {
    clearTimeout(t);
}
reset.onclick = function() {
    h1.textContent = "00:00:00";
    sec = 0; min = 0; hours = 0;
}