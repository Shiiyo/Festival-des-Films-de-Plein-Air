$(function() {

	//On gère le scroll vers les différentes sections du site
	$(".scroll").click(function(){
		var section = $("." + this.id);
		$("html,body").animate({scrollTop: section.offset().top}, 'slow');
	});

	//Affichage menu responsive écran smartphone (<992px)
	$(".navbar-responsive").toggle(); //Cache le menu des smartphones

	$(".menu").click(function () //Lorsque l'on clique sur le menu responsive
	{
		$(".navbar-responsive").toggle("slow"); //Affiche/Cache le menu de façon progressive
	});

});