# Class 9 Computer Engineering Routine & Student Dashboard 🎓

> ⚠️ **Note / Throwback Project:**  
> This is a nostalgic website I built back when I was in **Class 9** (Shree Shanti Bhagwati Secondary School, Letang, Morang)! It holds a special place in my learning journey as one of my early web development projects.

---

## 📌 About the Project

This web application was designed to help Class 9 Computer Engineering students track their daily class schedule in real time, access e-books, and use basic study tools.

### ✨ Key Features
* **Live Period & Schedule Tracker (`index.html` + `script.js`):**  
  * Displays current local time and day.
  * Dynamically calculates the **ongoing subject**, **remaining time**, and **upcoming class** using JavaScript.
  * Handles full daily schedules from Sunday to Friday, and automatically detects holidays (Saturday/Off hours).
* **Full Weekly Schedule Table (`daily_routine.html`):**  
  * A comprehensive timetable showing subject distribution for all periods across the week.
* **E-Books Hub (`e_books.html`):**  
  * Direct links to official CDC digital textbooks (Nepali, English, Science).
* **Utility Tools Dashboard (`Tools.html`):**  
  * Navigation interface for extra utilities like Calculator, Homework Planner, and Dictionary.
* **Custom Styling & Branding:**  
  * Styled with CSS gradients, responsive table designs, watermarks, and school branding logos (`nlogo.png`, `slogo.jpg`).

---

## 📂 Repository Structure

```text
.
├── index.html           # Main landing page with live class countdown
├── daily_routine.html   # Full weekly routine table
├── e_books.html         # Digital textbooks links
├── Tools.html           # Utilities menu page
├── style.css            # Styles, animations, and responsive layout
├── script.js            # Real-time timetable calculation logic
├── nlogo.png            # School header logo
└── slogo.jpg            # School watermark logo
