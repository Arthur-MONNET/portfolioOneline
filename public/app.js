
const requestProjects = async () => {
    const response = await axios.get(`http://localhost:3000/getProject`)

    try {
        return response
    } catch (err) {
        console.log(err)
    }
}

requestProjects().then(response => {
    console.log(response.data)
    var data = response.data


})












//pointer
let pointer = document.querySelector("#pointer");
let alla = document.querySelectorAll("a");
document.addEventListener('mousemove', logKey);
alla.forEach(a => {
    a.addEventListener('mouseover', logKeyOver);
    a.addEventListener('mouseout', logKeyNoOver);
})


document.addEventListener('mouseout', mouseout)
function logKey(e) {
    pointer.style.display = `block`;
    pointer.style.top = `${e.clientY-6}px`;
    pointer.style.left =`${e.clientX-6}px`;
}
function logKeyOver(e) {
    console.log("over")
    pointer.style.transform = `scale(2)`;
    pointer.style.background= "#ec860000";
}
function logKeyNoOver(e) {
    console.log("no over")
    pointer.style.transform = `scale(1)`;
    pointer.style.background= "#ec8600";
}
function mouseout(e) {
    pointer.style.display = `none`;
}