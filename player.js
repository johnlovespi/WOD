console.log('working');


$(document).ready(function() {

  $(document).keydown(function(e){
    switch (e.which) {
    case 38:
        if(parseInt($('.player').css('top')) > -290){
        $('.player').stop().animate({top: '-=100'});
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
function move() {
    $('.roll-blocks').animate({right: '+=1000px'}, 1000)
    // if('.roll-blocks')
     $('.roll-blocks2').animate({right: '+=1000px'}, 1000)
      // console.log('.roll-blocks').position;

};
setInterval(move, 1000);


// function myFunction() {
//
// }


 // $('.roll-blocks2').animate({right: '+=1000px'}, 1000)
 //      console.log($('.roll-blocks').position());




