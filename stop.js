const display = document.getElementById("d2");
let timer = null;
let starttime = 0;
let elapsed = 0;
let isRunning = false;

function start(){

    if(!isRunning){
        starttime = Date.now() - elapsed;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}
function stop(){

    if(isRunning){
        clearInterval(timer);
        elapsed=Date.now()-starttime;
        isRunning=false;
    }
    
}
function reset(){

    clearInterval(timer);
    starttime=0;
    elapsed=0;
    isRunning=false;
    display.textContent="00:00:00:00";
    
}
function update(){
    const currtime= Date.now();
    elapsed=currtime-starttime;

    let hours=Math.floor(elapsed/(1000*60*60));
    let mins=Math.floor(elapsed/(1000*60)%60);
    let secs=Math.floor(elapsed/1000 % 60);
    let millis=Math.floor(elapsed % 1000 / 10);

    hours=String(hours).padStart(2,"0");
    mins=String(mins).padStart(2,"0");
    secs=String(secs).padStart(2,"0");
    millis=String(millis).padStart(2,"0");

    display.textContent=`${hours}:${mins}:${secs}:${millis}`;
}