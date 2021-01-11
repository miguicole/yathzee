let arrayDados = [];
// numero al azar entre el 1 - 6
function dadoRandom(){
	return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

function tiradaDados(){
	for(var i = 1; i<=5;i++){
		var dado = dadoRandom();
		var img = $('<img />', { 
  			class: dado, //para saber el numero
  			src: ("img/" + (dado.toString()) + ".png")
			});
		img.addClass("dado");//para los estilos
		img.appendTo($('#div2'));
	}

}
$(document).ready(function() {
    $("#lanzadado").click(function(){
    	$('#div2').empty();
    	tiradaDados();
    });
    $('body').on('click','img',function(){
    	var dadoGuardado = this;
    	//$('#div3').append("<img class='" + this.attr("class") + "' src='img/2.png'>");
    	console.log(this.getClass());
    	this.remove();
    });
});
//tiradaDados();