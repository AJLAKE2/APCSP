$(document).ready(function(){
    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var day = currentTime.getDay();
        var date = currentTime.getUTCDate();
        var month = currentTime.getMonth();
        var year = currentTime.getYear() + 1900;
        var meridiem = "AM";
        if(hours> 12){
            hours = hours-12;
            meridiem = "PM";
        }
        if(meridiem === "PM"){
            date = date-1;     
        }
        
        if(hours === 0){
            hours = 12;
        }
        
        if(seconds < 10){
            seconds= "0"+ seconds;
        }
        
        if (minutes <  10){
            minutes = "0" + minutes;
        }
        
        if(hours < 10){
            hours = "0" + hours;
        }
        
        if(day === 0){
            day = "Sunday"
        } else if(day === 1){
            day = "Monday"
        } else if (day === 2){
            day = "Tuesday"
        } else if (day === 3){
            day = "Wednesday"
        } else if (day === 4){
            day = "Thursday"
        } else if (day === 5){
            day = "Friday"
        } else {
            day = "Saturday"
        }
        
        if(month === 0){
            month = "Jan"
        } else if(month === 1){
            month = "Feb"
        } else if(month === 2){
            month = "Mar"
        } else if(month === 3){
            month = "Apr"
        } else if(month === 4){
            month = "May"
        } else if(month === 5){
            month = "June"
        } else if(month === 6){
            month = "July"
        } else if(month === 7){
            month = "Aug"
        } else if(month === 8){
            month = "Sep"
        } else if(month === 9){
            month = "Oct"
        } else if(month === 10){
            month = "Nov"
        } else {
            month = "Dec"
        }
        
        
        
        var dayDiv = document.getElementById('day');
        
        var dateDiv = document.getElementById('date');
        
        var clockDiv = document.getElementById('clock');
        
        dayDiv.innerText = day;
        dateDiv.innerText = month + " " + date + " " + year;
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    }
    displayTime();
    setInterval(displayTime, 1000);
});