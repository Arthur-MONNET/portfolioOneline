const listProjects = document.querySelector("#listProjects")

window.addEventListener("load", () => {
    const body = document.querySelector("body")
    body.style.height = `calc(40vh + 150px + ${50 * dataDribbble.length}vh`
    console.log(dataDribbble.length)
    let order = "row"
    let numProject = 1;
    let numProjectWritten = "01."
    let orderText = "";
    for (let i = 0; i < dataDribbble.length; i++) {
        console.log(numProject);
        if (numProject < 10) {
            console.log(numProject);
            console.log(numProjectWritten);
            numProjectWritten = `0${numProject}.`
        } else {
            numProjectWritten = `${numProject}.`
        }
        listProjects.innerHTML += `<div class="projects" style="flex-direction: ${order}; justify-content: flex-start">
            <img src="${dataDribbble[i].images.hidpi}" class="imageProjects">
            <div class="numProject"><div class="lineProject" style="background: ${dataDribbble[i].description.substring(dataDribbble[i].description.indexOf("$color") + 7, dataDribbble[i].description.indexOf("!color"))}99"></div><h2>${numProjectWritten}</h2></div>
            <div class="textProject"><h3 ${orderText}>${dataDribbble[i].title.replace("_", " ")}</h3></div>
        </div>`
        numProject++;
        if (order === "row") {
            order = "row-reverse", orderText = `style = "text-align : end"`
        } else {
            order = "row", orderText = ""
        }
    }


})

