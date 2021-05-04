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
const text = document.querySelector(".name");
const avatarName = document.getElementById("avatar-name");


class APIs {
   fetchPhoto () {
    fetch("https://api.github.com/users/nirajanp")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("avatar").setAttribute("src", data.avatar_url);
  }); 
   }
  
   fetchRepo() {
    fetch("https://api.github.com/users/nirajanp/repos")
    .then((res) => res.json())
    .then((data) => {
      
      for (let repo of data) {
        
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        const heading = document.createElement("h5");
        heading.setAttribute("class", "card-title");
        heading.innerHTML = repo.name.toUpperCase();
  
        cardBody.appendChild(heading);
        card.appendChild(cardBody);

        document.getElementById("repos").appendChild(card);
      }
    });  
   }
  
  sendEmail() {
    let form = document.getElementById("my-form");
        async function handleSubmit(event) {
          event.preventDefault();
          let status = document.getElementById("my-form-status");
          let data = new FormData(event.target);
          fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
          }).then(response => {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
          }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form"
          });
        }
        form.addEventListener("submit", handleSubmit)
  }

  geoAPI(){
    fetch("https://ipapi.co/json", {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      json: true,
    })
    .then((res) => res.json())
    .then((data) => {
      getLocation(data.city, data.region);
    })
   }
}

function getLocation(city, region) {
  const writeLoc = document.getElementById("loc");
      const locTemplate = document.getElementById("for-location");
      const locTemplateBody = document.importNode(locTemplate.content, true);
      locTemplateBody.getElementById("usr-loc").textContent = city + ", " + region;
      writeLoc.append(locTemplateBody);
}

function getDateFunc() {
  const writeDate = document.getElementById("date");
  const date = new Date();
  const dateTemplate = document.getElementById("for-date");
  const dateTemplateBody = document.importNode(dateTemplate.content, true);
  dateTemplateBody.getElementById("date-para").textContent =
    "Copyright © " + date.getFullYear();
  writeDate.append(dateTemplateBody);
}

const navCollapseFunction = function () {
    for (link of links) {
      link.addEventListener("click", () => {
        document.getElementById("navbarCollapse").className =
          "navbar-collapse collapse";
      });
    }
  };
  
function smoothScroll(target) {
    target = document.getElementById(target);
    window.scroll({
      top:
        target.getBoundingClientRect().y -
        document.body.getBoundingClientRect().y,
      behavior: "smooth",
    });
  }
  
const animation = function () {
    text.innerHTML = text.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    anime
      .timeline({ loop: true })
      .add({
        targets: ".name .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i + 1),
      })
      .add({
        targets: ".name",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  }



const apis = new APIs();
apis.fetchPhoto();
apis.fetchRepo();
apis.sendEmail();
apis.geoAPI();
animation();
navCollapseFunction();
getDateFunc();

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

avatarName.addEventListener("click", () => {
  smoothScroll("home-section");
})
