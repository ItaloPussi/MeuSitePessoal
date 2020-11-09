const body = document.querySelector("body")
const nav = document.querySelector("nav")
const links = nav.querySelectorAll("li")

const toggleBar = document.querySelector("#toggleBar")

toggleBar.addEventListener("change",()=>{
	nav.classList.toggle("open")

})
links.forEach(link=>link.addEventListener("mouseover", ()=>nav.style.color="grey"))
links.forEach(link=>link.addEventListener("mouseout", ()=>nav.style.color="#e2e2e2"))