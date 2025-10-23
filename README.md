# 🧮 Responsive Calculator Web App

A modern, responsive calculator built with HTML, CSS, and JavaScript. It supports keyboard input, expression evaluation with BODMAS logic, dark/light theme toggling, and displays the last four calculation results.

---

## 🚀 Features

- ✅ **Basic Arithmetic**: Supports +, −, ×, ÷, parentheses, decimals, and double zero.
- ⌨️ **Keyboard Support**: Type directly using your keyboard for faster input.
- 🧠 **BODMAS Logic**: Evaluates expressions using correct operator precedence.
- 🕘 **History Display**: Shows the last four calculations above the input field.
- 🌗 **Dark/Light Mode**: Toggle theme with a circular button; theme preference is saved using `localStorage`.
- 📱 **Responsive Design**: Optimized for desktop and mobile screens.

---

## 📁 File Structure

├── index.html 		# Main HTML structure 
├── style.css 		# Styling with CSS variables and media queries 
├── script.js 		# Calculator logic, theme toggle, keyboard support



---

## 🛠️ Setup Instructions

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Start calculating!

> No build tools or dependencies required — it's pure HTML/CSS/JS.

---

## 🎨 Theme Toggle

- The circular button (`#mode`) toggles between light and dark themes.
- Theme state is saved using `localStorage`, so it persists across page reloads.
- SVG icons adapt to the theme using `currentColor`.

---

## 📚 How It Works

- Buttons and keys are captured via `click` and `keydown` events.
- Expressions are evaluated using JavaScript’s `eval()` (safe for basic use).
- Results are shown as the input’s placeholder.
- History is updated dynamically in four `<p>` tags.

---

## ⚠️ Notes

- Input field is disabled for direct typing; use keyboard or buttons.
- `eval()` is used for simplicity — avoid complex or unsafe expressions.
- SVG icons are styled using `currentColor` to match theme color.

---

## 📱 Responsive Design

- Uses `vmin`, `vw`, and media queries for flexible layout.
- Mobile-friendly grid adapts to screen size.

---

## 🧑‍💻 Author

**Ashish Sonare**  
Student at Govt. Holkar Science College, Indore  
Passionate about Front-End Development, JavaScript, UI/UX, and responsive design.

---

## 📄 License

This project is open-source and free to use for educational or personal purposes.

