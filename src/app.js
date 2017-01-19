import './styles/header.css';
import './styles/main.css';
import './styles/sections/home.css';
import './styles/sections/about.css';
import './styles/sections/projects.css';
import './styles/footer.css';

$(window).on("load resize", function () {
    $("#home, #about, #projects").css("height", window.innerHeight);
});

const homeWords = $(".home-words");
const homeQuotes = $(".home-quotes");

for (let i = 0; i < homeWords.length; i++) {
    $(homeWords[i]).on({
        mouseenter: function() {
            $(homeQuotes[i]).removeClass("hidden");
        },
        mouseleave: function() {
            $(homeQuotes[i]).addClass("hidden");
        }
    });
}
