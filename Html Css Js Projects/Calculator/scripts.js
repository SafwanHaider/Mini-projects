// Selecting the input display and all buttons
let display = document.querySelector("input");
let buttons = document.querySelectorAll(".button");

// Variable to store the current expression
let expression = "";

// Function to update the display
function updateDisplay() {
    display.value = expression;
}

// Function to handle button clicks
function handleButtonClick(buttonText) {
    if (buttonText === "AC") {
        expression = ""; // Clear everything
    } else if (buttonText === "Back") {
        expression = expression.slice(0, -1); // Remove last character
    } else if (buttonText === "=") {
        try {
            expression = eval(expression.replace("X", "*")); // Evaluate expression
            if (expression === Infinity || expression === -Infinity || isNaN(expression)) {
                throw new Error("Math Error"); // Handle division by zero, etc.
            }
        } catch {
            expression = "Invalid Input"; // Better error message
            setTimeout(() => (expression = ""), 1500); // Clear after 1.5 sec
        }
    } else {
        expression += buttonText.replace("X", "*"); // Append button's value
    }
    updateDisplay(); // Update screen
}

// Adding event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        handleButtonClick(button.innerText);

        // Add animation effect
        button.classList.add("button-clicked");
        setTimeout(() => button.classList.remove("button-clicked"), 150);
    });
});

// Handling keyboard inputs
document.addEventListener("keydown", (event) => {
    let key = event.key;

    // Allowed keys (numbers, operators, Enter, Backspace, Delete)
    if (/[0-9+\-*/.%]/.test(key)) {
        expression += key;
    } else if (key === "Enter") {
        handleButtonClick("=");
    } else if (key === "Backspace") {
        handleButtonClick("Back");
    } else if (key === "Escape") {
        handleButtonClick("AC");
    }

    updateDisplay();
});
