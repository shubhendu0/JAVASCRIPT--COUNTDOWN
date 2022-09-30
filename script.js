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
    else if(getday>31){
        alert('invalid date')
        start.disabled = false
        return false;
    }
    else if((getmonth==4 || getmonth==6 || getmonth==9 || getmonth==8 || getmonth==11 ) && getday>30){
        alert('invalid date')
        start.disabled = false
        return false;
    }
    else if((getmonth==2 && getday>29) || (getmonth==2 && getday>28 && ((getyear%100==0 && getyear%400!=0) || (getyear%100!=0 && getyear%4!=0)))){
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
    //console.log(target)
    //console.log(new Date(target).toLocaleDateString())

    let x = setInterval( () => {
        const today= new Date().getTime(); 
        //console.log(today)
        
        let difference= target - today; 
        //console.log(difference)
        
        let days= Math.floor(difference / (1000*60*60*24)) - 30;  // Remaining Days
        let hours= Math.floor(difference / (1000*60*60) % 24); // Remaining hours 
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
