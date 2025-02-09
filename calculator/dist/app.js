var display = document.getElementById("display");
var buttons = document.querySelectorAll(".btn");
var currentInput = "";
var operator = "";
var previousInput = "";
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var value = button.getAttribute("data-value");
        if (!value)
            return;
        if (value === "=") {
            if (previousInput && operator) {
                currentInput = eval(previousInput + " " + operator + " " + currentInput).toString();
                operator = "";
                previousInput = "";
            }
        }
        else if (["+", "-", "*", "/"].includes(value)) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = "";
            }
        }
        else {
            currentInput += value;
        }
        display.textContent = currentInput || "0";
    });
});
