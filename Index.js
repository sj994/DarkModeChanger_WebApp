
function MoodChanger() {
    let element = document.firstElementChild.lastElementChild;
    element.classList.toggle("dark-mode");

    let heading = document.getElementById("msg");
    if (heading.innerHTML === "Good morning") {
        heading.innerHTML = "Good evening";
    } else {
        heading.innerHTML = "Good morning";
    }
}





































