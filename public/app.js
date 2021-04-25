const scrollWrap = document.querySelector("#scroll-wrap")
const menu = document.querySelector("#menu")


window.addEventListener("load", function(event) {
    console.log("Toutes les ressources sont chargées !");
});

const requestProjects = async () => {
    const response = await axios.get(`http://localhost:3000/getProject`)
    try {
        return response
    } catch (err) {
        console.log(err)
    }
}
let dataDribbble="";
requestProjects().then(response => {
    console.log(response.data)
    dataDribbble = response.data
})

window.addEventListener("scroll", ()=>{
    scrollWrap.style.transform = `translateY(${-window.scrollY}px)`
})









window.addEventListener("load", () =>{
    wait()
})
function wait()
{
    setTimeout(selectAlla, 1); //On attend 5 secondes avant d'exécuter la fonction
}
//pointer
function selectAlla(){
    let pointer = document.querySelector("#pointer");
    let alla = document.querySelectorAll("a, .button");
    document.addEventListener('mousemove', logKey);
    alla.forEach(a => {
        a.addEventListener('mouseover', logKeyOver);
        a.addEventListener('mouseout', logKeyNoOver);
    })

    document.addEventListener('mouseover', mouseIn)
    document.addEventListener('mouseout', mouseout)
    function logKey(e) {
        pointer.style.top = `${e.clientY-6}px`;
        pointer.style.left =`${e.clientX-6}px`;
    }
    function logKeyOver(e) {
        pointer.style.transform = `scale(2)`;
        pointer.style.background= "#ec860000";
    }
    function logKeyNoOver(e) {
        pointer.style.transform = `scale(1)`;
        pointer.style.background= "#ec8600";
    }
    function mouseout(e) {
        pointer.style.display = `none`;
    }
    function mouseIn(e) {
        pointer.style.display = `block`;
    }
}