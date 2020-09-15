var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var input4 = document.getElementById('input4');
var input5 = document.getElementById('input5');
var input6 = document.getElementById('input6');
var input7 = document.getElementById('input7');
var input8 = document.getElementById('input8');
var input9 = document.getElementById('input9');
var input10 = document.getElementById('input10');
var input11 = document.getElementById('input11');
var input12 = document.getElementById('input12');
var input13 = document.getElementById('input13');
var input14 = document.getElementById('input14');
var input15 = document.getElementById('input15');
var input16 = document.getElementById('input16');

var lista1 = ['GUARANI', 'Guarani', 'guarani','campinas'];
var lista2 = ['INTER DE LIMEIRIA', 'INTER LIMEIRA', 'Inter Limeira', 'Inter De Limeira', 'inter limeira', 'inter de limeira', 'INTER', 'Inter', 'inter'];
var lista3 = ['ITUANO', 'Ituano', 'ituano'];
var lista4 = ['MIRASSOL', 'Mirassol', 'mirassol'];
var lista5 = ['OESTE', 'Oeste', 'oeste'];
var lista6 = ['PALMEIRAS', 'Palmeiras', 'palmeiras', 'MUNDIAL', 'Mundial', 'mundial', 'TEM MUNDIAL', 'Tem Mundial', 'tem mundial', 'VERDAO', 'VERDÃO', 'Verdao', 'Verdão', 'verdao', 'verdão'];
var lista7 = ['PONTE PRETA', 'Ponte Preta', 'ponte preta'];
var lista8 = ['SANTO ANDRÉ', 'SANTO ANDRE', 'Santo Andre', 'Santo André', 'santo andre', 'santo andré'];
var lista9 = ['SANTOS', 'Santos', 'santos'];
var lista10 = ['SAO PAULO', 'SÃO PAULO', 'Sao Paulo', 'São Paulo', 'sao paulo', 'são paulo', 'SEM TITULO', 'SEM TÍTULO', 'Sem Titulo', 'Sem Título', 'sem titulo', 'sem título'];
var lista11 = ['NAO SEI', 'NÃO SEI', 'Nao Sei', 'Não Sei', 'nao sei', 'não sei', 'DESCONHECIDO', 'Desconhecido', 'desconhecido', 'intitulado'];
var lista12 = ['RED BULL', 'RED BULL BRAGANTINO', 'Red Bull', 'Red Bull Bragantino', 'red bull', 'red bull bragantino'];
var lista13 = ['AGUA SANTA', 'ÁGUA SANTA', 'Agua Santa', 'Água Santa', 'agua santa', 'água santa'];
var lista14 = ['CORINTHIANS', 'Corinthians', 'corinthians', 'TIMAO', 'TIMÃO', 'Timao', 'Timão', 'timao', 'timão', 'TIMINHO', 'Timinho', 'timinho', 'ROUBA', 'Rouba', 'rouba'];
var lista15 = ['GREMIO NOVORIZONTINO', 'GRÊMIO NOVORIZONTINO', 'Gremio Novorizontino', 'Grêmio Novorizontino', 'gremio novorizontino', 'grêmio novorizontino', 'NOVORIZONTINO', 'Novorizontino', 'novorizontino'];
var lista16 = ['FERROVIARIA', 'FERROVIÁRIA', 'Ferroviaria', 'Ferroviária', 'ferroviaria', 'ferroviária'];

function validarTodas() {
	var acertou = 0;

	// document.querySelectorAll('dicas').style.display = 'none';

	for (var posicao = 0; posicao <= lista1.length; posicao++) {
		if (input1.value == lista1[posicao]) {
			acertou++;
			console.log('acertou 1');
			document.getElementById('resultadoBom1').style.display = 'inline-block';
			document.getElementById('resultadoRuim1').style.display = 'none';
			break;
		}
		else {
			document.getElementById('resultadoRuim1').style.display = 'inline-block';
			document.getElementById('resultadoBom1').style.display = 'none';
		}
	}

	for (var posicao = 0; posicao <= lista2.length; posicao++) {
		if (input2.value == lista2[posicao]) {
			acertou++;
			console.log('acertou 2');
			document.getElementById('resultadoBom2').style.display = 'inline-block';
			document.getElementById('resultadoRuim2').style.display = 'none';
			break;
		}
		else {
			document.getElementById('resultadoRuim2').style.display = 'inline-block';
			document.getElementById('resultadoBom2').style.display = 'none';
		}
	}

	for (var posicao = 0; posicao <= lista3.length; posicao++) {
		if (input3.value == lista3[posicao]) {
			acertou++;
			console.log('acertou 3');
			document.getElementById('resultadoBom3').style.display = 'inline-block';
			document.getElementById('resultadoRuim3').style.display = 'none';
			break;
		}
		else {
			document.getElementById('resultadoRuim3').style.display = 'inline-block';
			document.getElementById('resultadoBom3').style.display = 'none';
		}
	}

	for (var posicao = 0; posicao <= lista4.length; posicao++) {
		if (input4.value == lista4[posicao]) {
			acertou++;
			console.log('acertou 4');
			document.getElementById('resultadoBom4').style.display = 'inline-block';
			document.getElementById('resultadoRuim4').style.display = 'none';
			break;
		}
		else {
			document.getElementById('resultadoRuim4').style.display = 'inline-block';
			document.getElementById('resultadoBom4').style.display = 'none';
		}
	}

	for (var posicao = 0; posicao <= lista5.length; posicao++) {
		if (input5.value == lista5[posicao]) {
			acertou++;
			console.log('acertou 5');
			document.getElementById('resultadoBom5').style.display = 'inline-block';
			document.getElementById('resultadoRuim5').style.display = 'none';
			break;
		}
		else {
			document.getElementById('resultadoRuim5').style.display = 'inline-block';
			document.getElementById('resultadoBom5').style.display = 'none';
		}
	}

	for (var posicao = 0; posicao <= lista6.length; posicao++) {
		if (input6.value == lista6[posicao]) {
			acertou++;
			console.log('acertou 6');
			document.getElementById('resultadoBom6').style.display = 'inline-block';
			document.getElementById('resultadoRuim6').style.display = 'none';
			break;
		}
		else {
			document.getElementById('resultadoRuim6').style.display = 'inline-block';
			document.getElementById('resultadoBom6').style.display = 'none';
		}
	}

	for (var posicao = 0; posicao <= lista7.length; posicao++) {
		if (input7.value == lista7[posicao]) {
			acertou++;
			console.log('acertou 7');
			document.getElementById('resultadoBom7').style.display = 'inline-block';
			document.getElementById('resultadoRuim7').style.display = 'none';
			break;
		}
		else {
			document.getElementById('resultadoRuim7').style.display = 'inline-block';
			document.getElementById('resultadoBom7').style.display = 'none';
		}
	}

	for (var posicao = 0; posicao <= lista8.length; posicao++) {
		if (input8.value == lista8[posicao]) {
			acertou++;
			console.log('acertou 8');
			document.getElementById('resultadoBom8').style.display = 'inline-block';
			document.getElementById('resultadoRuim8').style.display = 'none';
			break;
		}
		else {
			document.getElementById('resultadoRuim8').style.display = 'inline-block';
			document.getElementById('resultadoBom8').style.display = 'none';
		}
	}

	for (var posicao = 0; posicao <= lista9.length; posicao++) {
		if (input9.value == lista9[posicao]) {
			acertou++;
			console.log('acertou 9');
			document.getElementById('resultadoBom9').style.display = 'inline-block';
			document.getElementById('resultadoRuim9').style.display = 'none';
			break;
		}
		else {
			document.getElementById('resultadoRuim9').style.display = 'inline-block';
			document.getElementById('resultadoBom9').style.display = 'none';
		}
	}

	for (var posicao = 0; posicao <= lista10.length; posicao++) {
		if (input10.value == lista10[posicao]) {
			acertou++;
			console.log('acertou 10');
			document.getElementById('resultadoBom10').style.display = 'inline-block';
			document.getElementById('resultadoRuim10').style.display = 'none';
			break;
		}
		else {
			document.getElementById('resultadoRuim10').style.display = 'inline-block';
			document.getElementById('resultadoBom10').style.display = 'none';
		}
	}

	for (var posicao = 0; posicao <= lista11.length; posicao++) {
		if (input11.value == lista11[posicao]) {
			acertou++;
			console.log('acertou 11');
			document.getElementById('resultadoBom11').style.display = 'inline-block';
			document.getElementById('resultadoRuim11').style.display = 'none';
			break;
		}
		else {
			document.getElementById('resultadoRuim11').style.display = 'inline-block';
			document.getElementById('resultadoBom11').style.display = 'none';
		}
	}

	for (var posicao = 0; posicao <= lista12.length; posicao++) {
		if (input12.value == lista12[posicao]) {
			acertou++;
			console.log('acertou 12');
			document.getElementById('resultadoBom12').style.display = 'inline-block';
			document.getElementById('resultadoRuim12').style.display = 'none';
			break;
		}
		else {
			document.getElementById('resultadoRuim12').style.display = 'inline-block';
			document.getElementById('resultadoBom12').style.display = 'none';
		}
	}

	for (var posicao = 0; posicao <= lista13.length; posicao++) {
		if (input13.value == lista13[posicao]) {
			acertou++;
			console.log('acertou 13');
			document.getElementById('resultadoBom13').style.display = 'inline-block';
			document.getElementById('resultadoRuim13').style.display = 'none';
			break;
		}
		else {
			document.getElementById('resultadoRuim13').style.display = 'inline-block';
			document.getElementById('resultadoBom13').style.display = 'none';
		}
	}

	for (var posicao = 0; posicao <= lista14.length; posicao++) {
		if (input14.value == lista14[posicao]) {
			acertou++;
			console.log('acertou 14');
			document.getElementById('resultadoBom14').style.display = 'inline-block';
			document.getElementById('resultadoRuim14').style.display = 'none';
			break;
		}
		else {
			document.getElementById('resultadoRuim14').style.display = 'inline-block';
			document.getElementById('resultadoBom14').style.display = 'none';
		}
	}

	for (var posicao = 0; posicao <= lista15.length; posicao++) {
		if (input15.value == lista15[posicao]) {
			acertou++;
			console.log('acertou 15');
			document.getElementById('resultadoBom15').style.display = 'inline-block';
			document.getElementById('resultadoRuim15').style.display = 'none';
			break;
		}
		else {
			document.getElementById('resultadoRuim15').style.display = 'inline-block';
			document.getElementById('resultadoBom15').style.display = 'none';
		}
	}

	for (var posicao = 0; posicao <= lista16.length; posicao++) {
		if (input16.value == lista16[posicao]) {
			acertou++;
			console.log('acertou 16');
			document.getElementById('resultadoBom16').style.display = 'inline-block';
			document.getElementById('resultadoRuim16').style.display = 'none';
			break;
		}
		else {
			document.getElementById('resultadoRuim16').style.display = 'inline-block';
			document.getElementById('resultadoBom16').style.display = 'none';
		}
	}
	console.log(acertou);
	document.getElementById('btnAtualizar').style.display = 'inline-block';
	document.getElementById('btnGabarito').style.display = 'inline-block';
	document.getElementById('btnGabaritoVoltar').style.display = 'inline-block';

	if (acertou <= 4) {
		document.getElementById('pontuacaoFinal').innerHTML = "<h2 style='color:red'> Não está bom: " + acertou + "/16</h2>";
	}
	else if (acertou	<= 8) {
		document.getElementById('pontuacaoFinal').innerHTML = "<h2 style='color:#CDCD00'>Dá para melhorar: " + acertou + "/16</h2>";
	}
	else if (acertou	<= 12 ) {
		document.getElementById('pontuacaoFinal').innerHTML = "<h2 style='color:#1E90FF'>Muito bom: " + acertou + "/16</h2>";
	}
	else {
		document.getElementById('pontuacaoFinal').innerHTML = "<h2 style='color:green'>Excelente: " + acertou + "/16</h2>";
	}
}

function dicas() {
	// disable('gabarito');
	var times = document.querySelectorAll('.time');
	
	for (var i = 0; i < times.length; i++) {
		var time = times[i];
		var mostrarDicas = time.querySelector(".dicas");
		mostrarDicas.classList.remove('esconder');
		mostrarDicas.classList.add('mostrar');
	}
}

function gabarito() {
	// disable('dicas');
	var times = document.querySelectorAll('.time');
		
	for (var i = 0; i < times.length; i++) {
		var time = times[i];
		var mostrarGabarito = time.querySelector(".nomeTimes");
		mostrarGabarito.classList.remove('esconder');
		mostrarGabarito.classList.add('mostrar');
	}
}

function disable(func) {
	if (func == 'dicas') {
		var times = document.querySelectorAll('.time');
	
		for (var i = 0; i < times.length; i++) {
			var time = times[i];
			var mostrarDicas = time.querySelector(".dicas");
			mostrarDicas.classList.add('esconder');
			mostrarDicas.classList.remove('mostrar');
		}
	}
	else if (func == 'gabarito') {
		var times = document.querySelectorAll('.time');
		
		for (var i = 0; i < times.length; i++) {
			var time = times[i];
			var mostrarGabarito = time.querySelector(".nomeTimes");
			mostrarGabarito.classList.add('esconder');
			mostrarGabarito.classList.remove('mostrar');
		}
	}
}

// function disable(func) {
// 	if (func == 'validar') {
// 		validarTodas.disable = true;
// 	}
// 	if (func == 'gabarito') {
// 		gabarito.disable = true;
// 	}
// 	if (func == 'dicas') {
// 		dicas.disable = true;
// 	}
// }