let hours=document.querySelector("#hours")
let minute=document.querySelector("#minutes")
let seconds=document.querySelector("#seconds")
let section=document.querySelector("#section")


let displayTime=()=>{

    let hrs=new Date().getHours()
    let min=new Date().getMinutes()
    let sec=new Date().getSeconds()
   
   if(hrs>=12){
    section.innerHTML="PM"
   }else{
    section.innerHTML="AM"
   }

   if(sec<10){
    sec="0"+sec
   }

   if(min<10){
    min="0"+min
   }

  if(hrs < 10){
    hrs = "0" + hrs
  }


    if(hrs>12){
        hrs=hrs-12  
    }


    hours.innerHTML=hrs
    minute.innerHTML=min
    seconds.innerHTML=sec
    
}
setInterval(displayTime,10)