const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function scrollToSection(event){
  event.preventDefault();
}

function getDistanceFromTheTop(element){
  const id = element.getAttribute("href");
  return document.querySelector(id). offsetTop;
};

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

console.log(section);