// milliseconds
const countDownDate=new Date("Oct 24, 2022 00:00:00").getTime(); // target time in milliseconds.
//console.log(countDownDate)

let x=setInterval(()=>{
    const today=new Date().getTime(); // present time in milliseconds.
    //console.log(today)

    let difference =countDownDate - today; // difference between present time and target time in milliseconds.
    //console.log(value)

    let days=Math.floor(difference /(1000*60*60*24));
    let hours=Math.floor(difference %(1000*60*60*24)/(1000*60*60));
    let minutes=Math.floor(difference %(1000*60*60)/(1000*60));
    let seconds=Math.floor(difference %(1000*60)/1000);

    document.getElementById("days").innerHTML=days
    document.getElementById("hours").innerHTML=hours
    document.getElementById("minutes").innerHTML=minutes
    document.getElementById("seconds").innerHTML=seconds

},1000);