// $('.single-item-rtl').slick({
//     rtl: true
//   });

// 

$num = $('.box.bg-white').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.box.bg-white:nth-child(' + $even + ')').addClass('active');
  $('.box.bg-white:nth-child(' + $even + ')').prev().addClass('prev');
  $('.box.bg-white:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.box.bg-white:nth-child(' + $odd + ')').addClass('active');
  $('.box.bg-white:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.box.bg-white:nth-child(' + $odd + ')').next().addClass('next');
}

$('.box.bg-white').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.row').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.row').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


  $('.box.bg-white').click(function () {
      $slide = $('.active').width();
      console.log($('.active').position().left);

      if ($(this).hasClass('next')) {
          $('.row').stop(false, true).animate({left: '-=' + $slide});
      } else if ($(this).hasClass('prev')) {
          $('.row').stop(false, true).animate({left: '+=' + $slide});
      }

      $(this).removeClass('prev next');
      $(this).siblings().removeClass('prev active next');

      $(this).addClass('active');
      $(this).prev().addClass('prev');
      $(this).next().addClass('next');
  });


// Keyboard nav
  $('html body').keydown(function (e) {
      if (e.keyCode == 37) { // left
          $('.active').next().trigger('click');
      } else if (e.keyCode == 39) { // right
          $('.active').prev().trigger('click');
      }
  });

  $("#next-project").click(function () {
      $('.active').next().trigger('click');
  });

  $("#prev-project").click(function () {
      $('.active').prev().trigger('click');
  });

  
  $( function() {
    $( ".datepicker" ).datepicker();
  } );



function toggleFav(el){
  console.log(el)
  let element = $(el)
  if(element.hasClass('heart-white')){
      element.removeClass('heart-white').addClass('heart-red');
  }else{
    element.removeClass('heart-red').addClass('heart-white');
  }
}
