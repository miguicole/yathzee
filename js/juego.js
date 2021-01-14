let arrayDados = []; // los 5 dados finales de la rond
let numDadosFijos = 0; // el numero de dados que se restaran a la hora de tirar dados
let contadorTiradas = 0; //contador de  tiradas (3 tiradas maximo)
let sumaPuntos = 0;//suma de los puntos para a la hora de puntuar

// numero al azar entre el 1 - 6
function dadoRandom(){
	return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

function tiradaDados(){
	//arrayDados = [];//vaciamos el array para que no almacenen todos los dados de las 3 tiradas
	for(var i = 1; i<=(5 - numDadosFijos);i++){
		var dado = dadoRandom();
		var img = $('<img />', { 
  			class: dado, //para saber el numero
  			src: ("img/" + (dado.toString()) + ".png")
			});
		img.addClass("dado");//para los estilos
		img.appendTo($('#div2'));
		//arrayDados.push(dado);
	}
	contarPuntos();
	
}

function deshabilitarTirada(){
	contadorTiradas++;
	if(contadorTiradas == 3){
		contadorTiradas = 0;
		$("#lanzadado").prop("disabled", true);
	}
}
function habilitarTirada(){
	contadorTiradas = 0;
	$("#lanzadado").prop("disabled", false);
}

function contarPuntos(){
	arrayDados = [];
	sumaPuntos = 0;
	$("#div2 img").each(function(ind, elem){
		arrayDados.push(parseInt(elem.classList[0]));
		sumaPuntos += parseInt(elem.classList[0]);
	});
	$("#div3 img").each(function(ind, elem){
		arrayDados.push(parseInt(elem.classList[0]));
		sumaPuntos += parseInt(elem.classList[0]);
	});
	console.log(arrayDados);
}

$(document).ready(function() {
    $("#lanzadado").click(function(){
    	$('#div2').empty();
    	tiradaDados();
    	deshabilitarTirada();
    });
    $('body').on('click','img',function(){
    	var dadoGuardado = $(this);
    	console.log(dadoGuardado.parent().prop("id"));
    	if(dadoGuardado.parent().prop("id") == "div3"){
    		$('#div2').append(dadoGuardado);
    	}else{
    		$('#div3').append(dadoGuardado);
    	}
    	numDadosFijos = $('#div3 img').length;
    });
});
//tiradaDados();