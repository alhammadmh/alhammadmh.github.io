

var player_One=1;

// if(('.cell').hasClass('x') || ('.cell').hasClass('o')){
//   console.log('This cell is already selected');
// } else {

$(".cell").on("click", function (event) {
  if(player_One == 1) {
    $(event.target).addClass('x');
    if (checkWinner('x')){
      setTimeout(function() {
        alert ('Player '+player_One+' won')
      }, 250)
    } else { 
      player_One = 2;
    }
  } else {  
    $(event.target).addClass('o');
    if (checkWinner('o')){
      setTimeout(function() {
        alert ('Player '+player_One+' won')
      }, 250)
    } else {
      player_One = 1;
    }
  }
})





function checkWinner (value){
  if ($('#0').hasClass(value) && $('#1').hasClass(value) && $('#2').hasClass(value)){
  return true;
  } else if ($('#3').hasClass(value) && $('#4').hasClass(value) && $('#5').hasClass(value)){
    return true;
  } else if ($('#6').hasClass(value) && $('#7').hasClass(value) && $('#8').hasClass(value)){
    return true;
  } else if ($('#0').hasClass(value) && $('#3').hasClass(value) && $('#6').hasClass(value)){
    return true;
  } else if ($('#1').hasClass(value) && $('#4').hasClass(value) && $('#7').hasClass(value)){
    return true;
  } else if ($('#2').hasClass(value) && $('#5').hasClass(value) && $('#8').hasClass(value)){
    return true;
  } else if ($('#2').hasClass(value) && $('#4').hasClass(value) && $('#6').hasClass(value)){
    return true;
  } else if ($('#0').hasClass(value) && $('#4').hasClass(value) && $('#8').hasClass(value)){
    return true;
  } else {
    return false;
  }
}




// Reset button function 
$('button').on('click',function(){
  $('.cell').css('background','grey')
})


// Landing page link 

$('.start').on('click', function(){
  $('.start').att('src', 'game.html')
})