var $burguerButton = document.getElementById("burguer-button");
var $menu = document.getElementById("menu");
var $body = document.getElementById("body");

// $("#burguer-button").click(function(event){
// 		console.log(event.type);
// 		$menu.classList.toggle("active");
// 		$burguerButton.classList.toggle("fixed");
// });
var consulta = window.matchMedia("(max-width: 500px)");
consulta.addListener(mediaQuerie);
mediaQuerie();

function toggleMenu(){
	$menu.classList.toggle("active");
	$body.classList.toggle("opened");

}

function showMenu(){
	$menu.classList.add("active");
	$body.classList.add("opened");
}

function hideMenu(){
	$menu.classList.remove("active");
	$body.classList.toggle("opened");
}

function mediaQuerie(){
	if (consulta.matches){
		console.log("Se cumplio la condicion");
		$burguerButton.style.visibility = "visible";
		$burguerButton.addEventListener("touchstart", toggleMenu);
	}else{
		console.log("No se cumplio la condicion");
		$burguerButton.style.visibility = "hidden";
		$burguerButton.removeEventListener("touchstart", toggleMenu);
	}
}

var bLazy = new Blazy({
// options
	selector: "img"
});

//GESTOS TOUCH
var $body = document.body;

var gestos = new Hammer($body);
gestos.on('swipeleft', hideMenu); 

var gestos = new Hammer($body);
gestos.on('swiperight', showMenu);

// Carga de Fuentes
WebFont.load({
    google: {
      families: ['Poppins', 'Patua One']
    }
  });