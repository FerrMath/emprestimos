const menuBtn = document.querySelector('.menu_btn');
const faqItens = document.querySelectorAll('.faq_item');

// FAQ
faqItens.forEach(item => {
	item.addEventListener('click', ()=> {
		item.classList.toggle('hidden')
	})
})

// Dropdown menu
menuBtn.addEventListener("click", ()=> {
	const menu = document.querySelector('.header_menu')
	menu.classList.toggle('active')
})