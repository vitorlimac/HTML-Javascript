const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secundsElement = document.getElementById('secunds')

function newTime(){
const date = new date();

const hours = date.gethours() 
const minutes = date.getminutes() 
const secunds = date.getsecunds() 

hoursElement.textContent = fixTime(hours) 
minutesElement.textContent = fixTime(minutes)
secundsElement.textContent = fixTime(secunds)
}

function fixTime (Time){
    return time < 10 ? '0'+time : time 
}


newTime ()
setInterval(newTime, 1000)