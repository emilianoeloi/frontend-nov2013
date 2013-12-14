/// Funções

var visorAtual = "";
var primeiroNumero = 0;
var operacaoAtual = "";
var segundoNumero = 0;

function calcular (valor) {
	if(!isNaN(valor)) {
		visorAtual = visorAtual + valor;
	} else if (valor == '=') {
		segundoNumero = visorAtual;
		select_oper();
	} else {
		primeiroNumero = visorAtual;
		operacaoAtual = valor;
		visorAtual = "";
	}
	jQuery(".calc-visor").text(visorAtual);
}

function select_oper() {
	var resultado = 0;
	switch(operacaoAtual) {
		case '+':
			visorAtual = somar(primeiroNumero,segundoNumero);
			break;

		case '-':
			visorAtual = subtrair(primeiroNumero,segundoNumero);
			break;

		case '*':
			visorAtual = multiplicar(primeiroNumero,segundoNumero);
			break;

		case '/':
			visorAtual = dividir(primeiroNumero,segundoNumero);
			break;

		default:
			break;
	}
}


function desenharCalculadora () {
	var calculadora,
	    visor,
		numeros,
		botoes, 
		operacoes,
		br;

	calculadora = document.createElement('div');
	calculadora.setAttribute('class','calculadora');
	
	botoes = ['1','2','3','+','4','5','6','-','7','8','9','*','c','0','=','/'];

	//criar visor e incluir no elemento calculadora

	visor = document.createElement('div');
	visor.setAttribute('class','calc-visor');
	calculadora.appendChild(visor);

	//percorrer botões
	for (var i = 0; i < botoes.length; i++) {
		var btn = document.createElement('div');
		btn.innerText = botoes[i];
		btn.setAttribute('class','calc-btn');
		calculadora.appendChild(btn);
	};

	//quebra
	br = document.createElement('br');
	br.setAttribute('clear','all');
	calculadora.appendChild(br);

	//colocar na tela
	document.body.appendChild(calculadora);

	//colocar evento de clique
	jQuery('.calc-btn').bind('click',function(){
		value = jQuery(this).text();
		if (isNaN(value)) {
			calcular(value);
		} else {
			if (visorAtual.toString().length < 12) {
				calcular(value);
			}
		}
	});
}
''
function somar(p1, p2){
    var resultado = parseFloat(p1) + parseFloat(p2);
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

var visor;
visor = document.getElementById('visor');

var visor2 = document.createElement('div');
visor2.setAttribute('id','visor2');
visor2.text="texto";

/// Ao carregar a página
window.onload = function(){

    btnSomar = document.getElementById('btn-somar');
    btnSubtrair = document.getElementById('btn-subtrair');
    btnMultiplicar = document.getElementById('btn-multiplicar');
    btnDividir = document.getElementById('btn-dividir');

    btnSomar.onclick = function(){
            resultado.value = somar(parseFloat(num1.value), parseFloat(num2.value));
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

	desenharCalculadora();
}



/*
Inserir um elemento na tela
var visor2 = document.createElement('div');
visor2.setAttribute('id','visor2');
visor2.innerText="texto";
document.body.appendChild(visor2);*/