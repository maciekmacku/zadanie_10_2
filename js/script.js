$(function(){
	console.log('DOM loaded - you can have fun');
});

$('span:even').css('color', 'red');
var paragraphs = $('p');
paragraphs.each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
    $(element).append(button);
});