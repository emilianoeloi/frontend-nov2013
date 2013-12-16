// quebra
var br = document.createElement('br');
br.setAttribute('clear','all');

// Create contents
var topic = document.createElement('div');
topic.setAttribute('id','topic');

var nome = document.createElement('span');
nome.setAttribute('id','nome');
nome.textContent = "RECORTE";
topic.appendChild(nome);

topic.appendChild(br);

var link = document.createElement('a');
link.setAttribute('href','http://www.w3schools.com/html/html5_intro.asp');
link.textContent = 'Photoshop: o companheiro inseparável.';
topic.appendChild(link);

// Add contents
$(".right").append(topic);

// quebra
var br = document.createElement('br');
br.setAttribute('clear','all');

var topic = document.createElement('div');
topic.setAttribute('id','topic');

var nome = document.createElement('span');
nome.setAttribute('id','nome');
nome.textContent = "HTML5";
topic.appendChild(nome);

var tipo = document.createElement('span');
tipo.setAttribute('id','tipo1');
tipo.textContent = "[CONTEÚDO]";
topic.appendChild(tipo);

topic.appendChild(br);

var link = document.createElement('a');
link.setAttribute('href','http://www.w3schools.com/html/html5_intro.asp');
link.textContent = 'Novas tags e recursos para produzir páginas Web.';
topic.appendChild(link);

// Add contents
$(".right").append(topic);

// quebra
var br = document.createElement('br');
br.setAttribute('clear','all');

var topic = document.createElement('div');
topic.setAttribute('id','topic');

var nome = document.createElement('span');
nome.setAttribute('id','nome');
nome.textContent = "CSS3";
topic.appendChild(nome);

var tipo = document.createElement('span');
tipo.setAttribute('id','tipo2');
tipo.textContent = "[FORMATAÇÃO]";
topic.appendChild(tipo);

topic.appendChild(br);

var link = document.createElement('a');
link.setAttribute('href','http://www.w3schools.com/css/css3_intro.asp');
link.textContent = 'Diminuição do trabalho do JavaScript com o layout.';
topic.appendChild(link);

// Add contents
$(".right").append(topic);

// quebra
var br = document.createElement('br');
br.setAttribute('clear','all');

var topic = document.createElement('div');
topic.setAttribute('id','topic');

var nome = document.createElement('span');
nome.setAttribute('id','nome');
nome.textContent = "JavaScript";
topic.appendChild(nome);

var tipo = document.createElement('span');
tipo.setAttribute('id','tipo3');
tipo.textContent = "[PROGRAMAÇÃO]";
topic.appendChild(tipo);

topic.appendChild(br);

var link = document.createElement('a');
link.setAttribute('href','http://www.w3schools.com/js/default.asp');
link.textContent = 'Linguagem Fundamental e soberana nos navegadores web.';
topic.appendChild(link);

// Add contents
$(".right").append(topic);
