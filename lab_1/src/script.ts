// Площа квадрата
const sideInput = document.getElementById("side") as HTMLInputElement;
const calcAreaBtn = document.getElementById("calcAreaBtn") as HTMLButtonElement;
const areaResult = document.getElementById(
  "areaResult"
) as HTMLParagraphElement;

calcAreaBtn.addEventListener("click", () => {
  const side = parseFloat(sideInput.value);

  if (isNaN(side) || side <= 0) {
    areaResult.textContent = "Введіть додатне число.";
    return;
  }

  const area = side * side;
  areaResult.textContent = `Площа квадрата: ${area}`;
});

// Обернене тризначне число
const numberInput = document.getElementById("number") as HTMLInputElement;
const reverseBtn = document.getElementById("reverseBtn") as HTMLButtonElement;
const reverseResult = document.getElementById(
  "reverseResult"
) as HTMLParagraphElement;

reverseBtn.addEventListener("click", () => {
  const value = parseInt(numberInput.value);

  if (isNaN(value) || value < 100 || value > 999) {
    reverseResult.textContent = "Введіть коректне тризначне число.";
    return;
  }

  const digit1 = value % 10;
  const digit2 = Math.floor((value % 100) / 10);
  const digit3 = Math.floor(value / 100);

  const reversed = digit1 * 100 + digit2 * 10 + digit3;
  reverseResult.textContent = `Обернене число: ${reversed}`;
});
