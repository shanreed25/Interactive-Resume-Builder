export function adjustTextSize(){
    document.addEventListener("DOMContentLoaded", function() {
    const decreaseBtn = document.getElementById("decreasetext");
    const resetBtn = document.getElementById("resettext");
    const increaseBtn = document.getElementById("increasetext");
    const content = document.getElementById("preview-content");

    let currentFontSize = parseFloat(window.getComputedStyle(content).fontSize); // Get initial size

    decreaseBtn.addEventListener("click", () => {
        currentFontSize -= 2; // Decrease by 2px (example)
        content.style.fontSize = `${currentFontSize}px`;
    });

    resetBtn.addEventListener("click", () => {
        content.style.fontSize = ""; // Reset to initial CSS value
        currentFontSize = parseFloat(window.getComputedStyle(content).fontSize);
    });

    increaseBtn.addEventListener("click", () => {
        currentFontSize += 2; // Increase by 2px (example)
        content.style.fontSize = `${currentFontSize}px`;
    });
});
}


