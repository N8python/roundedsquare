const display = document.getElementById("display");
let counter = 1;
let end = 2;
document.getElementById("back").addEventListener("click", () => {
    if (counter > 1) {
        counter--;
    }
    display.setAttribute("src", `assets/img_${counter}.png`);
});
document.getElementById("forward").addEventListener("click", () => {
    if (counter < end) {
        counter++;
    }
    display.setAttribute("src", `assets/img_${counter}.png`);
});