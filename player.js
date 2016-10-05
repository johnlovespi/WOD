console.log('working');


$(document).ready(function() {
  $(document).keydown(function(e){
    switch (e.which) {
    case 38://
    var p = Math.floor(parseInt($('.player').css('top')));
        if( p > -230){
        $('.player').stop().animate({top: '-=150'});
        //left arrow key
          // console.log('working');
            // $(".player").top('-310');
        }
        // console.log($('.player').position());
        break;
     case 40:
     if(parseInt($('.player').css('top')) < 200){
        $('.player').stop().animate({top: '+=100'}); //right arrow key
        // if($('.player') > ){
            // console.log($('.player').position());
        }
      break;
    }
  })
});

// $(function) {
// function move() {
//     $('.roll-blocks').animate({right: '+=1000px'}, 1000)
//           // console.log($('.roll-blocks').right;
//     // if('.roll-blocks')
//      $('.roll-blocks2').animate({right: '+=1000px'}, 1000)
//       // console.log('.roll-blocks').position;

// };
// setInterval(move, 1000);



$(function  move() {
  setInterval(function() {
    $('.roll-blocks').animate({right: $(window).width() + 'px' }, 2000, 'linear', function() {
      $('.roll-blocks').css({ right: - 0})
      // .css({top: 49 + 'px'}).randTopbox();



      // $('.roll-blocks').css({top: + randomTop()});
        // console.log($('.roll-blocks').width())
  });
}, 1000);
});

$(function  move() {
  setInterval(function() {
    $('.roll-blocks2').animate({right: $(window).width() + 'px' }, 2000, 'linear', function() {
      $('.roll-blocks2').css({ right: - 0})
      // .css({top: 49 + 'px'}).randTopbox();
      // $('.roll-blocks').css({top: + randomTop()});
        // console.log($('.roll-blocks').width())
  });
}, 1000);
});


//make a function to give div randome top
// function randomTop(){
//   var randTopbox = Math.floor(Math.random()*100);
//    $('.roll-blocks').css({'margin-top': randTopbox+'px'});

// }

// setInterval(randomTop, 1000);







