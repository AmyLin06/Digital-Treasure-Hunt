$(".step1").click(function(){
    $(".info").text("Help King Arthur find his sword!");
    $(".step1").text("Double click for any information missed!");
});

$(".step1").dblclick(function(){
    $(".info").text("First clue: Click King Arthur's Portrait");
});

$(".firstclue").click(function(){
      $(".firstclue").hide();
});

$(".firstclue").click(function(){
      $(".secondclue").fadeIn();
      $(".info").text("You have found a key Now find the");
      $(".lock").text("lock!");
});

$(".lock").click(function(){
    $(".thirdclue").fadeIn();
    $(".info").text("Now open the");
});

$(".thirdclue").mouseenter(function(){
    $(".fourthclue").fadeIn();
    $(".thirdclue").fadeOut();
    $(".secondclue").fadeOut();
    $("body").css('background-image' , 'url(https://ak8.picdn.net/shutterstock/videos/3218218/thumb/1.jpg)');
    $(".info").text("YOU HAVE FOUND THE SWORD!!!");
    $(".lock").hide();
    $(".step1").hide();
    
    
});
















