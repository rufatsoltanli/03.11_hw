const launchbutton = document.createElement("button")
launchbutton.classList.add("launch-button")
launchbutton.textContent = "Launch Button"
document.body.appendChild(launchbutton)
console.log(launchbutton);


const modalcont = document.createElement("div")
modalcont.classList.add("modal-container")
document.body.appendChild(modalcont)

const modalheader = document.createElement("div")
modalheader.classList.add("modal-header")
const headertext = document.createElement("h4")
headertext.textContent = "Modalin title-i"
const headerbutton = document.createElement("button")
headerbutton.innerHTML = "&times;"
modalcont.appendChild(modalheader)
modalheader.appendChild(headertext)
modalheader.appendChild(headerbutton)

const modalbody = document.createElement("div")
const bodytext = document.createElement("p")
bodytext.textContent = "Modalin bodisinin texti"
modalbody.appendChild(bodytext)
modalbody.classList.add("modal-body")
modalcont.appendChild(modalbody)

const modalfooter = document.createElement("div")
modalfooter.classList.add("modal-footer")
const foooterbutton1 = document.createElement("button")
foooterbutton1.classList.add("close")
foooterbutton1.textContent = "Close"
const foooterbutton2 = document.createElement("button")
foooterbutton2.classList.add("save")
foooterbutton2.textContent = "Save changes"
modalfooter.appendChild(foooterbutton1)
modalfooter.appendChild(foooterbutton2)
modalcont.appendChild(modalfooter)

console.log(modalcont);

launchbutton.addEventListener("click",function () {
    modalcont.style.display="block"
})

headerbutton.addEventListener("click",function () {
    modalcont.style.display="none"
})
foooterbutton1.addEventListener("click",function () {
    modalcont.style.display="none"
})
