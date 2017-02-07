import './styles/header.css';
import './styles/index.css';
import './styles/sections/home.css';
import './styles/sections/about.css';
import './styles/sections/projects.css';
import $ from 'jquery';
import mixitup from './mixitup.min';
import './jquery.parallax.min';
import './jquery.scrollify.min';

// Resize each section to be height of window viewport
$(window).on('load resize', function () {
    $('#home, #about, #projects').css('height', window.innerHeight);
});

// Initialize parallax effect in home section
(function($) {
    $('#scene').parallax({
        limitX: 60,
        limitY: 30
    });
})(jQuery);

// Scrollify
var navLinks = $('.pagination a'); // used in before method

$(function() {
    $.scrollify({
        section : 'section',
        easing: 'swing',
        scrollSpeed: 800,
        scrollbars: false,
        before: function(i, sections) {
            // Fade in active section when scrolled to it
            for (let s in sections) {
                $(sections[s]).removeClass('active');
            }
            $(sections[i]).addClass('active');

            // Update navigation indicator to show active section
            for (var j = 0; j < navLinks.length; j++) {
                $(navLinks[j]).removeClass('active');

            }
            $(navLinks[i]).addClass('active');

            // Change color of navigation depending on active section
            switch (i) {
                case 0:
                    $('.pagination').removeClass('bright');
                    break;
                case 1:
                    $('.pagination').addClass('bright');
                    break;
                case 2:
                    $('.pagination').addClass('bright');
                    break;
            }
        },
        after: function (i, sections) {

        }
    });
    $("header a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
    });

});


// Handle hover event on home section words to show and hide quotes
const sceneWords = $('#scene .word p');
const homeQuotes = $('#scene .quotes blockquote');

for (let i = 0; i < sceneWords.length; i++) {
    $(sceneWords[i]).on({
        mouseenter: function() {
            $(homeQuotes[i]).removeClass('hidden');
        },
        mouseleave: function() {
            $(homeQuotes[i]).addClass('hidden');
            // $(homeQuotes[i]).delay(500).queue(function() {
            //     $(this).addClass('hidden').dequeue();
            // });
        }
    });
}

// Create mixitup Mixer for projects section
mixitup('#mixitup-container');
