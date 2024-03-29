const date = document.getElementById('date')
const setCurrentYear = () => {
	const currentYear = new Date().getFullYear()
	date.textContent = currentYear
}
setCurrentYear()

// hamburger menu
const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
const socials = document.querySelector('.social-nav')
const navLinks = document.querySelectorAll('.nav-links')
const idiomas= document.getElementById('idiomas')
const textToChange= document.querySelectorAll('[data-section]')

const toggleMobileMenu = () => {
	hamburger.classList.toggle('open')
	navList.classList.toggle('open')
	socials.classList.toggle('open')
	document.body.classList.toggle('open')
}

navLinks.forEach(link => link.addEventListener('click', toggleMobileMenu))
hamburger.addEventListener('click', toggleMobileMenu)

// initialize aos (library for scroll animation)
AOS.init()

let typed=new Typed(".text",{
strings:["Full Stack Developer","Frontend Developer","Backend Developer"],
typeSpeed:140,
backSpeed:60,
backDeLay:60,
loop:true
});



const cambiarIdioma= async language=>{
	const request= await fetch(`./idiomas/${language}.json`);
	const data= await request.json();
	
	for(const element of textToChange){
		const value=element.dataset.value;
		const section=element.dataset.section;
		element.innerHTML=data[section][value];
	}

}

idiomas.addEventListener('click',(e)=>{
	cambiarIdioma(e.target.parentElement.dataset.language);
	typed2.strings=["Soy un apasionado de la programación, me encanta aprender y tener retos que me ayuden a creceaaar como profesional."];
})