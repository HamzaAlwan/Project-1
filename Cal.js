$( document ).ready(function() {
function calculator (){
  var result = {}

  result.sum = sum;
  result.subtraction = subtraction;
  result.multi = multi;
  result.divide = divide;
  result.module = module;
  result.square = square;
  result.squareRoot = squareRoot;
  result.negate = negate;

  return result
}

this.sum = function (a, b){
	return a + b;
}

this.subtraction = function (a, b){
	return a - b;
}

this.multi = function (a, b){
	return a * b;
}

this.divide = function (a, b){
	return a / b;
}

this.module = function (a, b){
	return a % b;
}

this.square = function (a){
	return a ** 2;
}

this.squareRoot = function (a){
	return Math.sqrt(a);
}

this.negate = function (a){
	if (a > 0){
		return -a;
	}if (a < 0){
		return -a;
	}
	return 0;
}

this.clearAll = function (a){
	return 0
}

var a = $("#a").val()
});




