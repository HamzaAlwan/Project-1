var input = []
$( document ).ready(function() {

$("#b1").on("click", function(){
	for(i=0; i<3 ; i++){
		if (i === 0){
		  var veg = prompt("Are you a Vegetarian? 'Yes' or 'No' ")
		  input.push(veg)
		}
		if (i === 1){
		  var hev = prompt("'heavy' or 'light' Meal ?")
		  input.push(hev)
		}
		if (i === 1){
		  var timeFrame = prompt("What Meal_time is it? 'Breakfast', 'Lunch', 'Dinner'")
		  input.push(timeFrame)
		}
	}
	return select();
});



function select(){
	var me = ""
	var you=""
	for(i=0; i<library.length ; i++){

	  		if( library[i].vegeterianOrNot.toLowerCase() === input[0].toLowerCase() && library[i].heavyOrLight.toLowerCase() === input[1].toLowerCase() && library[i].time.toLowerCase() === input[2].toLowerCase()){
	  			 me= library[i].name 
	  			 you=  library[i].recipe
	  		} 		   
	}
	input = []
	$("h4").text("Your Recipe")
	$("h2").text(me)
	$("#result").text(you)
	return ;
}

var library=[{
	name: "VEGO DE LAPORE BREAKFASTO",
	time: "breakfast",
	vegeterianOrNot: "yes",
	heavyOrLight: "heavy",
	imgAddress: $,
	recipe: "Hommos, Mutabal, French bread. Put some olive oil on both Hommos and Mutabal and start eating like a BOSS. "
	},
	{
	name: "MEXICAN BREAKFAST BURRITOS",
	time: "lunch",
	vegeterianOrNot: "yes",
	heavyOrLight: "heavy",
	imgAddress: "https://hurrythefoodup.com/wp-content/uploads/2016/01/3.-Easy-Vegan-Mexican-Breakfast-Burritos-18-vegetarian-lunch-ideas.jpg",
	recipe: "Call me, I will not answer, Add all the Tomatos then put all the Spices, use BURRITOS with katchup, add salt as a pro and wallaaaaaa."
	},
	{
	name: " MOONO VEGA DE LABORE  ",
	time: "dinner",
	vegeterianOrNot: "yes", 
	heavyOrLight: "heavy",
	imgAddress: $,
	recipe: "Egyption Fooool Mudamas, Lemmon, Tomato, garlic, egg, mix all ingrediants togather and wallaaaaaa"
	},
	{
	name: "lighto vega la fasto",
	time: "breakfast",
	vegeterianOrNot: "yes",
	heavyOrLight: "light",
	imgAddress: "",
	recipe: "its nothing important, just bring a dark loaf bread and put some honey inside, and you will dance flamingo like a BOSS"
	},
	{
	name: "Tabooleh with japaneese rice",
	time: "lunch",
	vegeterianOrNot: "yes",
	heavyOrLight: "light",
	imgAddress: "https://cookin5m2.files.wordpress.com/2014/10/sri-lanka-unawatuna-2014-72.jpg",
	recipe: "go to your Labannese Neighbour, bring him with you to the kithchen, close the kitchen door for 5 min, and u will have the best Tabooleh."
	},
	{
	name: "DINVEG LIGHTS",
	time: "dinner",
	vegeterianOrNot: "yes",
	heavyOrLight: "light",
	imgAddress: "",
	recipe: "Hommos, Mutabal, dark bread. Put some olive oil on both Hommos and Mutabal and start eating like a BOSS."
	},
	{
	name: "",
	time: "",
	vegeterianOrNot: "",
	heavyOrLight: "",
	imgAddress: "",
	recipe: ""
	},
	{
	name: "",
	time: "",
	vegeterianOrNot: "",
	heavyOrLight: "",
	imgAddress: "",
	recipe: ""
	},
	{
	name: "",
	time: "",
	vegeterianOrNot: "",
	heavyOrLight: "",
	imgAddress: "",
	recipe: ""
	},
	{
	name: "",
	time: "",
	vegeterianOrNot: "",
	heavyOrLight: "",
	imgAddress: "",
	recipe: ""
	},
	{
	name: "",
	time: "",
	vegeterianOrNot: "",
	heavyOrLight: "",
	imgAddress: "",
	recipe: ""
	},
	{
	name: "",
	time: "",
	vegeterianOrNot: "",
	heavyOrLight: "",
	imgAddress: "",
	recipe: ""
	},

];

function addRecipe(name, time, vegeterianOrNot, heavyOrLight ,imgAddress, recipe){
	library.push({
 		name : name,
		time : time,
		vegeterianOrNot : vegeterianOrNot,
		heavyOrLight : heavyOrLight,
		imgAddress : imgAddress,
		recipe : recipe
 	});
 	return "done!";
}
	













});