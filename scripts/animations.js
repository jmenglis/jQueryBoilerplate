
$(document).ready(function(evt) {
  console.log('Animations Boilerplate is a go.');

  // create some events to hide '.news' and '.weather'
  $('#weather-btn').click(function(evt) {
    // select '.weather' and .hide() it
    //$('.weather').hide();
    $('.weather').slideUp();
  });
  // now hide '.news' and .hide() it
  $('#news-btn').click(function(evt) {
    // $('.news').hide();
    $('.news').slideUp();
  });
  // what if we want to see them all again?
  $('#show-and-hide-btn').click(function(evt) {
    // we miss you! .show() to come back
    // $('.news').show();
    // $('.weather').show();
    $('.news').slideDown();
    $('.weather').slideDown();
  });
});


