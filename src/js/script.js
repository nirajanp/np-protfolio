const navbar = document.getElementById("nav");
const links = navbar.getElementsByClassName("nav-link");
const arrow = document.getElementById("arrow");
const homeSection = document.getElementById("home-section");
const aboutMe = document.getElementById("abt-me");
const whatIDo = document.getElementById("work");
const resumeSection = document.getElementById("bio");
const skills = document.getElementById("expertese");
const myWork = document.getElementById("previous-work");
const clientSpeak = document.getElementById("comments");
const getInTouch = document.getElementById("contact-info");
const toTop = document.getElementById("top");

const user = {};

fetch("https://api.github.com/users/nirajanp")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.getElementById("avatar").setAttribute("src", data.avatar_url);
  });

  fetch("https://api.github.com/users/nirajanp/repos")
  .then((res) => res.json())
    .then((data) => {
      
    console.log(data);
    for (let repo of data) {
      //console.log(repo);
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      const cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
      const heading = document.createElement("h5");
      heading.setAttribute("class", "card-title");
      heading.innerHTML = repo.name;
      
      cardBody.appendChild(heading);
      card.appendChild(cardBody);
      console.log(card);
      document.getElementById("repos").appendChild(card);
    }
    });
  
const navCollapseFunction = function () {
  for (link of links) {
    link.addEventListener("click", () => {
      document.getElementById("navbarCollapse").className =
        "navbar-collapse collapse";
    });
  }
}

function smoothScroll(target) {
  target = document.getElementById(target);
  window.scroll({
    top:
      target.getBoundingClientRect().y -
      document.body.getBoundingClientRect().y,
    behavior: "smooth",
  });
}

navCollapseFunction();
//smoothScroll('about-me-section', 1000);

arrow.addEventListener("click", () => {
  smoothScroll("about-me-section");
});

aboutMe.addEventListener("click", () => {
  smoothScroll("about-me-section");
});

whatIDo.addEventListener("click", () => {
  smoothScroll("what-i-do");
});

resumeSection.addEventListener("click", () => {
  smoothScroll("resume-section");
});

skills.addEventListener("click", () => {
  smoothScroll("skills");
});

myWork.addEventListener("click", () => {
  smoothScroll("my-work");
});

clientSpeak.addEventListener("click", () => {
  smoothScroll("client-speak");
});

getInTouch.addEventListener("click", () => {
  smoothScroll("get-in-touch-section");
});

toTop.addEventListener("click", () => {
  smoothScroll("home-section");
});
