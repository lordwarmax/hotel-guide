$(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({interval: 1000});
    $('.btn-reserva').click(function(){
          $(this).css('text-decoration','underline')
    });
    $('#contacto').on('show.bs.modal', function(e){
        console.log('Inicia evento show modal contacto');
        $('#contactoBtn').removeClass('btn-outline-success');
        $('#contactoBtn').addClass('btn-primary');
        $('#contactoBtn').prop('disable', true);
    });
    $('#contacto').on('shown.bs.modal', function(e){
        console.log('Finaliza evento show modal contacto')
    });
    $('#contacto').on('hide.bs.modal', function(e){
        console.log('Inicia evento hide modal contacto')
    });
    $('#contacto').on('hidden.bs.modal', function(e){
        console.log('Finaliza evento hide modal contacto')
        $('#contactoBtn').prop('disable', false);
    });
});