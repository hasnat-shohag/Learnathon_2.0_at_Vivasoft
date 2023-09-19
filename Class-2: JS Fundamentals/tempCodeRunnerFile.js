var hoistingIntro = "Hi there, I am a string one.";
 
function hoistingFunc() {
	console.log(hoistingIntro); // Undefined Why?
	var hoistingIntro = "Hi there, I am a string two";
	console.log(hoistingIntro);
}
 
hoistingFunc();