$(document).ready(function(){
 	
  var count = parseInt($("#display").html());	
  var breakTime = parseInt($("#displayNum").html());
  $("#start").click(function(){
	var counter = setInterval(timer, 1000);
  
  count*=60;
  breakTime*=60;	
  function timer() {
	$("#start, #subClock, #addClock, #addBreak, #subBreak, #displayNum, #sessionTitle, #breakTitle").hide();
	$("#timeType").show();
	$("#timeType").html("Session Time: ")
	count-=1;
	if(count===0){
	  clearInterval(counter);	
	  var startBreak= setInterval(breakTimer,1000);
	  $("#display").hide();
	}
	
	if(count%60>=10){
	  $("#display").html(Math.floor(count/60)+":"+count%60);	
	}
	else {
	  $("#display").html(Math.floor(count/60)+":"+"0"+count%60);	
	}
	 

   function breakTimer() {
	$("#timeType").html("Break Time: ");
	 $("#displayNum").show();
     
	   $("#timeType").show();
	 breakTime -= 1;
	 if(breakTime===0){
	  clearInterval(startBreak);
	  $("#reset").show();
	  $("#displayNum, #timeType").hide();
	 }
	 
	if(breakTime%60>=10){
	  $("#displayNum").html(Math.floor(breakTime/60)+":"+breakTime%60);	
	}
	else {
	  $("#displayNum").html(Math.floor(breakTime/60)+":"+"0"+breakTime%60);	
	}
	
   }
   }	
   });
   $("#reset").hide();
   
   $("#reset").click(function(){
	count=25;
    breakTime=25;
    $("#display").html(count);	
	$("#displayNum").html(breakTime);
	$("#start, #subClock, #addClock, #subBreak, #addBreak, #displayNum, #display, #sessionTitle, #breakTitle").show();
    $("#reset, #timeType").hide();
   });
   
  //Minus from Session Time
  $("#subClock").click(function(){
	 if(count>5){
	count -=5;
	$("#display").html(count);	
	}
  });
  
  // Adds to Session Time
  $("#addClock").click(function(){	 
	count +=5;
	$("#display").html(count);	
  });
  
  //Minus from the Break Time
  $("#subBreak").click(function(){
	if(breakTime>5){
	breakTime -=5;
	$("#displayNum").html(breakTime);
   }
  });
  
  //Adds to Break Time
  $("#addBreak").click(function(){
	breakTime +=5;
	$("#displayNum").html(breakTime);
  });
  
  
  
  
  
  
});