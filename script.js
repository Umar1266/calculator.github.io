// 


// script.js

function c(button) {
    const display = document.querySelector("#cal");

    if (button === "") {
        display.textContent = "";
        return;
    }

    let current = display.textContent;

    if (button === "=") {
        solve();
        return;
    }

    if (button === "AC") {
        display.textContent = "";
        return;
    }

    if (button === "x") button = "*";

    display.textContent += button;
}

function solve() {
    const display = document.querySelector("#cal");
    let problem = display.textContent;

    try {
        const result = eval(problem);
        display.textContent = result;
    } catch {
        display.textContent = "Error";
    }
}
