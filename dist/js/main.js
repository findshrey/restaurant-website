// RESPONSIVE NAV
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
const links = navLinks.querySelectorAll("a")

// Hamburger menu
hamburger.addEventListener('click', () => {
   navLinks.classList.toggle('active')
})

// Individual links
links.forEach((link) => {
   link.addEventListener('click', () => {
      navLinks.classList.toggle('active')
   })
})
