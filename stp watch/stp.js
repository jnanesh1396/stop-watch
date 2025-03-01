const d=document.getElementById("display");
let timer=null;
let sttime=0;
let eltime=0;
let running=false;
function update(){
    const ctime=Date.now();
    eltime=ctime-sttime;
    let hr=Math.floor(eltime/(1000*60*60));
    let min=Math.floor(eltime/(1000*60)%60);
    let sec=Math.floor(eltime/1000%60);
    let msec=Math.floor(eltime%1000/10);
    hr=String(hr).padStart(2,"0");
    min=String(min).padStart(2,"0");
    sec=String(sec).padStart(2,"0");
    msec=String(msec).padStart(2,"0");
    d.textContent=`${hr}:${min}:${sec}:${msec}`;
}
function start(){
    if(!running){
        sttime=Date.now()-eltime;
        timer=setInterval(update,10);
        running=true;
    }
}
function stop(){
    if(running){
        clearInterval(timer);
        eltime=Date.now()-sttime;
        running=false;
    }
}
function reset(){
    clearInterval(timer);
    sttime=0;
    eltime=0;
    running=false;
    d.textContent="00:00:00:00";

}