import './styles/index.css';
import './styles/navbar.css';
import './styles/homeSection.css';
import './styles/aboutSection.css';
import './styles/projectsSection.css';
import './styles/footer.css';

$(window).on("load resize", function () {
    $(".fill-screen").css("height", window.innerHeight);
});
