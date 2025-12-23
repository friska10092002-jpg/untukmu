const opening = document.getElementById("opening");
const container = document.querySelector(".container");
const music = document.getElementById("music");

/* OPENING → KONTEN */
const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {
  opening.style.opacity = "0";
  opening.style.transition = "1.5s ease";

  setTimeout(() => {
    opening.style.display = "none";
    container.classList.remove("hidden");
    music.play();
  }, 1500);
});

/* TEKS MUNCUL BERURUT */
document.querySelectorAll(".line").forEach((line, i) => {
  line.style.animationDelay = `${i * 0.6}s`;
});

/* SAKURA */
const sakura = document.getElementById("sakura");
for (let i = 0; i < 25; i++) {
  const petal = document.createElement("span");
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 5 + Math.random() * 5 + "s";
  sakura.appendChild(petal);
}
