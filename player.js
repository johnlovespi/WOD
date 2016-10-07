console.log('working');


$(document).ready(function() {
  createblocks(6000);

  $(document).keydown(function(e){
    switch (e.which) {
    case 38://
    var p = Math.floor(parseInt($('.player').css('top')));
        if( p >= 0){
        $('.player').stop().animate({top: '-=120'});
        //left arrow key
          // console.log('working');
            // $(".player").top('-310');
        }
        // console.log($('.player').position());
        break;
     case 40:
     if(parseInt($('.player').css('top')) < 430){
        $('.player').stop().animate({top: '+=120'}); //right arrow key
        // if($('.player') > ){
            // console.log($('.player').position());
        }
      break;
    }
  })
});



function animateBlock(speed){
  const width = window.innerWidth;
  const $newBlock = $('<div />',{class:'roll-blocks-generic , roll-blocks-generic2'});
  $newBlock
    .css({
      left: width,
      top: Math.floor(Math.random()*450),
      backgroundColor:('red')
    })
    .animate({left: -100},speed, 'linear')
    .appendTo($('body'))
}


// function createblocks(startSpeed) {
//   let speed = startSpeed;

//   const timerNumber = setInterval( function(){
//     // reset to startSPeed if we've dropped below zero, otherwise,
//     // leave it alone
//     speed = (speed<0) ? startSpeed : speed;
//     console.log(speed)
//     return animateBlock(speed-=20)
//   }, 900);
// }


function collision(){

var playerTop = $('.player').position().top;
var playerLeft = $('.player').postion().left;

var newBlockTop = $('.roll-blocks-generic').postion().top;
var newBlockLeft = $('.roll-blocks-generic').postion().left;


// var playerTop = player.position().top;
// var playerLeft = player.position().left;

// var newBlockTop = newBlock.postion().top;
// var newBlockLeft = newBlock.postion().left;


  if ((Math.abs(playerTop - newBlockTop)) < 20 && (Math.abs(playerLeft - newBlockLeft)) < 50){
  console.log('hit');
  }else{
  console.log('****');
}

}

  // var timerId = setInterval(draw, 1000);
collision();
// setInterval(collision, 1000);


// function getPositions(elem) {

//        var pos, width, height;
//        pos = $( elem ).position();
//        width = $( elem ).width();
//        height = $( elem ).height();
//        return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
//    }
// })
// }


// $(function  move() {
// setInterval(function() {

//       randomTop();

//       // $('.roll-blocks').css({top: + randomTop()});
//       // console.log($('.roll-blocks').width())
//   });
// }, 3000);
// });


// make a function to give div randome top
// function randomTop(){
//   var randTopbox = Math.floor(Math.random()*100);
//    var randTopbox2 = Math.floor(Math.random()*100);

//    $('.roll-blocks').css({'margin-top': randTopbox+'%'});
//    $('.roll-blocks2').css({'margin-top': randTopbox2+'%'});

// }
// });

// setInterval(randomTop, 1000);

// function collisin(){

//   if (Math.abs(playerTop - fireTop) < 60 && Math.abs(playerLeft - fireLeft) < 60)
// }





// function hitColi(){
//   // var player = ($(".player").position());
//   var player = parseInt($('.player').css('top'));
//   var player = parseInt($('.player').css('top'));

//   var enemy = parseInt($('.roll-blocks-generic').css('top'));
//   var enemy = parseInt($('.roll-blocks-generic').css('left'));
//   // player = {x:5, y:5, width:20, hight:20};
//   // var enemy = ($(".roll-blocks").position());

//    // enemy = {x:15, y:15 , width: 70, hight:25};
//   if( player.x < enemy.x + enemy.width &&
//       player.x + player.width > enemy.x &&
//       player.y < enemy.y + enemy.hight &&
//       player.hight + player.y > enemy.y)
//       {
//       console.log('hit');
//         }else {
//       console.log('****');
//     }
//   }
// hitColi();
// });

// if( player.x < enemy.x + enemy.width &&
//       player.x + player.width > enemy.x &&
//       player.y < enemy.y + enemy.hight &&
//       player.hight + player.y > enemy.y)
//       {
//       console.log('hit');
//         }else {
//       console.log('****');
//     }
//   }





