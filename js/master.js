



function disagreePolicy(){
  $(".container").hide();
  $(".public-notice").hide();
  $(".nothing-to-show").slideDown()
}
function agreePolicy(){
  $(".public-notice").hide();
  $("body").css("overflow","visible");
}

function openMenu(){
  $(".fa-bars").hide();
  $(".fa-times").show();
  $(".mobile-header").slideDown();
}
function closeMenu(){
  $(".fa-times").hide();
  $(".fa-bars").show();
  $(".mobile-header").slideUp();
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
  }
}
}


$(document).ready(function(){
  w3.includeHTML();

  // WARNING: PAGE LOADED
  $("html, body").animate({ scrollTop: 0 }, "slow");

    setTimeout(
      function(){
        $(".public-notice").fadeIn();
      }, 3000
    );




});
// WARNING: WHEN A PLAN IS CLICKED
function subscriptionPlan(){
  $(".container").hide();
  $(".contact-section").show();
}

function closeContact(){
  $(".contact-section").hide();
  $(".container").fadeIn();
}

// WARNING: HOW TO CONTACT USER OPTION
function mobileSelect(x){
  if ($(x).css("display") == "none") {
    $(".select-input-box").slideUp();
    $(x).slideDown();
    $(".mobile-option .fa-plus").hide();
    $(".mobile-option .fa-minus").show();
  }else {
    $(x).slideUp();
    $(".mobile-option .fa-plus").show();
    $(".mobile-option .fa-minus").hide();
  }
}

function emailSelect(x){
  if ($(x).css("display") == "none") {
    $(".select-input-box").slideUp();
    $(x).slideDown();
    $(".email-option .fa-plus").hide();
    $(".email-option .fa-minus").show();
  }else {
    $(x).slideUp();
    $(".email-option .fa-plus").show();
    $(".email-option .fa-minus").hide();
  }
}

function legendarySelect(x){
  if ($(x).css("display") == "none") {
    $(".select-input-box").slideUp();
    $(x).slideDown();
    $(".legendary-option .fa-plus").hide();
    $(".legendary-option .fa-minus").show();
  }else {
    $(x).slideUp();
    $(".legendary-option .fa-plus").show();
    $(".legendary-option .fa-minus").hide();
  }
}
