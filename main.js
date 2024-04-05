let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
// the method is used to select an element from the dom based on a specific css selector

menu.onclick = () => {
    navbar.classList.toggle('active');
}
// default method  for handling the hide and show for the selected elements
window.onscroll = () => {
    navbar.classList.remove('active');
}


