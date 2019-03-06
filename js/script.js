var close = $('.content .content-header i');

$('#html').click(function(){ $('.modal-html').stop().fadeIn(); })
$('#js').click(function(){ $('.modal-js').stop().fadeIn(); })
$('#android').click(function(){ $('.modal-android').stop().fadeIn(); })
$('#node').click(function(){ $('.modal-node').stop().fadeIn(); })
$('#arduino').click(function(){ $('.modal-arduino').stop().fadeIn(); })
$('#python').click(function(){ $('.modal-python').stop().fadeIn(); })
$('#php').click(function(){ $('.modal-php').stop().fadeIn(); })
$('#jsp').click(function(){ $('.modal-jsp').stop().fadeIn(); })
$('#user').click(function(){ $('.modal-user').stop().fadeIn(); })
$('#github').click(function(){ $('.modal-github').stop().fadeIn(); })

$(close).click(function(){
    $('.modal-html').stop().fadeOut();
    $('.modal-js').stop().fadeOut();
    $('.modal-android').stop().fadeOut();
    $('.modal-node').stop().fadeOut();
    $('.modal-arduino').stop().fadeOut();
    $('.modal-python').stop().fadeOut();
    $('.modal-php').stop().fadeOut();
    $('.modal-jsp').stop().fadeOut();
    $('.modal-user').stop().fadeOut();
    $('.modal-github').stop().fadeOut();
})