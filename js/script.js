$(document).ready(function(){
     //Configurar opciones
     var speed = 500; //velocidad de atenuacion
     var autoswitch = true; //opciones de autodesplazamiento 
     var autoswitch_speed = 4000; //velocidad de autodesplazamiento 

     //agregar clase activa inicial 
     $('.slide').first().addClass('active');

     //esconder todas las imagenes
     $('.slide').hide();

     //mostrar primer imagen
     $('.active').show();
    
     //siguiente imagen
     $('#next').on('click', nextSlide);

     //imagen previa
     $('#prev').on('click', prevSlide);

     //autodesplazamiento
     if (autoswitch == true) {
     	setInterval(nextSlide, autoswitch_speed);
     }

     //Cambiar a la siguiente imagen 
     function nextSlide(){
     	$('.active').removeClass('active').addClass('oldActive');
     	if($('.oldActive').is(':last-child')){
              $('.slide').first().addClass('active');
     	} else {
     		$('.oldActive').next().addClass('active');
     	}
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
     }

     //Cambiar a la anterior imagen 
     function prevSlide(){
     	$('.active').removeClass('active').addClass('oldActive');
     	if($('.oldActive').is(':first-child')){
              $('.slide').last().addClass('active');
     	} else {
     		$('.oldActive').prev().addClass('active');
     	}
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
     }
});