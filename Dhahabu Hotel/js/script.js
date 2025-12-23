

const btn = document.getElementById("btn");
const box = document.getElementById("box");

btn.addEventListener("click", () => {
  box.classList.toggle("hidden");
  btn.textContent = box.classList.contains("hidden") ? "Show" : "Hide";
});
