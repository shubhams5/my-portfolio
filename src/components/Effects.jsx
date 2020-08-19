import { useEffect } from "react";

function Effects() {
  return useEffect(() => {
    const header = document.getElementById("myHeader");
    const navLink1 = document.getElementById("nav-home");
    const navLink2 = document.getElementById("nav-about");
    const navLink3 = document.getElementById("nav-project");
    const navLink4 = document.getElementById("nav-contact");
    const sticky = header.offsetTop;
    const title = document.getElementById("home");
    const about = document.getElementById("about");
    const work = document.getElementById("work");
    const contact = document.getElementById("contact");
    const titleActive = title.offsetTop;
    const aboutActive = about.offsetTop;
    const projectActive = work.offsetTop;
    const contactActive = contact.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
      if (window.pageYOffset > titleActive) {
        navLink1.classList.add("active");
      } else {
        navLink1.classList.remove("active");
      }
      if (window.pageYOffset > aboutActive) {
        navLink2.classList.add("active");
      } else {
        navLink2.classList.remove("active");
      }
      if (window.pageYOffset > projectActive) {
        navLink3.classList.add("active");
      } else {
        navLink3.classList.remove("active");
      }
      if (window.pageYOffset > contactActive) {
        navLink4.classList.add("active");
      } else {
        navLink4.classList.remove("active");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  });
}

export default Effects;
