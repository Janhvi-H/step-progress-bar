const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const nameEl = document.getElementById("name");
const circles = document.querySelectorAll(".circle");

let currentStep = 1;

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentStep) {
            circle.classList.add("active");
            circle.innerHTML = "<span class='tick'>&check;</span>";
        } else {
            circle.classList.remove("active");
            circle.innerHTML = "x";
        }
    });


    const activeCircles = document.querySelectorAll(".active");
    progress.style.width = ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";

    prev.disabled = currentStep === 1;
    next.disabled = currentStep === circles.length;
}

next.addEventListener("click", () => {
    if (currentStep < circles.length) {
        currentStep++;
        update();
    }
});

prev.addEventListener("click", () => {
    if (currentStep > 1) {
        currentStep--;
        update();
    }
});

update();