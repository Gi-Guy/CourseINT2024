const display = document.getElementById("display") as HTMLDivElement;
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (!value) return;

        if (value === "=") {
            if (previousInput && operator) {
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`).toString();
                operator = "";
                previousInput = "";
            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = "";
            }
        } else {
            currentInput += value;
        }

        display.textContent = currentInput || "0";
    });
});
