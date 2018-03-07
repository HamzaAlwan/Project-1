var input = []
$( document ).ready(function() {

$("#b1").on("click", function(){
	for(i=0; i<3 ; i++){
		if (i === 0){
		  var veg = prompt("Are you a Vegetarian? 'Yes' or 'No' ")
		  if (veg.toLowerCase() === "yes" || veg.toLowerCase() === "no"){
		  	input.push(veg)
		  } else { i = i - 1 }
		}
		if (i === 1){
		  var hev = prompt("'heavy' or 'light' Meal ?")
		  if (hev.toLowerCase() === "heavy" || hev.toLowerCase() === "light"){
		  	input.push(hev)
		  } else {i = i - 1}
		}
		if (i === 2){
		  var timeFrame = prompt("What Meal_time is it? 'Breakfast', 'Lunch', 'Dinner'")
		  if (timeFrame.toLowerCase() === "breakfast" || timeFrame.toLowerCase() === "lunch" || timeFrame.toLowerCase() === "dinner"){
		  	input.push(timeFrame)
		  } else {i = i - 1}	  
		}
	}
	return select();
});



function select(){
	var dish1 = ""
	var recipe1 = ""
	var dish2 = ""
	var recipe2 = ""
	for(i=0; i<library.length ; i++){

	  		if( library[i].vegeterianOrNot.toLowerCase() === input[0].toLowerCase() && library[i].heavyOrLight.toLowerCase() === input[1].toLowerCase() && library[i].time.toLowerCase() === input[2].toLowerCase()){
	  			 if (dish1.length === 0){
	  			 dish1 = library[i].name 
	  			 recipe1 =  library[i].recipe
	  			 } else { dish2 = library[i].name
	  			 	recipe2 = library[i].recipe
	  			 } 
	  		} 		   
	}
	input = []
	$("h4").text("Your Recipe :")
	$("#D1").text(dish1.toUpperCase())
	$("#R1").text(recipe1)
	$("#D2").text(dish2.toUpperCase())
	$("#R2").text(recipe2)
	return ;
}

var library=[{
	name: "VEGO DE LAPORE BREAKFASTO",
	time: "breakfast",
	vegeterianOrNot: "yes",
	heavyOrLight: "heavy",
	imgAddress: "",
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
	imgAddress: "",
	recipe: "Egyption Fooool Mudamas, Lemmon, Tomato, garlic, egg, mix all ingrediants togather and wallaaaaaa"
	},
	{
	name: "LIGHTO VEGA LA FASTO",
	time: "breakfast",
	vegeterianOrNot: "yes",
	heavyOrLight: "light",
	imgAddress: "",
	recipe: "its nothing important, just bring a dark loaf bread and put some honey inside, and you will dance flamingo like a BOSS"
	},
	{
	name: "TABOOLEH WITH JAPANEESE RICE",
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
	name: "HOTDOGS",
	time: "breakfast",
	vegeterianOrNot: "no",
	heavyOrLight: "heavy",
	imgAddress: "",
	recipe: "Hotdog is a very famous dish, you can buy one from any resturant around you, or just google it."
	},
	{
	name: "MANSAF",
	time: "lunch",
	vegeterianOrNot: "no",
	heavyOrLight: "heavy",
	imgAddress: "",
	recipe: "If you were in Jordan, and it was Friday, knock any door and ask them if you can share MANSAF with them."
	},
	{
	name: "KUBBA WITH FRENCH-FRIES",
	time: "dinner",
	vegeterianOrNot: "no",
	heavyOrLight: "heavy",
	imgAddress: "",
	recipe: "Go to any mall, buy Nabeel KUBBA and follow the instruction on the bag."
	},
	{
	name: "EGGS WITH ORANGE JUICE",
	time: "breakfast",
	vegeterianOrNot: "no",
	heavyOrLight: "light",
	imgAddress: "",
	recipe: "When you wake up just wash your face, dont't brush your teeth, go directly to the kitchen, boil an egg, prepare a loaf of bread, prepare the juice. Eat them then brush your teeth. PS: belive me you will help humanity"
	},
	{
	name: "ITADAKIMASU FISH",
	time: "lunch",
	vegeterianOrNot: "no",
	heavyOrLight: "light",
	imgAddress: "",
	recipe: "Go to the same mall, insted of buying from Nabeel, buy a fish, google how to cook it, follow the instructions and give it to the neighbours."
	},
	{
	name: "SHEEP OF HOMOS",
	time: "dinner",
	vegeterianOrNot: "no",
	heavyOrLight: "light",
	imgAddress: "",
	recipe: "It's not cheap, it has alot of choped sheeps meat with spices, put it on HOMOS and have fun, when you finish say: 'GOD BLESS THAT SHEEP'."
	},

];


$("#b2").on("click", function(){

	var res='';

	for(i=0; i<5 ; i++){
		if (i === 0){
		  var name = prompt("What is the Name of this meal?") 
		}
		if (i === 1){
		  var time = prompt("When do you eat it? 'Breakfast', 'Lunch', 'Dinner'")
		}
		if (i === 2){
		  var vegeterianOrNot = prompt("Is it a vegetarian meal? 'Yes' or 'No' ")
		}
		if (i === 3){
		  var heavyOrLight= prompt("Is it a 'heavy' or a 'light' Meal ?") 
		}
		if (i === 4){
		  var recipe= prompt("What is the recipe?") 
		  	alert("Thanks!!!")

		}

	}
return addRecipe(name, time, vegeterianOrNot, heavyOrLight, recipe);
});







function addRecipe(name, time, vegeterianOrNot, heavyOrLight, recipe){
	library.push({
 		name : name,
		time : time,
		vegeterianOrNot : vegeterianOrNot,
		heavyOrLight : heavyOrLight,
		recipe : recipe
 	});
 	return "done!";
}
	

$("#n").on('click', function(){
	alert("Contact us \n E-mail : RBK@Foody.com \n Phone-Number : 0788839964 \n Address : Jordan,  Amman,  Khalda,  RBK Headquarter.")
})











});