function insert (num){
	document.from.hasil.value =document.from.hasil.value+num;
}

function equal(){
	const exp = document.from.hasil.value;
	if(exp){
		document.from.hasil.value = eval(exp);
	}
}

function clean(){
	document.from.hasil.value = '';
}

function back(){
	const exp = document.from.hasil.value;
	document.from.hasil.value = exp.substring(0,exp.length-1);
}