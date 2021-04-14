let lastOperand = 0;
let operation = null;

const display = document.getElementById('display');
const inputWindow = document.getElementById('inputWindow');

function number(n){return document.getElementById('btn_'+n).addEventListener('click', function () {
    inputWindow.value = parseInt(inputWindow.value+=n, 10)
    });
}

function action(nameAction, value){return document.getElementById('btn_'+nameAction).addEventListener('click', function () {
    lastOperand = (nameAction == 'clr') ? 0 : parseFloat(inputWindow.value);
    operation = (nameAction == 'clr') ? null : nameAction;
    let displayAction;
    if (value === 1) {
        displayAction = "sqrt("+ lastOperand+")";
    }else if(value === 2){
        displayAction = lastOperand/10;
    }else if(value === 3){
        displayAction = -lastOperand;
    } else {
        displayAction = 0;
    }
   
    inputWindow.value = displayAction;
    });
}

number (0);
number (1);
number (2);
number (3);
number (4);
number (5);
number (6);
number (7);
number (8);
number (9);

action ('clr', 0);
action ('plus', 0);
action ('minus', 0);
action ('times', 0);
action ('divide', 0);
action ('root', 1);
action ('realNumber', 2);
action ('minusNumber', 3);

document.getElementById('btn_calc').addEventListener('click', function () {
    	if (operation === "plus"){
	    	const result1= lastOperand + "+" + parseFloat(inputWindow.value);
	    	const result= lastOperand + parseFloat(inputWindow.value);
	    	operation - null;
	    	lastOperand = 0;
	    	inputWindow.value = result;	
	    	display.value = result1+ "=" + result;
	    }
    	if (operation === "minus"){
	    	const result1= lastOperand + "-" + parseFloat(inputWindow.value);
	    	const result= lastOperand - parseFloat(inputWindow.value);
	    	operation - null;
	    	lastOperand = 0;
	    	inputWindow.value = result;
			display.value = result1+ "=" + result;
	    }
    	if (operation === "times"){
    		const result1= lastOperand + "*" + parseFloat(inputWindow.value);
	    	const result= lastOperand * parseFloat(inputWindow.value);
	    	operation - null;
	    	lastOperand = 0;
	    	inputWindow.value = result;
			display.value = result1+ "=" + result;	    }
    	if (operation === "divide"){
    		const result1= lastOperand + "/" + parseFloat(inputWindow.value);
	    	const result= lastOperand / parseFloat(inputWindow.value);
	    	operation - null;
	    	lastOperand = 0;
	    	inputWindow.value = result;
	    	display.value = result1+ "=" + result;
	    }
    	if (operation === "root"){
    		const result1="sqrt("+ lastOperand+")";
	    	const result= Math.sqrt(lastOperand);
	    	operation - null;
	    	lastOperand = 0;
	    	inputWindow.value = result;
	    	display.value = result1+ "=" + result;
	    }   
});