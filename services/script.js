$(document).ready(function (){
    $('.card').on('mouseenter', function(){
        $(this).find('.card-title').css('color', 'green');
    });
    $('.card').on('mouseleave', function () {
        $(this).find('.card-title').css('color', '');
    })
});