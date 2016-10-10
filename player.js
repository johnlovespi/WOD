console.log('working');
$(document).ready(function() {
  $(document).keydown(function(e){
    switch (e.which) {
    case 38://key press will print out a string of "K"
    var upKey = Math.floor(parseInt($('.player').css('top')));
        if( upKey >= 20){
        $(".player").animate({top: '-=30'}, 10);
        }
      break;
     case 40:
     var  downKey = Math.floor(parseInt($('.player').css('top')));
     if( downKey < 490){
        $(".player").animate({top: '+=30'}, 10);
      }
      // break;
      // case 32:
      // var bullets = (parseInt*)
    }
  })

  //bring down hight for body
  // ad imgs


  const width = window.innerWidth;
      const $deathStar = $('<div />',{class:'deathStar'});
      $deathStar
      .css({
          right: width,
      })
        $(".deathStar").animate({right: 100}, 25000)
       $("deathStar").css({right: '1000px'});



      // $(this).appendTo('body')
      // $(this).css({right: '49'});

////////////////////////////

var locate = window.location.name

function delineate(str) {
  theleft = str.indexOf("=") + 1;
  theright = str.lastIndexOf("&");
return(str.substring(theleft, theright));
}

////////////////////////////








createblocks(6090);
collisonDetection();
delineate();
deathStar();

});

function animateBlock(speed){
    const width = window.innerWidth;
  const $newBlock = $('<div />',{class:'rollBlock'});
  $newBlock
    .css({
      left: width,
      top: Math.floor(Math.random()*480),
      backgroundColor:('red')
    })
    .animate({left: -100},speed, 'linear')
    .appendTo($('.flex-container'))
}






function createblocks(startSpeed) {
  let speed = startSpeed;

  const timerNumber = setInterval( function(){
    // reset to startSPeed if we've dropped below zero, otherwise,
    // leave it alone
    speed = (speed < 0) ? startSpeed : speed;
    console.log(speed)
    return animateBlock(speed-=10)
  }, 300);
}

// function deathStar(){
//    const width = window.innerWidth;
//       // const $deathStar = $('<div />',{class:'deathStar'});
//       // $deathStar
//       // .css({
//       //   left: width,
//       //    // top: '10px',
//       //   })
//       //   .animate({left: -100},1000)
//       //   .appendTo($('body'));
//       $(".deathStar").animate({left: 90},1000)
//         $("deathStar").css({left: '900px'});
//   }








/// Collision Function !!
function testCollision(enemy) {

  var player = {};
  player.top = $(".player").position().top;
  player.left = $(".player").position().left;
  player.height = parseInt($(".player").css('height'));
  player.width = parseInt($(".player").css('width'));

  var rollBlock = {};
  rollBlock.top = enemy.position().top;
  rollBlock.left = enemy.position().left;
  rollBlock.height = parseInt(enemy.css('height'));
  rollBlock.width = parseInt(enemy.css('width'));

  if (((player.left + player.width)  >= rollBlock.left) &&
      ((player.top  + player.height) >= rollBlock.top)  &&
      ((rollBlock.left + rollBlock.width)  > player.left) &&
      ((rollBlock.top  + rollBlock.height) > player.top))
  {
    console.log('HIT!');//this will happen to hit
      //counter to check need varilbes to count :thought
      //if statment to run connditon
      // triggerExplosion(player.top, player.left);
  }
}

//Check if taget Got hit every 50 milliseconds

function collisonDetection() {
  setInterval(function() {
    $('.rollBlock').each(function(){
       testCollision($(this));
    })
    }, 10);
}
collisonDetection();



// var locate = window.location.name

// function delineate(str) {
//   theleft = str.indexOf("=") + 1;
//   theright = str.lastIndexOf("&");
// return(str.substring(theleft, theright));
// }





// var s = function deathStar(e){
//   //  const width = window.innerWidth;
//   const $deathStar = $('<div />', {class:'deathStar'});
//   $deathStar
//     .css({
//       left: width})
//   //     // top:  Math.floor(Math.random()*40),
//   //     backgroundColor:('red')
//     // })

//   // document.select('')
//     .animate({left: -100}, 100)
//     .appendTo($('body'))
// }














