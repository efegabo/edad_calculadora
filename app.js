//pendiente terminar:
//La fecha es en el futuro (mes)
//La fecha no es válida, por ejemplo, 31/04/1991 (hay 30 días en abril)


var dia =  document.getElementById('dia').value
var mes =  document.getElementById('mes').value
var ano =  document.getElementById('ano').value
 

document.getElementById('calcular').addEventListener("click", function(e){
const respues_ano =	document.getElementById("anosR")
const respues_meses =	document.getElementById("mesesR")
const respues_dia =	document.getElementById("diasR")
	e.preventDefault()
	
	const fechaActual = new Date()
	//años
	const anoA = fechaActual.getFullYear() //obtener año actual
	var ano =  document.getElementById('ano').value
	if (ano.length == 0) {
		alert("campo del año esta vacio")
		return
	}else{
		if (ano > anoA) {
			alert("La fecha es en el futuro")
			return
		}
		else{
			var ar =anoA - ano  
		}
		 
	}
	 
	 

	//meses
	const mesA =  fechaActual.getMonth() + 1  //obtener mes acutal
	var mes =  document.getElementById('mes').value
	if (mes.length == 0) {
		alert("campo del Mes esta vacio")
		return
	}else{

		if (mes >= 1 && mes <=12 ) {
				var meses = mesA - mes

	if (meses < 0 ) {
		var anoC = ar - 1 
		var mesC =  meses + 12
		 
	} else{
			var anoC = ar 
			
			var mesC = meses
			 
	}
}else{
	alert("ingrese un mes valido")
	return
}
	 
	}
	 
	//dias


	var dia =  document.getElementById('dia').value
	 


	if (dia.length == 0 ) {
		alert("campo del dia esta vacio")
		return
	} 
	//else if(dia <= 1 && dia >= 31){}
	else{
		if (dia >= 1 && dia <=31 ) {
			var diaA = fechaActual.getDate() //dia actual
	var diasC= diaA - dia
	if (diasC < 0) {
		var mesC= mesC - 1;
		 
	}
			
		}else{
			alert("ingrese dia valido")
			return
		}
		 
	 

	 
	function diasMesAnterior(anoA, mesC ){
		  const ultimoDiaMes = new Date(anoA, mesC, 0).getDate();
           return ultimoDiaMes;
	}
	const diasEnMes = diasMesAnterior(anoA, mesC);
	var diaF= (diasC + diasEnMes) - 1

	if (diasC > 0 ) {
		var	 diaF = diasC + 1
	}
	}
	 
	  
	 //Doom
	respues_ano.innerHTML=`<p class="resp1">${anoC}</p>`
	respues_meses.innerHTML=`<p class="resp1">${mesC}</p>`
	respues_dia.innerHTML=`<p class="resp1">${diaF}</p>`


	console.log(anoC, "años" , mesC, "meses",diaF, "dias")
 	//console.log(anoC)
})