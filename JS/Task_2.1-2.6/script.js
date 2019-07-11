function buttonClick() {
	var x1 = parseInt(document.getElementById('x1').value);
	var x2 = parseInt(document.getElementById('x2').value);	
	// Task 1		
	var node = document.getElementById('result');
		while (node.hasChildNodes()) {
			node.removeChild(node.firstChild);
		}
	//	
	// Task 2
	if(document.getElementById('x1').value == '' || document.getElementById('x2').value == '') {
		alert("Поля X1 и X2 должны быть заполнены!");
	//
	} else if(Number.isNaN(x1) || Number.isNaN(x2)) {
		alert("В поля X1 и X2 должны быть введены числовые значения!");
	} else {		
		if (document.getElementById('r1').checked) {
			//Task 3
			var sum = 0, i, end;
			
			if (x1 < x2) {
				i = x1;
				end = x2;
			} else {
				i = x2;
				end = x1;
			}
			while (i <= end) {
				sum += i;
				i++;
			}
			var resultDiv = document.getElementById('result');	
			resultDiv.append("Сумма чисел от X1 до X2 = " + sum);
			//
		} else if (document.getElementById('r2').checked) {
			// Task 5
			var mult = 1, i, end;
			
			if (x1 < x2) {
				i = x1;
				end = x2;
			} else {
				i = x2;
				end = x1;
			}
			while (i <= end) {
				mult *= i;
				i++;
			}
			var resultDiv = document.getElementById('result');	
			resultDiv.append("Произведение чисел от X1 до X2 = " + mult);
			//
		} else if (document.getElementById('r3').checked) {	
			// Task 6
			var resultDiv = document.getElementById('result');	
			resultDiv.append("Простые числа в промежутке от X1 до X2 = " + searchPrimes(x1, x2));
			//
		}
	}
}

// Task 4
function buttonClick_2(){
	document.getElementById('x1').value = "";
	document.getElementById('x2').value = "";
}
//

// Task 6
function searchPrimes(x1, x2) {
	var i , res = [];
	if(x1 > x2) {
		i = x1;
		x1 = x2;
		x2 = i;
	}
    for(i = x1, check = false; i <= x2; i++, check = true){
        for(var j = 2; j * j <= i; j++){
            if(i % j == 0){
                check = false;
                break;
            }
        }
        if(check)
            res[res.length] = i;
    }
    return res;
}
//