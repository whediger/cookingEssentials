$(document).ready(function(){

  $('#submit').on('click', function(event){
    event.preventDefault();
    console.log('stufffffffffffff');
    $.get('http://api.nal.usda.gov/ndb/search/?format=json&q=butter&sort=n&max=25&offset=0&api_key=DEMO_KEY ', function(data){
      console.log(data);
      $('main').append('<p></p>');
      $('p').text(data);
    });
  });

});
