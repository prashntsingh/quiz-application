function myCheck()
{ 
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	
	var correct=0;

	if (question1=="Delhi") {
		correct++;

	}
	if (question2=="Lucknow") {
		correct++;
	}

if (question3=="Banglore") {
	correct++;
}



var message=["Great Job","good","bad"];
var pictures=["gify/goodjob.gif","gify/good.gif","gify/loosee.gif"];
var range;

if (correct<1) {
	range=2;
}

if (correct>0 && correct<3) {
	range=1;
}

if (correct>2) {
	range=0;
}
document.getElementById("message").innerHTML=message[range];
document.getElementById('number_correct').innerHTML= "you got"+" "+  correct +" "+ " correct answers";
document.getElementById("picture").src=pictures[range];

document.getElementById('after_sub').style.visibility="visible";


}




