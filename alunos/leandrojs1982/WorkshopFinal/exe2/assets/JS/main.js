function desenharConteudo () {
	var conteudo,
		TESTE,
		titulo1,
		paragrafo,
		titulo2,
		subTitulo1,
		subTitulo2,
		subTitulo3,
		subTitulo4,
		linkSub1,
		linkSub2,
		linkSub3,
		linkSub4;
		
	direita = document.createElement('div');
	direita.setAttribute('class','direita');
	document.body.appendChild(direita);
			
	titulo1 = '<h1>DevWeb - front-end</h1>';
	direita.innerHTML += titulo1;

	paragrafo = '<p>Proin ultrices id erat non dapibus. Cras rhoncus feugiat erat ut faucibus. Nulla eget imperdiet lacus, vitae feugiat nibh. Duis rutrum turpis in facilisis pharetra. Duis lobortis, nisi varius dapibus vestibulum, diam dui fringilla magna, sit amet lacinia dolor libero eget ante. Maecenas id dolor et nisi euismod mattis. Morbi cursus lorem eu ullamcorper dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce sit amet turpis eget mauris malesuada dapibus. Maecenas dignissim felis nec nisl aliquet venenatis. Duis at nunc sed libero dignissim auctor. Etiam commodo aliquam augue, a interdum magna interdum non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean fermentum quam erat, vitae rhoncus urna laoreet in.</p>';
	direita.innerHTML += paragrafo;

	titulo2 = '<h2>Para estudar</h2>';
	direita.innerHTML += titulo2;

	subTitulo1 = '<h4>Recorte</h4>';
	direita.innerHTML += subTitulo1;
	linkSub1 = '<img src="assets/img/imagem3.jpg" class="estrela"> <a class="ls" href="index.html">Photoshop: o companheiro inseparável</a>';
	direita.innerHTML +=linkSub1;
	
	subTitulo2 = '<h4>Html5 [conteudo]</h4>';
	direita.innerHTML += subTitulo2;
	linkSub2 = '<a class="lista" href="index.html">Novas tags e recursos para produzir páginas web</a>';
	direita.innerHTML +=linkSub2;
	
	subTitulo3 = '<h4>CSS3 [formatação]</h4>';
	direita.innerHTML += subTitulo3;
	linkSub3 = '<a href="index.html">Diminuindo o trabalho do javascript com layout</a>';
	direita.innerHTML +=linkSub3;
	
	subTitulo4 = '<h4>JAVASCRIPT [Programação]</h4>';
	direita.innerHTML += subTitulo4;
	linkSub4 = '<a href="index.html">Linguagem fundamental e soberana nos navegadores web</a>';
	direita.innerHTML +=linkSub4;
}

window.onload = function(){

	
	///desenhar conteudo
	desenharConteudo();
}