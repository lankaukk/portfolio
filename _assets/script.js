$(document).ready(function(){

  $('.box1').on('click', function(){
  		$('.project1').addClass('grow');
  });

  // $('.box2').on('click', function(){
  // 		$('.project2').addClass('grow');
  // });

  $('.box3').on('click', function(){
  		$('.project3').addClass('grow');
  });

  $('.box4').on('click', function(){
  		$('.project4').addClass('grow');
  });

  $('.box5').on('click', function(){
  		$('.project5').addClass('grow');
  });

  // $('.box6').on('click', function(){
  // 		$('.project6').addClass('grow');
  // });

  $('span').on('click', function(){
  		$('.project1, .project2, .project3, .project4, .project5, .project6').removeClass('grow');
  });

  $('.circle-1, .circle-2, .circle-3, .circle-4, .circle-5, .circle-6, .circle-7, .circle-8, .circle-9').on('click', function(){

  		$('.grid-item').toggleClass('spinny');
  });


  $('.circle1').on('mouseenter', function(){

      $('.circle1').addClass('bigred');
  });

  $('.circle1').on('mousereenter', function(){

      $('.circle1').removeClass('bigred');
      $('.circle1').addClass('first');
  });

  $('.circle1').on('click', function(){

      $('.circle1').removeClass('bigred');
      $('.circle1').addClass('first');
  });

  $('.circle2').on('mouseenter', function(){

  		$('.circle2').addClass('bigorange');

  });

  $('.circle2').on('click', function(){

  		$('.circle2').removeClass('bigorange');
  		$('.circle2').addClass('second');
  });



  $('.circle3').on('mouseenter', function(){

  		$('.circle3').addClass('bigyellow');

  });

  $('.circle3').on('click', function(){

  		$('.circle3').removeClass('bigyellow');
  		$('.circle3').addClass('third');

  });



  $('.circle4').on('mouseenter', function(){

  		$('.circle4').addClass('biggreen');

  });

  $('.circle4').on('click', function(){

  		$('.circle4').removeClass('biggreen');
  		$('.circle4').addClass('fourth');

  });





  $('.circle5').on('mouseenter', function(){

  		$('.circle5').addClass('bigteal');

  });

  $('.circle5').on('click', function(){

  		$('.circle5').removeClass('bigteal');
  		$('.circle5').addClass('fifth');
  });



  $('.circle6').on('mouseenter', function(){

  		$('.circle6').addClass('bigblue');

  });

  $('.circle6').on('click', function(){

  		$('.circle6').removeClass('bigblue');
  		$('.circle6').addClass('sixth');
  });


  $('.circle7').on('mouseenter', function(){

  		$('.circle7').addClass('bigpurple');

  });

  $('.circle7').on('click', function(){

  		$('.circle7').removeClass('bigpurple');
  		$('.circle7').addClass('seventh');
  });



  $('.circle8').on('mouseenter', function(){

  		$('.circle8').addClass('bigviolet');

  });

  $('.circle8').on('click', function(){

  		$('.circle8').removeClass('bigviolet');
  		$('.circle8').addClass('eighth');
  });



  $('.circle5').on('mouseenter', function(){

  		$('.circle5').addClass('darkcircle5');

  });

  $('.circle6').on('mouseenter', function(){

  		$('.circle6').addClass('darkcircle6');

  });

  $('.circle7').on('mouseenter', function(){

  		$('.circle7').addClass('darkcircle7');

  });


  $('.circle8').on('mouseenter', function(){

  		$('.circle8').addClass('darkcircle8');

  });



});
