// Calculator Elements
const inputField = document.getElementById("inputs");
const keysContainer = document.getElementById("keys");
const fourthLast = document.getElementById("fourth-last");
const thirdLast = document.getElementById("third-last");
const secondLast = document.getElementById("second-last");
const last = document.getElementById("last");

let history = [];

// Button Click Handling
keysContainer.addEventListener("click", (e) => {
  const target = e.target;
  const value = target.textContent;

  if (target.tagName !== "BUTTON") return;

  switch (value) {
    case "AC":
      inputField.value = "";
      break;

    case "=":
      try {
        const result = eval(inputField.value);
        history.push(inputField.value + " = " + result);
        fourthLast.textContent = history[history.length - 4] || "";
        thirdLast.textContent = history[history.length - 3] || "";
        secondLast.textContent = history[history.length - 2] || "";
        last.textContent = history[history.length - 1];
        inputField.placeholder = result;
        inputField.value = "";
      } catch {
        inputField.placeholder = "Error";
      }
      break;

    case "+/-":
      if (inputField.value) {
        inputField.value = inputField.value.startsWith("-")
          ? inputField.value.slice(1)
          : "-" + inputField.value;
      }
      break;

    default:
      inputField.value += value;
  }
});

// Keyboard Support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (/[\d+\-*/().]/.test(key)) {
    inputField.value += key;
  }

  if (key === "Enter") {
    try {
      const result = eval(inputField.value);
      history.push(inputField.value + " = " + result);
      fourthLast.textContent = history[history.length - 4] || "";
      thirdLast.textContent = history[history.length - 3] || "";
      secondLast.textContent = history[history.length - 2] || "";
      last.textContent = history[history.length - 1];
      inputField.value = "";
      inputField.placeholder = result;
    } catch {
      inputField.value = "";
      inputField.placeholder = "Error";
    }
  }

  if (key === "Backspace") {
    inputField.value = inputField.value.slice(0, -1);
    e.preventDefault();
  }

  if (key === "Escape") {
    inputField.value = "";
  }
});

// Theme Toggle Logic
const mode = document.getElementById("mode");
const body = document.getElementById("body");

let lightmode = true;

// Load saved theme
const savedMode = localStorage.getItem("themeMode");

if (savedMode === "dark") {
  mode.style.backgroundColor = "var(--background)";
  mode.style.color = "white";
  body.className = "darkmode";
  lightmode = false;
  svgMarkup = `
    <svg width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_429_11017)">
<path d="M20.9955 11.7115L22.2448 11.6721C22.2326 11.2847 22.0414 10.9249 21.7272 10.698C21.413 10.4711 21.0113 10.4029 20.6397 10.5132L20.9955 11.7115ZM12.2885 3.00454L13.4868 3.36028C13.5971 2.98873 13.5289 2.58703 13.302 2.2728C13.0751 1.95857 12.7153 1.76736 12.3279 1.75516L12.2885 3.00454ZM20.6397 10.5132C20.1216 10.667 19.5716 10.75 19 10.75V13.25C19.815 13.25 20.6046 13.1314 21.3512 12.9098L20.6397 10.5132ZM19 10.75C15.8244 10.75 13.25 8.17564 13.25 5H10.75C10.75 9.55635 14.4437 13.25 19 13.25V10.75ZM13.25 5C13.25 4.42841 13.333 3.87841 13.4868 3.36028L11.0902 2.64879C10.8686 3.39542 10.75 4.18496 10.75 5H13.25ZM12 4.25C12.0834 4.25 12.1665 4.25131 12.2492 4.25392L12.3279 1.75516C12.219 1.75173 12.1097 1.75 12 1.75V4.25ZM4.25 12C4.25 7.71979 7.71979 4.25 12 4.25V1.75C6.33908 1.75 1.75 6.33908 1.75 12H4.25ZM12 19.75C7.71979 19.75 4.25 16.2802 4.25 12H1.75C1.75 17.6609 6.33908 22.25 12 22.25V19.75ZM19.75 12C19.75 16.2802 16.2802 19.75 12 19.75V22.25C17.6609 22.25 22.25 17.6609 22.25 12H19.75ZM19.7461 11.7508C19.7487 11.8335 19.75 11.9166 19.75 12H22.25C22.25 11.8903 22.2483 11.781 22.2448 11.6721L19.7461 11.7508Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_429_11017">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

    `;
} else {
  mode.style.backgroundColor = "white";
  mode.style.color = "black";
  body.className = "";
  lightmode = true;
  svgMarkup = `
    <svg width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_429_11039)">
    <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M20 12H21" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M3 12H4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M12 20L12 21" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M12 3L12 4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M17.6569 17.6569L18.364 18.364" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M5.63605 5.63604L6.34315 6.34315" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M6.34314 17.6569L5.63603 18.364" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M18.364 5.63604L17.6568 6.34315" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </g>
    <defs>
      <clipPath id="clip0_429_11039">
        <rect width="24" height="24" fill="none"/>
      </clipPath>
    </defs>
    </svg>

    `;
}

mode.innerHTML = svgMarkup;

// Toggle theme on click
mode.addEventListener("click", () => {
  if (lightmode) {
    mode.style.backgroundColor = "var(--background)";
    mode.style.color = "white";
    body.className = "darkmode";
    svgMarkup = `
    <svg width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_429_11017)">
<path d="M20.9955 11.7115L22.2448 11.6721C22.2326 11.2847 22.0414 10.9249 21.7272 10.698C21.413 10.4711 21.0113 10.4029 20.6397 10.5132L20.9955 11.7115ZM12.2885 3.00454L13.4868 3.36028C13.5971 2.98873 13.5289 2.58703 13.302 2.2728C13.0751 1.95857 12.7153 1.76736 12.3279 1.75516L12.2885 3.00454ZM20.6397 10.5132C20.1216 10.667 19.5716 10.75 19 10.75V13.25C19.815 13.25 20.6046 13.1314 21.3512 12.9098L20.6397 10.5132ZM19 10.75C15.8244 10.75 13.25 8.17564 13.25 5H10.75C10.75 9.55635 14.4437 13.25 19 13.25V10.75ZM13.25 5C13.25 4.42841 13.333 3.87841 13.4868 3.36028L11.0902 2.64879C10.8686 3.39542 10.75 4.18496 10.75 5H13.25ZM12 4.25C12.0834 4.25 12.1665 4.25131 12.2492 4.25392L12.3279 1.75516C12.219 1.75173 12.1097 1.75 12 1.75V4.25ZM4.25 12C4.25 7.71979 7.71979 4.25 12 4.25V1.75C6.33908 1.75 1.75 6.33908 1.75 12H4.25ZM12 19.75C7.71979 19.75 4.25 16.2802 4.25 12H1.75C1.75 17.6609 6.33908 22.25 12 22.25V19.75ZM19.75 12C19.75 16.2802 16.2802 19.75 12 19.75V22.25C17.6609 22.25 22.25 17.6609 22.25 12H19.75ZM19.7461 11.7508C19.7487 11.8335 19.75 11.9166 19.75 12H22.25C22.25 11.8903 22.2483 11.781 22.2448 11.6721L19.7461 11.7508Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_429_11017">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

    `;
    lightmode = false;
  } else {
    mode.style.backgroundColor = "white";
    mode.style.color = "black";
    body.className = "";
    svgMarkup = `
    <svg width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_429_11039)">
    <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M20 12H21" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M3 12H4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M12 20L12 21" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M12 3L12 4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M17.6569 17.6569L18.364 18.364" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M5.63605 5.63604L6.34315 6.34315" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M6.34314 17.6569L5.63603 18.364" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M18.364 5.63604L17.6568 6.34315" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </g>
    <defs>
      <clipPath id="clip0_429_11039">
        <rect width="24" height="24" fill="none"/>
      </clipPath>
    </defs>
    </svg>

    `;
    lightmode = true;
  }

  mode.innerHTML = svgMarkup;
  localStorage.setItem("themeMode", lightmode ? "light" : "dark");
});
