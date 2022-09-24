const start = document.getElementById("start")
start.addEventListener('click' , function() {

    start.disabled = true
    const getday = document.getElementById("getday").value
    const getmonth = document.getElementById("getmonth").value 
    const getyear = document.getElementById("getyear").value
  
    // console.log(getday)
    // console.log(getmonth)
    // console.log(getyear)

    const presentday = new Date().getDate()
    const presentmonth = new Date().getMonth() + 1
    const presentyear = new Date().getFullYear()

    // console.log(presentday)
    // console.log(presentmonth)
    // console.log(presentyear)

    if(getyear < presentyear){
        alert('invalid year')
        start.disabled = false
        return false;
    }
    else if(getyear==presentyear && getmonth<presentmonth){
        alert('invalid month')
        start.disabled = false
        return false;
    }
    else if(getyear==presentyear && getmonth==presentmonth && getday<=presentday){
        alert('invalid date')
        start.disabled = false
        return false;
    }
    else{
        document.getElementById("getday").disabled=true
        document.getElementById("getmonth").disabled=true
        document.getElementById("getyear").disabled=true
    }

    const target = new Date(getyear,getmonth,getday).getTime();
    console.log(target)
    console.log(new Date(target).toLocaleDateString())

    let x = setInterval( () => {
        const today= new Date().getTime(); // present time in milliseconds.
        //console.log(today)
        
        let difference= target - today; // difference between present time and target time in milliseconds.
        //console.log(difference)
        
        let days= Math.floor(difference / (1000*60*60*24)) - 30;  // Remaining Days
        let hours= Math.floor(difference / (1000*60*60) % 24); // Remaining hours - by dividing the remainder with (1000*60*60)
        let minutes= Math.floor(difference / (1000*60) % 60);  // Remaining minutes
        let seconds= Math.floor(difference / (1000) % 60);  // Remaining seconds
        
        document.getElementById("days").innerHTML= days
        document.getElementById("hours").innerHTML= hours
        document.getElementById("minutes").innerHTML= minutes
        document.getElementById("seconds").innerHTML= seconds
        
    },1000);

    const resetbtn = document.getElementById("reset")
    resetbtn.addEventListener('click' , function(){
        clearInterval(x);
        window.location.reload();
    })

})
