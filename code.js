// Declaration des function

function set_bar(){
  let section_nav = document.getElementById('navigation_bar');
  let text_vrac = "<nav><ul class=''><li> <a href='./index.html'>Accueil</a> </li><li> <a href='./saisons.html'>Saisons</a> </li><li> <a href='./personnages.html'>Personnages</a> </li><li> <a href='./quizz.html'>Quizz</a> </li></ul></nav>";
  section_nav.innerHTML = text_vrac;

}

function set_banner() {
  let header_banner = document.getElementById('banner');
  let text_vrac = '<img src="./imgs/banner.jpg" alt=""/>';
  header_banner.innerHTML = text_vrac;
}

// Initialisation

set_bar();
set_banner();
