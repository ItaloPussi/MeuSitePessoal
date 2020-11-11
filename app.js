const body = document.querySelector("body")
const nav = document.querySelector("nav")
const presentation = document.querySelector(".presentation")
const links = nav.querySelectorAll("li")

const portfolioItems = document.querySelectorAll("#portfolio main aside li")
portfolioItems.forEach(item=> item.addEventListener("click", handlePortfolioItemDisplay))

 function handlePortfolioItemDisplay(){
	portfolioItems.forEach(item => item.classList.remove("selected"))
	this.classList.add("selected")

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			const div = document.createElement("div")
			div.innerHTML = this.responseText
			document.getElementById("portfolio-text-container").innerHTML = ''
			document.getElementById("portfolio-text-container").appendChild(div)
			translate(lang[language.value])
			// document.getElementById("portfolio-text-container").innerHTML = this.responseText;
		}
	};
	 xhttp.open("GET",`portfolio/${this.dataset.file}.html`, true);
	xhttp.send();

}
const toggleBar = document.querySelector("#toggleBar")

toggleBar.addEventListener("change",()=>{
	nav.classList.toggle("open")

})
links.forEach(link=>link.addEventListener("mouseover", ()=>nav.style.color="grey"))
links.forEach(link=>link.addEventListener("mouseout", ()=>nav.style.color="#e2e2e2"))


//  Language process related

const lang = {
	"br": langPt,
	"en": langEn
}

const language = document.querySelector("#language")
language.addEventListener("change", (e)=> {
	localStorage.setItem("lang", e.target.value)
	translate(lang[e.target.value])
})

function translate(selectedLang){
	wrappers = document.querySelectorAll("[data-wrapper]")
	wrappers.forEach(wrapper=>{
		wrapper.textContent = selectedLang[wrapper.dataset.wrapper]
	})
}

function inicializeLanguage(){
	const defaultLanguage = localStorage.getItem("lang")

	if(defaultLanguage != null){
		translate(lang[defaultLanguage])
		language.value = defaultLanguage
	}else{
		const getLanguage = () => navigator.userLanguage || (navigator.languages && navigator.languages.length && navigator.languages[0]) || navigator.language || navigator.browserLanguage || navigator.systemLanguage || 'en';
		let navigatorLang = ''
		if(getLanguage().includes("pt-")){
			navigatorLang = "br"
		}else{
			navigatorLang = "en"
		}
		language.value = navigatorLang
		translate(lang[navigatorLang])
	}
	
}

inicializeLanguage()
	
