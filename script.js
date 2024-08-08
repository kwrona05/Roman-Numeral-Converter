const inputText = document.getElementById("number");
const button = document.getElementById("convert-btn");
const paragraph = document.getElementById("result");

const convert = () => {
    if (inputText.value === "") {
        paragraph.textContent = "Please enter a valid number";
    } else if (inputText.value === -1) {
        paragraph.textContent = "Please enter a number greater than or equal to 1";
    } else {
        paragraph.textContent = "Please enter valid number";
    }
};

button.addEventListener('click', convert);