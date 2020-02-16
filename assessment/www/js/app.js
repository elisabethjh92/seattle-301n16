'use strict';

$('.up').on('click', likeMe);
function likeMe(e) {
  e.preventDefault();
  let counter = $(this).parent().find('span')[0];
  let count = parseInt($(counter).text());
  count++;
  $(counter).text(count);
}

$('.get-more').click((e) => {
  e.preventDefault();
  console.log('proof');
  $.ajax('/characters', {method: 'GET', datatype: 'JSON'})
    .then(data => {
      data.forEach(value => {
        let starChar = new StarWars(value);
        let starCont = starChar.render();
        $('#buttons').on('click', likeMe);
        $('.characters').append(starCont);
      });
      $('.up').on('click', likeMe);
    }).catch(error => { throw error; });
});

function StarWars(obj) {
  this.name = obj.name,
  this.likes = obj.likes,
};

StarWars.prototype.render = function() {
  const source = $('#star-wars').html();
  let template = Handlebars.compile(source);
  return template(this);
}





