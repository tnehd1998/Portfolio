"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// const items = document.querySelectorAll(".navbar__menu__item");
// const home = document.querySelector("#home");
// const about = document.querySelector("#about");
// const skills = document.querySelector("#skills");
// const work = document.querySelector("#work");
// const testimonials = document.querySelector("#testimonials");
// const contact = document.querySelector("#contact");
// const contactBtn = document.querySelector(".home__contact");

// for (let item of items) {
//   item.addEventListener("click", () => {
//     switch (item.innerText) {
//       case "Home":
//         home.scrollIntoView({ behavior: "smooth" });
//         break;
//       case "About":
//         about.scrollIntoView({ behavior: "smooth" });
//         break;
//       case "Skills":
//         skills.scrollIntoView({ behavior: "smooth" });
//         break;
//       case "My work":
//         work.scrollIntoView({ behavior: "smooth" });
//         break;
//       case "Testimonial":
//         testimonials.scrollIntoView({ behavior: "smooth" });
//         break;
//       case "Contact":
//         contact.scrollIntoView({ behavior: "smooth" });
//         break;
//     }
//   });
// }

// contactBtn.addEventListener("click", () => {
//   contact.scrollIntoView({ behavior: "smooth" });
// });

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});
