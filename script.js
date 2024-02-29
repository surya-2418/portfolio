// scroll
/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.backgroundcolor = "white";
  }
  else{
    document.getElementById("navbar").style.backgroundcolor = "transparent";
  }
}
*/
document.onscroll = function() {
  if( $(window).scrollTop() > $('header').height() ) {
      $('nav > div.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
  }
  else {
      $('nav > div.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
  }
};
// typing

var typed = new Typed(".typing-1",{
    strings: [
      "Devops Engineer" , "AWS Cloud" 
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2",{
    strings: [
        "AWS Cloud", "Devops Engineer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

