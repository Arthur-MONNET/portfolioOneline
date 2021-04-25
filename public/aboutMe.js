const imgMe = document.querySelector("#imgMe")
const imgMeBack = document.querySelector("#imgMeBack")
const svg1 = document.querySelector("#svg1")
const svg2 = document.querySelector("#svg2")

document.addEventListener("mousemove", (e) => {
    imgMe.style = `bottom : calc(-10vh + (${e.clientY}px - 450px)/150); left : calc(100vw - 1650px + 60px + (${-e.clientX}px - 450px)/120);`
    imgMeBack.style = `bottom : calc(-20vh + (${e.clientY}px - 450px)/50); left : calc(100vw - 1650px - 60px + (${-e.clientX}px - 450px)/20)`
    svg1.style = `bottom : calc(5vh + (${e.clientY}px - 450px)/80); left : calc(100vw - 1650px + 50px + (${-e.clientX}px - 450px)/50)`
    svg2.style = `bottom : calc(35vh + (${e.clientY}px - 450px)/30); left : calc(100vw - 1650px + 450px + (${-e.clientX}px - 450px)/15)`
})

