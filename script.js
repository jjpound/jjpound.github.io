console.log("Wowie!");
let aboutSection = document.getElementById("about-me");

function openAboutMe() {
     aboutSection.classList.replace("unselected", "selected");
}

function closeSelectedWindow() {
    aboutSection.classList.replace("selected", "unselected");
}