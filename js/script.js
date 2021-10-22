/*$(document).ready(function() {
    $(".clickable").click(function() {
      $(".walrus-showing").toggle();
    
        $(".walrus-hidden").toggle();
      });

  });*/

  $(document).ready(function() {
    $("button#hello").click(function() {
      $("ul.me").append("<li>Hello!</li>");
      $("ul.user").append("<li>how are you!</li>");
      $("ul.me").children("li").last().click(function() {
        $(this).remove();
      });
      $("ul.user").children("li").last().click(function() {
        $(this).remove();
      });
    });
    
  
    $("button#goodbye").click(function() {
      $("ul.me").prepend("<li>Goodbye!</li>");
      $("ul.user").prepend("<li>see you later!</li>");
      $('li').css('background-color', 'red');
    });
  
    $("button#stop").click(function() {
      $("ul.me").prepend("<li>Stop copying me!</li>");
      $("ul.user").prepend("<li>sorry about that!</li>");
      $('li').css('background-color', 'yellow');
    });
  });