var nn=document.getElementById('necesitas');
   onload= function pbocult() {
     nn.style.display='none';
   };

  function myFunction() {
    var x = document.getElementById('pbchao');
  
    if (x.style.display === 'none') {
        x.style.display = 'block';
        nn.style.display='none';
    } else {
        x.style.display = 'none';
        nn.style.display='block';
    }
}
$(document).ready(function(){
  var newColor = localStorage.getItem('color');
  var newFont = localStorage.getItem('font');
  //var correoUser = localStorage.getItem('emailUser');
  //var tarjeta = localStorage.getItem('creditCard');
  //var tipo = localStorage.getItem('typeCard');
  $(".iphone").css("background-color", newColor );
  $(".iphone").css("font-family", newFont );
});