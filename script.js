console.log("Wowie!");
let unselectedSections = document.getElementsByClassName("unselected");
let selectedSections = document.getElementsByClassName("selected");
let mainPageButtons = document.getElementsByClassName("mainpage-content-opener");
let hiddenButtons = document.getElementsByClassName("hidden");

function hideButtons() {
    for(i = 0; i<4; i++) {
        mainPageButtons[0].classList.replace("mainpage-content-opener", "hidden");
    }
}

function showButtons() {
    for(i = 0; i<4; i++) {
        hiddenButtons[0].classList.replace("hidden", "mainpage-content-opener");
    }
}

function openSection(section) {
    hideButtons()
    unselectedSections[section].classList.replace("unselected", "selected");
    for(i = 0; i<3; i++) {
        unselectedSections[i].removeAttribute("animate");
    }
}

function closeSelectedWindow(section) {
    selectedSections[section].setAttribute("closing", "");
    selectedSections[section].addEventListener(
        "animationend",
        () => {
            selectedSections[section].removeAttribute("closing");
            selectedSections[section].classList.replace("selected", "unselected");
        },
        { once: true }
    );
    showButtons();
    for(i=0; i<3; i++) {
        unselectedSections[i].setAttribute("animate", "");
        selectedSections[0].setAttribute("animate", "");
    }
}

function replaceSelectedWindow(section) {
    selectedSections[0].removeAttribute("animate");
    selectedSections[0].classList.replace("selected", "unselected");
    unselectedSections[section].classList.replace("unselected", "selected");
    unselectedSections[section].setAttribute("animate", "");
}