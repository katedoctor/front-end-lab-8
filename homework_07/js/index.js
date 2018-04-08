$(document).ready(function createBoard() {
  var board_size = 15,
      $board = $('.board'),
      white = $("#white"),
      black = $('#black'),
      move = 0,
      array = [];
  let game = false;


  for(let i=0; i<board_size; i++){
    $('<div>').addClass('data-row').appendTo('.board');

    for(let j=0; j<board_size; j++){
      $('.data-row').eq(i).append('<div class="data-cell">');
    }
  }

  for(let i=0; i < (board_size - 1); i++) {
    $('<div>').addClass('data-row').appendTo('.dots');
    for(let j=0; j<(board_size - 1); j++) {
      $('.dots .data-row').eq(i).append('<div class ="data-dots">');
    }
  }

$(`.data-dots`).one('click', (function(e){
  let ring = e.target;
  if(move%2 ===0) {
    $(ring).addClass(`white`);
    console.log(ring);
    $(ring).css({ 'background': 'white' });
    $(black).css({ 'opacity': '1'});
    $(white).css({ 'opacity': '0.4' });
    horizon($(this), `white`);
  }else{
    $(ring).addClass(`black`);
    console.log(ring);
    $(ring).css({'background': 'black'});
    $(white).css({ 'opacity': '1' });
    $(black).css({ 'opacity': '0.4' });
    horizon($(this), `black`);
  }
  move++;
}));

function horizon(self, color){
  game = false;
  if ((self.prev().is(`.${color}`) && self.next().is(`.${color}`) && self.next().next().is(`.${color}`)) ||
     (self.next().is(`.${color}`) && self.next().next().is(`.${color}`) && self.next().next().next().is(`.${color}`))||
       (self.prev().is(`.${color}`) && self.prev().prev().is(`.${color}`) && self.prev().prev().prev().is(`.${color}`)) ||
        (self.prev().is(`.${color}`) && self.prev().prev().is(`.${color}`) && self.next().is(`.${color}`))) {
    console.log(color);
    $(`h2`).replaceWith(`<h2><span>${color} winner</span></h2>`);
      game = true;
      gameAgain(game);
       return;
  }
};

function gameAgain(game){
if(game){
  $('.btn_again').css({'visibility': 'visible'})
 }else{
   return;
 }
}
  $('.btn_again').click(() => {
    this.location.reload();
  });
});
