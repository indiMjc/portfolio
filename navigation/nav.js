const page = document.querySelector(".page");

const navContainer = create("div");

navContainer.classList.add("nav-container");

page.prepend(navContainer);

navContainer.prepend(SmallerButton("Contact", "./contact/contact.html", 0.5, 0.5));
navContainer.prepend(SmallerButton("Github", "https://github.com/indiMjc", 0.5, 0.5));
navContainer.prepend(SmallerButton("About", "./about/about.html", 0.5, 0.5));