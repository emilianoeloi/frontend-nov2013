//funções
function soma(p1,p2) {
	console.log(p1+p2);
}

function subtracao(p1,p2) {
	console.log(p1-p2);
}

function multiplicacao(p1,p2) {
	console.log(p1*p2);
}

function divisao(p1,p2) {
	console.log(p1/p2);
}

//numeros
var num1 = document.querySelector("#primeiro-numero");
var num2 = document.getElementById("segundo-numero");

//página carregada
window.onload = function() {
	btnSomar = document.getElementById("soma");
	btnSomar.onclick = function() {
		soma(parseFloat(num1.value),parseFloat(num2.value));
	}
	btnSub = document.getElementById("sub");
	btnSub.onclick = function() {
		subtracao(parseFloat(num1.value),parseFloat(num2.value));
	}
	btnMult = document.getElementById("mult");
	btnMult.onclick = function() {
		multiplicacao(parseFloat(num1.value),parseFloat(num2.value));
	}
	btnDiv = document.getElementById("div");
	btnDiv.onclick = function() {
		divisao(parseFloat(num1.value),parseFloat(num2.value).toFixed(3));
	}
}