console.log('working');
$(document).ready(function() {

  var formInfo = window.location.search;

  function delineate(str) {
  theLeft = str.indexOf("=") + 1;
  theRight = str.lastIndexOf("&");
var name=(str.substring(theLeft, theRight));
  return name;
}

  var name = delineate(formInfo);
  var username = $('.username')
  // In order to carry username to next round (since it is on a serparate html file)
  // I need to save the username in a secret form that will submit to the next page
  // and can be displayed on the screen for round2 and round 3
  username.attr("value", name).hide();
  // Input the name that we pulled from the form into our name div so it will display
  // on the screen
  var nameBox = $('#name');
  var player1 = nameBox.text();
  nameBox.text(player1 + " " + name);




  $(document).keydown(function(e){
    switch (e.which) {
    case 38://key press will print out a string of "K"
            // moves player up on Pressed K let
    var upKey = Math.floor(parseInt($('.player').css('top')));
        if( upKey >= 20){
        $(".player").animate({top: '-=30'}, 10);
        }
      break;
     case 40: // moves player down on Pressed down K let
     var  downKey = Math.floor(parseInt($('.player').css('top')));
     if( downKey < 490){
        $(".player").animate({top: '+=30'}, 10);
      }
      // break;
      // case 32:
      // var blast = (parseInt($(".blast").)
    }
  })



  //function to move deathStar to the right
const width = window.innerWidth;
  const $deathStar = $('<div />',{class:'deathStar'});
    $deathStar
    .css({
      right: width,
    })
    $(".deathStar").animate({right: 700}, 30000)



       // submit form to next page
////////////////////////////



// var locate = window.location.search
// var form = $(".flex-item");


// delineate();
////////////////////////////

//this will pull userinformation from the url link




createblocks(3100);
collisonDetection();

deathStar();

});


function animateBlock(speed){
    const width = window.innerWidth;
  const $newBlock = $('<div />',{class:'rollBlock'});
  $newBlock
    .css({
      left: width,
      top: Math.floor(Math.random()*530),
      backgroundColor:('red')
    })
    .animate({left: -80},speed, 'linear')
    .appendTo($('.flex-container'))
}



function createblocks(startSpeed) {
  let speed = startSpeed;

  const timerNumber = setInterval( function(){
    // reset to startSPeed if we've dropped below zero, otherwise,
    // leave it alone
    speed = (speed < 0) ? startSpeed : speed;
    console.log(speed)
    return animateBlock(speed-=20)
  }, 450);
}



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
    //alert('HIT!');//this will happen on hit
     console.log('hit');
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





















