const menuBtn = document.getElementById("menuBtn")

menuBtn.addEventListener('click', () => {
  const navListMenu = document.getElementById('navListMenu')
  console.log(navListMenu)
  navListMenu.classList.toggle('opened-mobile-menu')
})