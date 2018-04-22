function search(str, mass){
	for(i=0;i<mass.length;i++){
		var massLowerCase = mass[i].toLowerCase();
		var strLowerCase = str.toLowerCase();
		if (massLowerCase == strLowerCase) return true
	}
	return false
}
console.log(search("june", ["june", "jule", "august"]));
console.log(search("June", ["june", "jule", "august"]));
console.log(search("june", ["June", "jule", "august"]));
console.log(search("may", ["june", "jule", "august"]));