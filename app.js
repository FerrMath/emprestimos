const menuBtn = document.querySelector('.menu_btn');

// Dropdown menu
menuBtn.addEventListener("click", ()=> {
	const menu = document.querySelector('.header_menu')
	menu.classList.toggle('active')
})