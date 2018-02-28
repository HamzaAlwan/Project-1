$( document ).ready(function() {
$("#b1").on("click", function(){
	var mealName = prompt("");
	});

var library=[];

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
	
function dish(){
	for(var i=0; i < library.length;i++){
		if( vegeterianOrNot.toLowerCase() === "yes" && heavyOrLight.toLowerCase() === "heavy" && time.toLowerCase() === "breakfast"){
			return 
		}
		if( vegeterianOrNot.toLowerCase() === "yes" && heavyOrLight.toLowerCase() === "heavy" && time.toLowerCase() === "lunch"){
			return 
		}
		if( vegeterianOrNot.toLowerCase() === "yes" && heavyOrLight.toLowerCase() === "heavy" && time.toLowerCase() === "dinner"){
			return 
		} 
		if( vegeterianOrNot.toLowerCase() === "yes" && heavyOrLight.toLowerCase() === "light" && time.toLowerCase() === "breakfast"){
			return 
		}
		if( vegeterianOrNot.toLowerCase() === "yes" && heavyOrLight.toLowerCase() === "light" && time.toLowerCase() === "lunch"){
			return 
		}
		if( vegeterianOrNot.toLowerCase() === "yes" && heavyOrLight.toLowerCase() === "light" && time.toLowerCase() === "dinner"){
			return 
		}
		if( vegeterianOrNot.toLowerCase() === "no" && heavyOrLight.toLowerCase() === "heavy" && time.toLowerCase() === "breakfast"){
			return 
		}
		if( vegeterianOrNot.toLowerCase() === "no" && heavyOrLight.toLowerCase() === "heavy" && time.toLowerCase() === "lunch"){
			return 
		}
		if( vegeterianOrNot.toLowerCase() === "no" && heavyOrLight.toLowerCase() === "heavy" && time.toLowerCase() === "dinner"){
			return 
		}
		if( vegeterianOrNot.toLowerCase() === "no" && heavyOrLight.toLowerCase() === "light" && time.toLowerCase() === "breakfast"){
			return
		}
		if( vegeterianOrNot.toLowerCase() === "no" && heavyOrLight.toLowerCase() === "light" && time.toLowerCase() === "lunch"){
			return
		}
		if( vegeterianOrNot.toLowerCase() === "no" && heavyOrLight.toLowerCase() === "light" && time.toLowerCase() === "dinner"){
			return
		}
			
	}
}	




});