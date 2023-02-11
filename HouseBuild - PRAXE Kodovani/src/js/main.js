/*


var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');


button.addEventListener('click', function(){
    modal.classList.add('modal_active');
});

close.addEventListener('click', function(){
    modal.classList.remove('modal_active');
});


*/

$(document).ready(function(){

    // Najepojení WOW.js
    
    new WOW().init();

    // Modální Okno

    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');
   
    button.on('click', function(){
        modal.addClass('modal_active');
    });

    close.on('click', function(){
        modal.removeClass('modal_active');
    });


    // Validace Formuláře

    $('#brief-form').validate({
      rules: {
        username: "required",
        phone: "required",
      },
      messages: {
        username: "Uveďtě vaše jméno",
        phone: "Potřebujeme vaše telefoní číslo",
      }
    });




    // Napojení Slideru 

    $('.slider').slick({
        slidesToShow: 3,
        prevArrow: $('.arrows-left'),
        nextArrow: $('.arrows-right'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    });
    

});