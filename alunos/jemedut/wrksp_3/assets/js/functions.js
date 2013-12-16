
/// Ao carregar a página
window.onload = function(){
	var colunaFlexivel,
		lista,
		itens;
	colunaFlexivel = document.getElementById('colunaFlexivel');
	lista = document.createElement('ul');
	lista.setAttribute('class','lista');
	colunaFlexivel.appendChild(lista);

	itens = ['RECORTE<br/><img src="assets/img/icon.gif" alt="Importante"/><a href="#">Photoshop: o companheiro inseparável</a>',
			'HTML5 [CONTEÚDO]<br/><a href="#">Novas tags e recursos para produzir páginas web</a>',
			'CSS3 [FORMATAÇÃO]<br/><a href="#">Diminuindo o trabalho do javascript com layout</a>',
			'JAVASCRIPT [PROGRAMAÇÃO]<br/><a href="#">Linguagem fundamental e soberana nos navegadores web</a>']

	for(var i = 0; i < itens.length; i++){
		var item = document.createElement('li');
		item.setAttribute('class','itens')
		item.innerHTML = itens[i];
		lista.appendChild(item);
	}
}
