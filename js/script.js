var close = $('.content .content-header i');

$('#html').click(function(){
    $('.modal-html').stop().fadeIn();
})

$(close).click(function(){
    $('.modal-html').stop().fadeOut();
})

$('#js').click(function(){
    $('.modal-js').stop().fadeIn();
})

$(close).click(function(){
    $('.modal-js').stop().fadeOut();
})