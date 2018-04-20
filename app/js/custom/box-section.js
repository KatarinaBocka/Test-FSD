$(document).ready(function(){
    $(function() {

        $('#custom-btn1').hover(function() {
          $('.box1').css('background-color', '#ffff');
          $('.fa-thumbs-o-up').css('color', '#e2534b');
        }, function() {
          $('.box').css('background-color', '');
           $('.fa').css('color', '');
        });
      });

      $(function() {
        $('#custom-btn2').hover(function() {
          $('.box2').css('background-color', '#ffff');
          $('.fa-key').css('color', '#e2534b');
        }, function() {
          $('.box').css('background-color', '');
           $('.fa').css('color', '');
        });
      });

      $(function() {
        $('#custom-btn3').hover(function() {
          $('.box3').css('background-color', '#ffff');
          $('.fa-flag').css('color', '#e2534b');
        }, function() {
          $('.box').css('background-color', '');
           $('.fa').css('color', '');
        });
      });

      $(function() {
        $('#custom-btn4').hover(function() {
          $('.box4').css('background-color', '#ffff');
          $('.fa-flask').css('color', '#e2534b');
        }, function() {
          $('.box').css('background-color', '');
           $('.fa').css('color', '');
        });
      });
});