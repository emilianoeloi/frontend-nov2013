
$(function(){
	console.log('pageview carregado');
	console.timeEnd('tempoCarregamento');

	// Date picker
	$( "#data-nascimento" ).datepicker();

	//auto complete
	$(function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#linguagens" ).autocomplete({
      source: availableTags
    });
  });
});

///click no menu

$("#nav a").bind("click",function(){
	// console.log("clicked!",$(this).parent());
	// retirar destaque dos menus
	$("#nav li").each(function(i){
		$(this).removeClass("current");
	});
	$(this).parent().addClass("current");
});

// obterJson
$("#obterJson").bind("click",function(){
	var idFacebook = $("#facebook").val();
	$.getJSON('http://graph.facebook.com/' + idFacebook, function(data){
		console.log(data);
			$("#textoPerfil .msg").text("Usuário encontrado!");
			$("#textoPerfil .msg").removeClass("msg_red").addClass("msg_green");


			$("#textoPerfil .nome").text(data.first_name);
			$("#textoPerfil .sobrenome").text(data.last_name);
			if (data.username == undefined || data.link == undefined){
				$("#textoPerfil .link").hide();
			}else{
				$("#textoPerfil .link").show();
				$("#textoPerfil .link").text(data.username);
				$("#textoPerfil .link").attr("href",data.link);		
			}
			$(".link-teste:last").after('| <a class="link-teste" href="javascript://">JavaScript</a>');
	}).error(function(data){
		$("link-teste").hide();
		$("#textoPerfil .msg").text("Usuário não encontrado!");
		$("#textoPerfil .msg").removeClass("msg_green").addClass("msg_red");
	});
});

// click no link

$(document).on("click",".link-teste",function(){
	console.log("link click!",$(this).text());
});