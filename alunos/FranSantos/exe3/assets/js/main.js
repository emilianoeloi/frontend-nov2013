window.onload = function(){ //para função só executar depois da página carregada

		//Criando a div na tela e colocando uma classe nela
		cont_two = document.getElementById('cont_two');

		contentTopicos = document.createElement('ul');
		contentTopicos.setAttribute('class', 'content_topicos');
		cont_two.appendChild(contentTopicos);

		//Criando um elemnto na tela que será repetido de acordo com a quantidade de conteúdo
		var topico;
		var teste
		
		topico = ["<span class='item-topico-link'>RECORTE</span><br/><img src='assets/img/ico_estrela.jpg' alt='ícone estrela' /><a href=''>Photshop: o companheiro inseparável</a>",
				 "<span class='item-topico-link'>HTML5</span><span class='item-topico-link-verde'> [ CONTEÚDO ]</span><br/><a href=''>Novas tags e recursos para produzir páginas web</a>",
				 "<span class='item-topico-link'>CSS3</span><span class='item-topico-link-red'> [ FORMATAÇÃO ]</span><br/><a href=''>Diminuindo o trabalho do javascript com layout</a>",
				 "<span class='item-topico-link'>JAVASCRIPT</span><span class='item-topico-link-verde'> [ PROGRAMAÇÃO ]</span><br/><a href=''>Linguagem fundamental e soberana nos navegadores web </a>",];

		for (var i = 0; i < topico.length; i++){
			 var itemTopico = document.createElement("li");
		 	itemTopico.setAttribute('class', 'item-topico');
		 	contentTopicos.appendChild(itemTopico);
		 	itemTopico.innerHTML = topico[i];
			 
		 } 


		
}


