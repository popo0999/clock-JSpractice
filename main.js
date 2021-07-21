const secHand = document.querySelector('.secHand');
const runClock = ()=>{
    const now = new Date;
    secHand.style.transform = `rotate(${ now.getSeconds()*6 }deg)`;
    setTimeout(runClock, 1000);
}
runClock();

const minHand = document.querySelector('.minHand');
const runClockMin = () =>{
    const now = new Date;
    minHand.style.transform = `rotate(${ now.getMinutes()*6 }deg)`;
    setTimeout(runClock, 1000);
}
runClockMin();

const hourHand = document.querySelector('.hourHand');
const runClockHour = () =>{
    const now = new Date;
    hourHand.style.transform = `rotate(${now.getHours()*30}deg)`;
    setTimeout(runClock, 1000);
};
runClockHour();