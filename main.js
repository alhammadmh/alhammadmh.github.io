// let x= 1;
// let o= 2;


  var player= prompt('Who is Playing First? X or O ?').toUpperCase();
  console.log(player);



$(".cell").one("click", function (event) {
  if(player === 'X') {
    $('.one').text(`Player O tern`);
    $(event.target).addClass('X');
    // if statement to check if there is X player won 
    // if he won there will be an alert and the click function will be disabled
    if (checkWinner('X')){
      setTimeout(function() {
        $('.cell').off('click')
        alert (`Player X won`)
      }, 250);
      // if there is no winner it will move to the next player
    } else { 
      player = 'O';
    }
  } else {  
    // next player will have a class of O 
    $(event.target).addClass('O');
    // this function to show the user who's turn it's
    $('.one').text(`Player X tern`);
    // if statement to check if there is player won
    // if he won there will be an alert and the click function will be disabled 
    if (checkWinner('O')){
      setTimeout(function() {
        $('.cell').off('click')
        alert (`Player O won`)
      }, 250)
    } else {
      player = 'X';
    }
    // else {
    //   setTimeout(function() {
    //     $('.cell').off('click')
    //     alert (`There is no Winner`)
    //   }, 250)
    // }
  }
})


// if statement with all the winning combonation 
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







