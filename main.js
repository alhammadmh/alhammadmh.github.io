

var player_One='x';


// function nextPlayer(cell){
//   cell.innerText= player_One;
//   switchPlayer();
//   }


$(".cell").on("click", function turn (event) {

  if(player_One == 'x') {$(event.target).css("background-image", "url(x_img.png)").css('background-size','160px').css('background-color', '#7ea0d6');
   player_One = 'o';
} else {  $(event.target).css("background-image", "url(o_img.png)").css('background-size','160px').css('background-color', '#bfb8b7')
  player_One = 'x';
}})




// Reset button function 
$('button').on('click',function(){
  $('.cell').css('background','grey')
})


  
