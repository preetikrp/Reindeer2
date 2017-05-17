
console.log("Hellow")

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");
var text = ""
for (var i = 0; i < reindeer.length; i++){

	//adding ptag to give extra line space
	
	text = "<p>" + colors[i] + " " + reindeer[i] + "</p>";
	console.log(text);
	document.getElementById("reindeer").innerHTML+= text;

}








