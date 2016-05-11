$(document).ready(function(){

  $.get('http://api.nal.usda.gov/ndb/list?format=json&lt=g&sort=n&api_key=rz0uHRvuUkaP6TxlqLvFaVKYKlbUgcjYMOOZE51u ', function(data){
    var itemLength = data.list.item.length;
    for ( i = 0; i < itemLength; i++ ) {
        console.log(data.list.item[i].name);
    }


    $('main').append('<p></p>');
    $('p').text(data.list.item[0]);
  });
//------make above an iife +==}=======>
  $('#submit').on('click', function(event){
    event.preventDefault();

  });
  // need to get the item id number and then pass it back over to get nutritional information. Two seperate requests.
});
