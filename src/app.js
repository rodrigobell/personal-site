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
        limitX: 40,
        limitY: 20
    });

})(jQuery);

// Scrollify
$(function() {
    $.scrollify({
        section : 'section',
        easing: 'swing',
        scrollSpeed: 800,
        scrollbars: false,
        before: function(i, sections) {
            for (let s in sections) {
                $(sections[s]).removeClass('active');
            }
            $(sections[i]).addClass('active');
        },
        after: function (i, sections) {
        }
    });
    $("header a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
    });

});


// Handle hover event on home section words to show and hide quotes
const sceneWords = $('#scene .layer p');
const homeQuotes = $('#home-quotes blockquote');

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
mixitup('#mixitup-container');
