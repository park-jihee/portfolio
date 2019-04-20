var close = $('.content .content-header i');
var folder_html = $('#html');
var folder_js = $('#js');
var folder_android = $('#android');
var folder_node = $('#node');
var folder_arduino = $('#arduino');
var folder_python = $('#python');
var folder_php = $('#php');
var folder_jsp = $('#jsp');
var folder_user = $('#user');
var folder_github = $('#github');
var folder_title = $('#folder-title');
var iframe = $('#iframe');

folder_html.click(function () {
    $('.modal').show();
    folder_title.text("HTML");
    iframe.attr("src", "../project/html.html");
});

folder_js.click(function () {
    $('.modal').show();
    folder_title.text("JAVASCRIPT");
    iframe.attr("src", "../project/javascript.html");
});

folder_android.click(function () { 
    $('.modal') .show(); 
    folder_title.text("ANDROID");
    iframe.attr("src", "../project/android.html");
});

folder_node.click(function () { 
    $('.modal').show();
    folder_title.text("NODE.JS");
    iframe.attr("src", "../project/node.html");
});

folder_arduino.click(function () { 
    $('.modal').show();
    folder_title.text("ARDUINO");
    iframe.attr("src", "../project/arduino.html");
});

folder_python.click(function () { 
    $('.modal').show(); 
    folder_title.text("PYTHON");
    iframe.attr("src", "../project/python.html");
});

folder_php.click(function () { 
    $('.modal').show();
    folder_title.text("PHP");
    iframe.attr("src", "../project/php.html");
});

folder_jsp.click(function () { 
    $('.modal').show();
    folder_title.text("JSP");
    iframe.attr("src", "../project/jsp.html");
});

folder_user.click(function () { 
    $('.modal').show();
    folder_title.text("USER");
    iframe.attr("src", "../project/user.html");
});

folder_github.click(function () { 
    //a태그로 링크연결

});

$(close).click(function () {
    $('.modal').stop().hide();
});
