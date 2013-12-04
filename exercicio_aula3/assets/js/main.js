/// Funções
function somar(p1, p2){
	var resultado = p1*1 + p2*1;
	console.log('Resultado da soma é', resultado);
	return resultado;
}
function subtrair(p1, p2){
	var resultado = p1 - p2;
	console.log('Resultado da sutração é', resultado);
	return resultado;
}
function multiplicar(p1, p2){
	var resultado = p1 * p2;
	console.log('Resultado da sutração é', resultado);
	return resultado;
}
function dividir(p1, p2){
	var resultado = p1 / p2;
	console.log('Resultado da sutração é', resultado);
	return resultado;
}

/// Variáveis
var num1 = document.getElementById('primeiro-numero');
var num2 = document.getElementById('segundo-numero');
var resultado = document.getElementById('resultado');
var btnSomar, btnSubtrair, btnMultiplicar, btnDividir;

/// Ao carregar a página
window.onload = function(){

	btnSomar = document.getElementById('btn-somar');
	btnSubtrair = document.getElementById('btn-subtrair');
	btnMultiplicar = document.getElementById('btn-multiplicar');
	btnDividir = document.getElementById('btn-dividir');

	btnSomar.onclick = function(){
		resultado.value = somar(num1.value, num2.value);
	}
	btnSubtrair.onclick = function(){
		resultado.value = subtrair(num1.value, num2.value);
	}
	btnMultiplicar.onclick = function(){
		resultado.value = multiplicar(num1.value, num2.value);
	}
	btnDividir.onclick = function(){
		resultado.value = dividir(num1.value, num2.value);
	}
}