const folder_html = document.getElementById('html');
const folder_js = document.getElementById('js');
const folder_android = document.getElementById('android');
const folder_node = document.getElementById('node');
const folder_arduino = document.getElementById('arduino');
const folder_python = document.getElementById('python');
const folder_php = document.getElementById('php');
const folder_jsp = document.getElementById('jsp');
const folder_user = document.getElementById('user');
const folder_github = document.getElementById('github');
const folder_title = document.getElementById('folder-title');
const iframe = document.getElementById('iframe');

const mini_html = document.getElementById('mini_html');
const mini_js = document.getElementById('mini_js');
const mini_android = document.getElementById('mini_android');
const mini_node = document.getElementById('mini_node');
const mini_arduino = document.getElementById('mini_arduino');
const mini_python = document.getElementById('mini_python');
const mini_php = document.getElementById('mini_php');
const mini_jsp = document.getElementById('mini_jsp');


folder_html.click(function () {
    $('.modal').show();
    folder_title.text("HTML");
    iframe.attr("src", "project/html.html");
});

folder_js.click(function () {
    $('.modal').show();
    folder_title.text("JAVASCRIPT");
    iframe.attr("src", "project/javascript.html");
});

folder_android.click(function () { 
    $('.modal') .show(); 
    folder_title.text("ANDROID");
    iframe.attr("src", "project/android.html");
});

folder_node.click(function () { 
    $('.modal').show();
    folder_title.text("NODE.JS");
    iframe.attr("src", "project/node.html");
});

folder_arduino.click(function () { 
    $('.modal').show();
    folder_title.text("ARDUINO");
    iframe.attr("src", "project/arduino.html");
});

folder_python.click(function () { 
    $('.modal').show(); 
    folder_title.text("PYTHON");
    iframe.attr("src", "project/python.html");
});

folder_php.click(function () { 
    $('.modal').show();
    folder_title.text("PHP");
    iframe.attr("src", "project/php.html");
});

folder_jsp.click(function () { 
    $('.modal').show();
    folder_title.text("JSP");
    iframe.attr("src", "project/jsp.html");
});

folder_user.click(function () { 
    $('.modal').show();
    folder_title.text("USER");
    iframe.attr("src", "project/user.html");
});

folder_github.click(function () { 
    //a태그로 링크연결

});

$(close).click(function () {
    $('.modal').stop().hide();
});

mini_html.click(function () { 
    folder_title.text("HTML");
    iframe.attr("src", "project/html.html");
});

mini_js.click(function () { 
    folder_title.text("JAVASCRIPT");
    iframe.attr("src", "project/javascript.html");
});

mini_android.click(function () { 
    folder_title.text("ANDROID");
    iframe.attr("src", "project/android.html");
});

mini_node.click(function () { 
    folder_title.text("NODE.JS");
    iframe.attr("src", "project/node.html");
});

mini_arduino.click(function () { 
    folder_title.text("ARDUINO");
    iframe.attr("src", "project/arduino.html");
});

mini_python.click(function () { 
    folder_title.text("PYTHON");
    iframe.attr("src", "project/python.html");
});

mini_php.click(function () { 
    folder_title.text("PHP");
    iframe.attr("src", "project/php.html");
});

mini_jsp.click(function () { 
    folder_title.text("JSP");
    iframe.attr("src", "project/jsp.html");
});

