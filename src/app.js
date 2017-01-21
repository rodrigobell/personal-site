import './styles/header.css';
import './styles/index.css';
import './styles/sections/home.css';
import './styles/sections/about.css';
import './styles/sections/projects.css';
import './styles/footer.css';


// Resize each section to be height of window viewport
$(window).on('load resize', function () {
    $('#home, #about, #projects').css('height', window.innerHeight);
});

// Smooth scrolling from navbar to page section
$('nav a').on('click', function() {
   $('html, body').animate({
           scrollTop: $($(this).attr('href')).offset().top
       }, 1200, 'swing');
   event.preventDefault();
});

// Hover handler for home section quotes
const homeWords = $('.home-words');
const homeQuotes = $('.home-quotes');

for (let i = 0; i < homeWords.length; i++) {
    $(homeWords[i]).on({
        mouseenter: function() {
            $(homeQuotes[i]).removeClass('hidden');
        },
        mouseleave: function() {
            $(homeQuotes[i]).addClass('hidden');
        }
    });
}
