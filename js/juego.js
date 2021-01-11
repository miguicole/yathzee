let arrayDados = [];
// numero al azar entre el 1 - 6
function dadoRandom(){
	return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

function tiradaDados(){
	for(var i = 1; i<=5;i++){
		var dado = dadoRandom();
		var img = $('<img />', { 
  			class: dado,
  			src: ("img/" + (dado.toString()) + ".png")
			});
		img.addClass("dado");
		img.appendTo($('#div2'));
	}

}
$(document).ready(function() {
    $("#lanzadado").click(function(){
    	tiradaDados();
    });
});
//tiradaDados();