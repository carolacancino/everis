(function(){
  var saludo_data = localStorage.getItem('saludo');
  $('.screen').append('<div class="receive message">'+saludo_data+'</div>');
})();


$('#mvenviar').click (function(){
  var mensaje=$('#mvtexto').val();
  console.log('obteniendo' + mensaje);
  leerApi(mensaje);
  imprimir(mensaje);
  $('#mvtexto').val(" ");
});

var respuesta_context = '';

function leerApi(textoEntrada){
	var reproduzAudio= false;
	var text= textoEntrada;
  var ajaxURL = '';
  if (respuesta_context.length !== null && respuesta_context.length !== ''){
    ajaxURL = 'https://asistentev7.mybluemix.net/api/conversations/';
  }else{
    ajaxURL = 'https://asistentev7.mybluemix.net/api/conversations/' + respuesta_context;
  }

  var ajaxType = "POST";
  var ajaxResponseParseMethod = "json";
  var ajaxCrossDomain = true;
  var headersAjax = {
    'Accept': 'application/json',
    'Content-type': 'application/json',
    'CHANNEL': 'WEB',
    'SUBCHANNEL': 'SIMPLE_TEXT',
    'API-KEY': 'd92cf049-eae9-42fd-a74c-b451fd1192e2',
		'OS':'WINDOWS',
		'IP':'127.0.0.1',
		'LOCALE':'es-ES'
  };

	console.log('llamar a la api reproduzAudio: '+reproduzAudio);
    var message = {
      text: text,
      returnAudio: reproduzAudio
    };

    // console.log(message);

        /* Define AJAX Settings */
    jQuery.support.cors = true;
    var ajaxDataToTarget = message;

    jQuery.ajax({
     headers:headersAjax,
     type: ajaxType        ,
     url: ajaxURL,
     crossDomain: ajaxCrossDomain,
     data: JSON.stringify(ajaxDataToTarget),
     dataType: ajaxResponseParseMethod,

    success:function(data) {
      var respSasha = data.intent.text;
      var respuesta_context = data.sesionCode;
      console.log('respuesta: '+ respSasha);
      $('.screen').append('<div class="receive message">'+respSasha+'</div>');

    }, error: function(data) {
            console.log("No se ha encontrado respuesta para su consulta");
        }
     });


}



function imprimir(texto){

 $('.screen').append('<div class="send message">'+texto+'</div>');
}