$("#link a").bind("click", function(){

	console.log("Clicou no menu!", $(this).parent);
	//Retirar destaque dos menus
	//each parecido como um for
	$("#nav li").each(function(i){
	console.log($(this),i);
	
})
	$(this).parent().addClass("current");
	

});