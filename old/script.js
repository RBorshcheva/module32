let lastOperand = 0;
let operation = null;

const display = document.getElementById('display');
const inputWindow = document.getElementById('inputWindow');

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = 0;
});

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value +=0;
    inputWindow.value = parseInt(inputWindow.value, 10);
});

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value +=1;
    inputWindow.value = parseInt(inputWindow.value, 10);
});
document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value +=2;
    inputWindow.value = parseInt(inputWindow.value, 10);
});
document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value +=3;
    inputWindow.value = parseInt(inputWindow.value, 10);
});
document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value +=4;
    inputWindow.value = parseInt(inputWindow.value, 10);
});
document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value +=5;
    inputWindow.value = parseInt(inputWindow.value, 10);
});
document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value +=6;
    inputWindow.value = parseInt(inputWindow.value, 10);
});
document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value +=7;
    inputWindow.value = parseInt(inputWindow.value, 10);
});
document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value +=8;
    inputWindow.value = parseInt(inputWindow.value, 10);
});
document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value +=9;
    inputWindow.value = parseInt(inputWindow.value, 10);
});

document.getElementById('btn_plus').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "plus";
    inputWindow.value = 0;
});
document.getElementById('btn_minus').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "minus";
    inputWindow.value =  0;
});
document.getElementById('btn_times').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "times";
    inputWindow.value = 0;
});
document.getElementById('btn_divide').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "divide";
    inputWindow.value = 0;
});
document.getElementById('btn_root').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "root";
    inputWindow.value = "sqrt("+ lastOperand+")";
 });
document.getElementById('btn_realNumber').addEventListener('click', function () {
 	 lastOperand = parseFloat(inputWindow.value);
    operation = "realNumber";
    inputWindow.value = lastOperand/10; 
 });
document.getElementById('btn_minusNumber').addEventListener('click', function () {
 	 lastOperand = parseFloat(inputWindow.value);
    operation = "minusNumber";
    inputWindow.value = -lastOperand; 
 });

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