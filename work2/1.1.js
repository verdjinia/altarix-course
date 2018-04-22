function calc(arg1,arg2,operator){
	if (isNaN(arg1) && isNaN(arg2)) {
		return "Необходимо ввести числа!"
	}
	if(arguments.length != 3) {
		return "Передано неверное количество аргументов!"
	}
	switch (operator){
		case "+":
			return arg1+arg2;
		case "-":
			return arg1-arg2;
		case "*":
			return arg1*arg2;
		case "/":
			if(arg2 != 0) {
				return arg1/arg2;
			}
		else{
			return "На ноль делить нельзя"
		}
	}
}
console.log(calc(3,4,'+'));
console.log(calc(100,0,'/'));
console.log(calc('лес','вода','*'));
console.log(calc(100,0));