$(document).ready(function() {
    $('select').material_select();
  });

$('#subir').click(function(es){
	// primero evitamos que se envie el formulario
	es.preventDefault();
	// pescamos archivo de la imagen
	var archivo = $('#input').get(0).files[0];
	// creamos FileReader
	var reader = new FileReader();
	// le decimos al filereader que hacer cuando termine de cargar
	reader.onloadend = function(efr) {
		var datos_imagen = reader.result;
		// se guarda imagen en localStorage
		localStorage.setItem('logo', datos_imagen);
		var $toastContent= $('<span> Imagen guardada correctamente </span>');
	};
	// finalmente leemos la imagen
	reader.readAsDataURL(archivo);
});
// queda que al carga la página. recuperar imagen del localStorage
$(document).ready(function(){
	// aca va el codigo que se ejecuta al cargar la página
	// primero recuperamos datos del localStorage
	var logo_data = localStorage.getItem('logo');
	// cambiamos la foto por defecto
	if(logo_data) {
		$('.mvAvatar').attr('src', logo_data);
	}
});
$(document).ready(function(){
	$('#saludo').change(function(){
		var saludoVal = $("#saludo").val();
		console.log(saludoVal);
		if(saludoVal === null || saludoVal === 0){
			var $toastContent = $('<span> Por favor selecciona un color </span>');
			Materialize.toast($toastContent, 2000);
		}else{
			localStorage.setItem('saludo', saludoVal);
		}
	});
	$('#color').change(function(){
		var colorVal = $("#color").val();
		console.log(colorVal);
		var colorText = $("#color option:selected").text();
		if(colorVal === null || colorVal === 0){
			var $toastContent = $('<span> Por favor selecciona un color </span>');
			Materialize.toast($toastContent, 2000);
		}else{
			localStorage.setItem('color', colorVal);
		}
	});
	$('#font').change(function(){
		var fontVal = $("#font").val();
		console.log(fontVal);
		var fontText = $("#font option:selected").text();
		if(fontVal === null || fontVal === 0){
			var $toastContent = $('<span> Por favor selecciona un color </span>');
			Materialize.toast($toastContent, 2000);
		}else{
			localStorage.setItem('font', fontVal);
		}
	});
});