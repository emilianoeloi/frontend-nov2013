 
 var quebra = document.createElement('quebra');
 var quebra1 = document.createElement('quebra');
 var quebra2 = document.createElement('quebra');
 var quebra3 = document.createElement('quebra');
 var quebra4 = document.createElement('quebra');
 var quebra5 = document.createElement('quebra');
 var quebra6 = document.createElement('quebra');
 var quebra7 = document.createElement('quebra');

 var content = document.createElement('div');
 content.setAttribute('id', 'content');

 var html5 = document.createElement('a');
 html5.setAttribute('href', '#');
 html5.innerText = "Novas tags e recursos para produzir páginas WEB";

 var css3 = document.createElement('a');
 css3.setAttribute('href', '#');
 css3.innerText = "Diminuindo o trabalho do JavaScript com Layout";

 var javascript = document.createElement('a');
 javascript.setAttribute('href', '#');
 javascript.innerText = "Linguagem fundamental e soberana nos navegadores WEB";

 var recorte = document.createElement('a');
 recorte.setAttribute('href', '#');
 recorte.innerText = "Photoshop: O Companheiro Inseparável";
 
 var tituloRecorte = document.createElement('label');
 tituloRecorte.setAttribute('class', 'titulo');
 tituloRecorte.innerText = "Recorte";
 
 var tituloHtml = document.createElement('label');
 tituloHtml.setAttribute('class', 'titulo');
 tituloHtml.innerText = "HTML5 [Conteúdo]";
 
 var tituloCss = document.createElement('label');
 tituloCss.setAttribute('class', 'titulo');
 tituloCss.innerText = "CSS [ESTILO]";
 
 var tituloJavascript = document.createElement('label');
 tituloJavascript.setAttribute('class', 'titulo');
 tituloJavascript.innerText = "Java Script Programação";
 
 content.appendChild(tituloRecorte);
 content.appendChild(quebra6);
 content.appendChild(recorte);
 content.appendChild(quebra2);
 content.appendChild(tituloHtml);
 content.appendChild(quebra3);
 content.appendChild(html);
 content.appendChild(quebra4);
 content.appendChild(tituloCss);
 content.appendChild(quebra);
 content.appendChild(css);
 content.appendChild(quebra5);
 content.appendChild(tituloJavascript);
 content.appendChild(quebra1);
 content.appendChild(js);
 document.body.appendChild(content);