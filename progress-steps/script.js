const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  const actives = document.querySelectorAll(".active");

  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
      console.log("object");
    }
    if (currentActive > 1) {
      prev.disabled = false;
    } else {
      prev.disabled = true;
    }
    if (currentActive >= circles.length) {
      next.disabled = true;
    } else {
      next.disabled = false;
    }
  });
  console.log(actives.length, circles.length);
  width = ((currentActive - 1) / (circles.length - 1)) * 100;
  console.log(width);
  progress.style.width = `${width}%`;
}
