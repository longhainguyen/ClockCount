window.onload = function () {
  
	var seconds = 00; 
	var tens = 00; 
    var hours = 00;
    var minutes = 00;
    var appendHours = document.getElementById("hours");
    var appendMinutes = document.getElementById("minutes");
	var appendTens = document.getElementById("tens");
	var appendSeconds = document.getElementById("seconds");
	var buttonStart = document.getElementById('button-start');
	var buttonStop = document.getElementById('button-stop');
	var buttonReset = document.getElementById('button-reset');
	var Interval ;
  
	buttonStart.onclick = function() {
	  
	  clearInterval(Interval);
	   Interval = setInterval(startTimer, 10);
	}
	
	  buttonStop.onclick = function() {
		 clearInterval(Interval);
	}
	
  
	buttonReset.onclick = function() {
	   clearInterval(Interval);
	  tens = "00";
	  seconds = "00";
	  hours = 0;
	  minutes = 0;
	  appendHours.innerHTML = "00";
	  appendMinutes.innerHTML = "00";
	  appendTens.innerHTML = tens;
	  appendSeconds.innerHTML = seconds;
	}
	
	 
	
	function startTimer () {
	  tens++; 
	  
	  if(tens <= 9){
		appendTens.innerHTML = "0" + tens;
	  }
	  
	  if (tens > 9){
		appendTens.innerHTML = tens;
		
	  } 
	  
	  if (tens > 99) {
		console.log("seconds");
		seconds++;
		appendSeconds.innerHTML = "0" + seconds;
		tens = 0;
		appendTens.innerHTML = "0" + 0;
	  }
	  
	  if(seconds > 59){
		seconds = 0;
		minutes ++;
		}
		appendMinutes.innerHTML = "0" + minutes;
		if(minutes > 59){
			minutes = 0;
			hours++;
		}
		appendHours.innerHTML = "0" + hours;
	  if (seconds > 9){
		appendSeconds.innerHTML = seconds;
	  }

      if(minutes > 9){
        appendMinutes.innerHTML = minutes;
      }
      if(hours> 9){
        appendHours.innerHTML = hours;
      }
	
	}
	
  
  }