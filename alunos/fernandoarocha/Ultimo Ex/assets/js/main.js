var br = document.createElement('br');
var br1 = document.createElement('br');
var br2 = document.createElement('br');
var br3 = document.createElement('br');
var br4 = document.createElement('br');
var br5 = document.createElement('br');
var br6 = document.createElement('br');
var br7 = document.createElement('br');

var tela = document.createElement('div');
tela.setAttribute('class', 'txt ex p');
tela.setAttribute('id', 'tela')
var html = document.createElement('a');
html.setAttribute('href', '//www.google.com');
html.setAttribute('name', 'Novas Tags');
html.innerText = "Novas tags e recursos para produzir páginas WEB";
var css = document.createElement('a');
css.setAttribute('href', '//www.google.com');
css.setAttribute('name', 'Novas Tags');
css.innerText = "Diminuindo o trabalho do javascript com Layout";
var js = document.createElement('a');
js.setAttribute('href', '//www.google.com');
js.setAttribute('name', 'Novas Tags');
js.innerText = "Linguagem fundamental e soberana nos navegadores WEB";
var recorte = document.createElement('a');
recorte.setAttribute('href', '//www.google.com');
recorte.setAttribute('name', 'Novas Tags');
recorte.innerText = "Photoshop o companheiro Inseparável";

var recortet = document.createElement('label');
recortet.setAttribute('name', 'Recorte');
recortet.setAttribute('class', 'ex1');
recortet.innerText = "Recorte";

var htmlt = document.createElement('label');
htmlt.setAttribute('name', 'html');
htmlt.setAttribute('class', 'ex1');
htmlt.innerText = "HTML5 [Conteudo]";

var csst = document.createElement('label');
csst.setAttribute('name', 'css');
csst.setAttribute('class', 'ex1');
csst.innerText = "CSS [ESTILO]";

var jst = document.createElement('label');
jst.setAttribute('name', 'js');
jst.setAttribute('class', 'ex1');
jst.innerText = "Java Script Programação";

tela.appendChild(recortet);
tela.appendChild(br6);
tela.appendChild(recorte);
tela.appendChild(br2);
tela.appendChild(htmlt);
tela.appendChild(br3);
tela.appendChild(html);
tela.appendChild(br4);
tela.appendChild(csst);
tela.appendChild(br);
tela.appendChild(css);
tela.appendChild(br5);
tela.appendChild(jst);
tela.appendChild(br1);
tela.appendChild(js);
document.body.appendChild(tela);