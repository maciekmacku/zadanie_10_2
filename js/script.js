$(function(){
	console.log('DOM loaded - you can have fun');
});

$(function(){
  var paragraphs = $('p').css('color', 'red');
  var rawFirstParagraph = paragraphs[0];
  console.log(rawFirstParagraph);
  var jqFirstParagraph = paragraphs.eq(0)
  console.log(jqFirstParagraph);
  jqFirstParagraph.css('color', 'blue');
});

$(function(){
  $('p').each(function( index, elem ) {
    $( elem ).text('paragraf ' + index);
  }) .css('color', 'red');
});

$(function(){
  var li = $('nav').find('li').last();
  li.css("color", "red");
});