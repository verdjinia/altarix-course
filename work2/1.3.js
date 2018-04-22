function formatting(str) {
	var strlength = str.indexOf('.');
	var strformat = strlength === -1 ? str : str.slice(0, strlength);
	for (var i = strformat.length - 3; i > 0; i -= 3)
		strformat = strformat.slice(0, i) + ' ' + strformat.slice(i);
	if (strlength !== -1){
		test=str.slice(strlength).substr(0,3);
		strformat += test;
	}
	return strformat;
}
console.log(formatting('1234567890.56984'));
console.log(formatting('-1234567890.56984'));
console.log(formatting('1234567890'));
console.log(formatting('fffffffffff'));