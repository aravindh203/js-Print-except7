var length=100;

function printNumbers(numberLength){
	user:for(i=0;i<numberLength;i++){
		var number=i;
		var newNumber=i;
		for(j=0;number!=0;j++){
			var seperate=number%10;
			var number=(number-seperate)/10;
			if(seperate==7){
				continue user;
			}
		}
		if(newNumber%7!=0){
			console.log(i)
		}
	}
}

printNumbers(length)