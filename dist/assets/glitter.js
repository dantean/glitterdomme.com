const glitter = document.createElement("div");
glitter.className = "glitter";
glitter.setAttribute("aria-hidden", "true");

const columns = [2.5, 12, 27, 42, 58, 73, 88, 97.5];
const rows = 7;

for (const column of columns) {
  for (let row = 0; row < rows; row += 1) {
    const sparkle = document.createElement("span");
    const isGlint = (columns.indexOf(column) + row) % 5 === 0;
    if (isGlint) sparkle.className = "glint";
    const duration = 6 + Math.random() * 7;
    sparkle.style.setProperty("--x", `${column + (Math.random() - 0.5) * 3}%`);
    sparkle.style.setProperty("--y", `${(row + 0.15 + Math.random() * 0.7) * 100 / rows}%`);
    sparkle.style.setProperty("--size", `${(isGlint ? 9 : 3) + Math.random() * 7}px`);
    sparkle.style.setProperty("--duration", `${duration}s`);
    sparkle.style.setProperty("--delay", `${-Math.random() * duration}s`);
    glitter.append(sparkle);
  }
}

document.body.prepend(glitter);
