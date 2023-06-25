
function checkNumber()
{
	var answer = document.getElementById("answer").value;
	var attempt = document.getElementById("attempt").value;
var userInput=document.getElementById("user-input").value;
var msg=document.getElementById("msg");
var results=document.getElementById("results");



console.log(userInput);


if(!answer) {
    answer = generateRandomAnswer();
    document.getElementById("answer").value = answer;
}
    console.log(answer);
  if(!attempt){
  	attemt=0;
  }

if(!validateInput(userInput)){
msg.innerHTML= "<p class='text-danger'>Number Should be 4-digit long </p>";
	return;
}
else{
	msg.innerHTML="";
	attempt++;
  document.getElementById("attempt").value = attempt;
}


//main logic:
/*
Answer=1234
user input=3452
check for each digit in user input:
using loop
*/
var correctDigit=0;
var html='<tr><td>'+ userInput +'</td><td>'
for(let i=0; i<userInput.length; i++){
	if(userInput[i] == answer[i]){
		html=html+ '<i class="fa fa-check"></i>';
		correctDigit++;

		}
	else if(answer.indexOf(userInput[i])>-1) {
		
		html = html+ '<i class="fa fa-exchange"></i>';
	}
	else{

		html= html+ '<i class="fa fa-times"></i>';
	}
}

html=html+'</td></tr>';
results.innerHTML+=html;
if(correctDigit==userInput.length){
	//user is a winner
	msg.innerHTML= "<p class='text-success'>You are a winner</p>";
  document.getElementById("btn-guess").style="display:none;";
   document.getElementById("btn-replay").style="display:block;";
}
else if(attempt>=10){
//stop user from entering any more gueses
	msg.innerHTML= "<p class='text-success'>Sorry,you lost. Please play again to win.</p>";
  document.getElementById("btn-guess").style="display:none;";
  document.getElementById("btn-replay").style="display:block;";
}
else{
	//show user that the input is incorrect
	msg.innerHTML= "<p class='text-primary'>Incorrect input,try again. </p>";
}
}




function generateRandomAnswer(){
	//1000-9999
	//random no. code
	//below will return a random no of 4 digit
	var num= (Math.floor(Math.random() * 8900)+1000).toString();
	return num;
}
function validateInput(str){
	if(str.length==4){
		return true;
	}
	else{
		return false;
	}
};