// Мельничук Максим
// Варіант 9

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

// Наступна дата
const dayInput = document.getElementById("day") as HTMLInputElement;
const monthInput = document.getElementById("month") as HTMLInputElement;
const yearInput = document.getElementById("year") as HTMLInputElement;
const nextDateBtn = document.getElementById("nextDateBtn") as HTMLButtonElement;
const nextDateResult = document.getElementById(
  "nextDateResult"
) as HTMLParagraphElement;

nextDateBtn.addEventListener("click", () => {
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  if (
    isNaN(day) ||
    isNaN(month) ||
    isNaN(year) ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year < 1
  ) {
    nextDateResult.textContent = "Будь ласка, введіть коректну дату.";
    return;
  }

  // створюю об'єкт Date (місяць -1, бо в JavaScript він від 0 до 11)
  const inputDate = new Date(year, month - 1, day);

  // перевірка: чи дійсно така дата існує
  if (
    inputDate.getDate() !== day ||
    inputDate.getMonth() !== month - 1 ||
    inputDate.getFullYear() !== year
  ) {
    nextDateResult.textContent = "Недійсна дата.";
    return;
  }

  // додаю один день
  inputDate.setDate(inputDate.getDate() + 1);

  const nextDay = inputDate.getDate().toString().padStart(2, "0");
  const nextMonth = (inputDate.getMonth() + 1).toString().padStart(2, "0");
  const nextYear = inputDate.getFullYear();

  nextDateResult.textContent = `Наступна дата: ${nextDay}.${nextMonth}.${nextYear}`;
});

// Кратні числа
const divisorInput = document.getElementById("divisor") as HTMLInputElement;
const divisibleBtn = document.getElementById(
  "divisibleBtn"
) as HTMLButtonElement;
const divisibleResult = document.getElementById(
  "divisibleResult"
) as HTMLParagraphElement;

divisibleBtn.addEventListener("click", () => {
  const divisor = parseInt(divisorInput.value);

  if (isNaN(divisor) || divisor <= 0) {
    divisibleResult.textContent =
      "Будь ласка, введіть коректне число більше 0.";
    return;
  }

  const multiples: number[] = [];
  for (let i = 1; i <= 100; i++) {
    if (i % divisor === 0) {
      multiples.push(i);
    }
  }

  divisibleResult.textContent = `Числа від 1 до 100, кратні ${divisor}: ${multiples.join(
    ", "
  )}`;
});

// Обчислити площу
function calculateFlexibleArea(length: number, width?: number): number {
  return width === undefined ? length * length : length * width;
}

const length2Input = document.getElementById("length2") as HTMLInputElement;
const width2Input = document.getElementById("width2") as HTMLInputElement;
const areaBtn2 = document.getElementById("areaBtn2") as HTMLButtonElement;
const areaResult2 = document.getElementById(
  "areaResult2"
) as HTMLParagraphElement;

areaBtn2.addEventListener("click", () => {
  const length = parseFloat(length2Input.value);
  const width =
    width2Input.value === "" ? undefined : parseFloat(width2Input.value);

  if (isNaN(length) || length <= 0) {
    areaResult2.textContent = "Введіть коректну довжину.";
    return;
  }

  if (width !== undefined && (isNaN(width) || width <= 0)) {
    areaResult2.textContent =
      "Введіть коректну ширину або залиште поле порожнім.";
    return;
  }

  const area = calculateFlexibleArea(length, width);
  areaResult2.textContent = `Площа: ${area}`;
});

// Замовлення морозива
const calculateBtn = document.getElementById(
  "calculateBtn"
) as HTMLButtonElement;
const resultP = document.getElementById(
  "iceCreamResult"
) as HTMLParagraphElement;

calculateBtn.addEventListener("click", () => {
  // розмір стаканчика
  const size = (
    document.querySelector('input[name="size"]:checked') as HTMLInputElement
  ).value;
  let price = size === "small" ? 10 : 25;

  // начинки
  const toppingCheckboxes = document.querySelectorAll<HTMLInputElement>(
    'input[type="checkbox"]:not(#marshmallow)'
  );
  let selectedToppings: string[] = [];

  toppingCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) selectedToppings.push(checkbox.value);
  });

  if (selectedToppings.length === 0) {
    resultP.textContent = "Будь ласка, оберіть хоча б одну начинку.";
    return;
  }

  for (const topping of selectedToppings) {
    switch (topping) {
      case "chocolate":
        price += 5;
        break;
      case "caramel":
        price += 6;
        break;
      case "berries":
        price += 10;
        break;
    }
  }

  // маршмелоу
  const marshmallow = (
    document.getElementById("marshmallow") as HTMLInputElement
  ).checked;
  if (marshmallow) price += 5;

  resultP.textContent = `Загальна вартість: ${price} грн`;
});
