import './styles/header.css';
import './styles/index.css';
import './styles/sections/home.css';
import './styles/sections/about.css';
import './styles/sections/projects.css';
import './styles/footer.css';
import mixitup from './mixitup.min';
import parallax from './jquery.parallax.min';

// Resize each section to be height of window viewport
$(window).on('load resize', function () {
    $('#home, #about, #projects').css('height', window.innerHeight);
});

// Smooth scrolling from navbar link to corresponding section
$('nav a').on('click', function() {
   $('html, body').animate({
           scrollTop: $($(this).attr('href')).offset().top
       }, 1200, 'swing');
   event.preventDefault();
});

// Initialize parallax effect in home section
$('#scene').parallax({
    clipRelativeInput: true
});

// Handle hover event on home section words to show and hide quotes
const sceneWords = $('#scene .layer p');
const homeQuotes = $('#home-quotes blockquote');

console.log(sceneWords);
console.log(homeQuotes);

for (let i = 0; i < sceneWords.length; i++) {
    $(sceneWords[i]).on({
        mouseenter: function() {
            $(homeQuotes[i]).removeClass('hidden');
        },
        mouseleave: function() {
            $(homeQuotes[i]).addClass('hidden');
        }
    });
}

// Create mixitup Mixer for projects section
var mixer = mixitup('#portfolio-container');
