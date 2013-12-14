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
html.innerHTML = 'Novas tags e recursos para produzir páginas WEB</br>';
var css = document.createElement('a');
css.setAttribute('href', '//www.google.com');
css.setAttribute('name', 'Novas Tags');
css.innerHTML = 'Diminuindo o trabalho do javascript com Layout</br>';
var js = document.createElement('a');
js.setAttribute('href', '//www.google.com');
js.setAttribute('name', 'Novas Tags');
js.innerHTML = 'Linguagem fundamental e soberana nos navegadores WEB</br>';
var recorte = document.createElement('a');
recorte.setAttribute('href', '//www.google.com');
recorte.setAttribute('name', 'Novas Tags');
recorte.innerHTML = '<img src="./assets/img/iconeEstrela.png" style="width: 15"></img>Photoshop o companheiro Inseparável</br>';

var recortet = document.createElement('label');
recortet.setAttribute('name', 'Recorte');
recortet.setAttribute('class', 'ex1');
recortet.innerHTML = 'Recorte';

var htmlt = document.createElement('label');
htmlt.setAttribute('name', 'html');
htmlt.setAttribute('class', 'ex1');
htmlt.innerHTML = 'HTML5 <span class="verde">[Conteudo]</span>';

var csst = document.createElement('label');
csst.setAttribute('name', 'css');
csst.setAttribute('class', 'ex1');
csst.innerHTML = 'CSS <span class="vermelho">[Estilo]</span>';

var jst = document.createElement('label');
jst.setAttribute('name', 'js');
jst.setAttribute('class', 'ex1');
jst.innerHTML = 'Java Script <span class="verde">[Programação]</span>';

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
document.getElementById('container').appendChild(tela);
//document.body.appendChild(tela);