$(document).ready(function(){
  $(".luxury-plan h4").text("First class");
  $(".regular-plan h4").text("Second class");
  $(".economy-plan h4").text("Lower class");

  $(".luxury-plan .price").text("$55");
  $(".luxury-plan .calender").text("per month ");
  $(".luxury-plan .info").text("Advanced Billionaire Lifestyle and unlimited in-game transactions");

  $(".regular-plan .price").html("$30");
  $(".regular-plan .calender").html("per month ");
  $(".regular-plan .info").html("Advanced Billionaire Lifestyle and unlimited in-game transactions");

  $(".economy-plan .price").text("$15");
  $(".economy-plan .calender").text("per month ");
  $(".economy-plan .info").text("PIMPMYLIFE.COM Basic Hustler Lifestyle for those who want to start from ground zero.");
});
