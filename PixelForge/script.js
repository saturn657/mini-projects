const canvas = document.getElementById("pixelCanvas");
const gridSize = 32;
let drawing = false;
let currentColor = "#ff6584";
let eraserMode = false;

for (let i = 0; i < gridSize * gridSize; i++) {
  const pixel = document.createElement("div");
  pixel.className = "pixel";
  pixel.dataset.index = i;
  canvas.appendChild(pixel);
}

function paintPixel(pixel) {
  if (pixel && pixel.classList.contains("pixel")) {
    pixel.style.backgroundColor = eraserMode ? "#1c1c24" : currentColor;
  }
}

canvas.addEventListener("pointerdown", (e) => {
  if (e.target.classList.contains("pixel")) {
    drawing = true;
    canvas.setPointerCapture(e.pointerId);
    paintPixel(e.target);
  }
});

canvas.addEventListener("pointermove", (e) => {
  if (!drawing) return;
  const pixel = document.elementFromPoint(e.clientX, e.clientY);
  paintPixel(pixel);
});

canvas.addEventListener("pointerup", () => {
  drawing = false;
});

canvas.addEventListener("pointercancel", () => {
  drawing = false;
});

const palette = document.getElementById("palette");
const selectedHex = document.getElementById("selectedHex");
const customColor = document.getElementById("customColor");

function selectColor(color, button = null) {
  currentColor = color;
  selectedHex.textContent = color.toUpperCase();

  document.querySelectorAll(".swatch").forEach((swatch) => {
    swatch.classList.remove("active");
  });

  if (button) {
    button.classList.add("active");
  }
  eraserMode = false;
  eraserButton.classList.remove("active");
  eraserButton.textContent = "⌫ Eraser";
}

palette.addEventListener("click", (e) => {
  const button = e.target.closest(".swatch");
  if (!button) return;
  selectColor(button.dataset.color, button);
});

customColor.addEventListener("input", () => {
  selectColor(customColor.value);
});
const eraserButton = document.getElementById("eraserButton");
const clearButton = document.getElementById("clearButton");

eraserButton.addEventListener("click", () => {
  eraserMode = !eraserMode;
  eraserButton.classList.toggle("active", eraserMode);
  eraserButton.textContent = eraserMode ? "✎ Drawing" : "⌫ Eraser";
});

clearButton.addEventListener("click", () => {
  if (confirm("Clear your entire artwork?")) {
    document.querySelectorAll(".pixel").forEach((pixel) => {
      pixel.style.backgroundColor = "#1c1c24";
    });
  }
});
