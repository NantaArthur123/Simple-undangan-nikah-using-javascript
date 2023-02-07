window.onload = function getname_undangan(){
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const nameurl = urlParams.get('name')
console.log(nameurl);
document.getElementsByClassName("nama_undangan")[0].innerHTML = nameurl;
document.getElementById("info").getElementsByClassName("nama_undangan")[0].innerHTML = nameurl
}


// AOS
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 3000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// SCROLLER
document.getElementById("info").onscroll = function () {  

}

// MusicPlay
function play(){
  var audio = document.getElementById("audio");
        audio.play();
  document.getElementById("first_modal").style.visibility ="hidden";
}




// Progressbar
function progressBarScroll() {
  let winScroll = document.getElementById("info").scrollTop || document.getElementById("info").scrollTop,
      height = document.getElementById("info").scrollHeight - document.getElementById("info").clientHeight,
      scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";

  scrollerpage4()
  scrollerpage5()
}

function scrollerpage4(){
  // buat image scroller
  var scrolltotop = document.getElementById("info").scrollTop;
  var target = document.getElementById("section4-bg");
  var xvalue = "center";
  var factor = 0.5;
  var yvalue = scrolltotop * factor;
  target.style.backgroundPosition = xvalue + " " + (yvalue+690) + "px";
}

function scrollerpage5(){
  // buat image scroller
  var scrolltotop = document.getElementById("info").scrollTop;
  var target = document.getElementById("section5-bg");
  var xvalue = "center";
  var factor = 0.5;
  var yvalue = scrolltotop * factor;
  target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}

document.getElementById("info").onscroll = function () {
  progressBarScroll();
};

// Timer
CountDownTimer('02/19/2023 11:00 AM', 'countdown');
CountDownTimer('02/19/2023 11:00 AM', 'newcountdown');

function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id).innerHTML = days + ' Hari ';
        document.getElementById(id).innerHTML += hours + ' Jam ';
        document.getElementById(id).innerHTML += minutes + ' Menit ';
        document.getElementById(id).innerHTML += seconds + ' Detik ';
    }

    timer = setInterval(showRemaining, 1000);
}


// Scroll smooth
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});