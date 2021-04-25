const textTitle = document.querySelector("#textTitle")
const arrows = document.querySelector("#arrows")
const linkCreation = document.querySelector("#linkCreations")
const arrowLeft = document.querySelector("#arrowLeft")
const arrowRight = document.querySelector("#arrowRight")
let numSlide = 1
window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight - 80) {
        menu.style.color = "black"
    } else {
        menu.style.color = "white"
    }
})
window.addEventListener("load", () => {
    changeSlide(numSlide,0)
})

function changeSlide(num,mov){
    if (mov!==0){
        
    }
    textTitle.innerHTML =""

    for (let i = 0; i < dataDribbble[num].title.length; i++) {
        if (dataDribbble[num].title.substring(i,i+1)==="_"){
            textTitle.innerHTML += `<div class="spaceTitle"></div>`
        }else{
            textTitle.innerHTML +=`<h2>${dataDribbble[num].title.substring(i,i+1).toUpperCase()}</h2>`
        }
    }

    arrows.style = `color : ${dataDribbble[num].description.substring(dataDribbble[num].description.indexOf("$color") + 7, dataDribbble[num].description.indexOf("!color"))}aa`
    document.querySelector("#imgSlide").src = dataDribbble[num].images.hidpi
    document.querySelector("#descProject").innerHTML = dataDribbble[num].description.substring(dataDribbble[num].description.indexOf("$desc") + 6, dataDribbble[num].description.indexOf("!desc"))
    linkCreation.addEventListener("mouseover", () => {
        linkCreation.style = `border: ${dataDribbble[num].description.substring(dataDribbble[num].description.indexOf("$color") + 7, dataDribbble[num].description.indexOf("!color"))}00 solid 3px; background: ${dataDribbble[num].description.substring(dataDribbble[num].description.indexOf("$color") + 7, dataDribbble[num].description.indexOf("!color"))}99; color : white`
    })
    linkCreation.addEventListener("mouseout", () => {
        linkCreation.style = `border: ${dataDribbble[num].description.substring(dataDribbble[num].description.indexOf("$color") + 7, dataDribbble[num].description.indexOf("!color"))}99 solid 3px`
    })
    linkCreation.style = `border: ${dataDribbble[num].description.substring(dataDribbble[num].description.indexOf("$color") + 7, dataDribbble[num].description.indexOf("!color"))}99 solid 3px`
    document.querySelector("#decoSlide").style = `background : ${dataDribbble[num].description.substring(dataDribbble[num].description.indexOf("$color") + 7, dataDribbble[num].description.indexOf("!color"))}`
}

arrowLeft.addEventListener("click", ()=> {
    numSlide--
    if (numSlide<0){
        numSlide = dataDribbble.length-1
    }
    changeSlide(numSlide,-1)
})
arrowRight.addEventListener("click", ()=> {
    numSlide++
    if (numSlide>dataDribbble.length-1){
        numSlide = 0
    }
    changeSlide(numSlide,1)
})



