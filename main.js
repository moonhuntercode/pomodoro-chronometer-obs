const numero1=document.getElementById('test');
console.log(numero1);
const h1 = document.getElementsByTagName('h1')[0];
const start = document.getElementById('startButton');
const stop = document.getElementById('stopButton');
const reset = document.getElementById('resetButton');
let t,
    hours = 0,
    min = 0,
    sec = 0;

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
}
function timer() {
    clearInterval(t);    
    t = setInterval(add, 1000);
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