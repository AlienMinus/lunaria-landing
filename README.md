# Lunaria Landing Page

Welcome to the **Lunaria** interactive landing page! This project is a modern, responsive, and interactive static website for a fictional lunar tourism company.

---

## 🚀 Features

- Responsive navbar with hamburger menu for mobile
- Hero, About, Timeline, Gallery, Booking, and AI Assistant sections
- Carousel for moon images
- Booking form with local storage and CSV export
- Floating AI chat assistant powered by a JSON knowledge base
- Floating home button
- Animated section pop-up effects on scroll

---

## 📁 Project Structure

```
lunaria-landing/
│
├── index.html
├── styles.css
├── script.js
├── responses.json
├── images/
│   ├── moon-logo.png
│   ├── astro1.png
│   ├── astro2.png
│   ├── astro3.png
│   └── ... (carousel and other images)
```

---

## 🖥️ Local Development

1. **Clone or Download** this repository.

2. **Run a local server** (required for fetch to work with `responses.json`):

   - **VS Code:** Right-click `index.html` and select "Open with Live Server".
   - **Python:**  
     ```
     python -m http.server
     ```
     Then open [http://localhost:8000](http://localhost:8000) in your browser.

3. **Open `index.html`** in your browser via the local server.

---

## 🌐 Deployment

You can deploy this static site on any static hosting service, such as:

- **GitHub Pages**
- **Vercel**
- **Netlify**
- **Firebase Hosting**
- **Azure Static Web Apps**

**Steps:**
1. Push your project to a GitHub repository (if using GitHub Pages, Vercel, or Netlify).
2. Follow the platform's instructions to deploy a static site.
3. Ensure all files (`responses.json`, images, etc.) are in the root or correct folders.

---

## 📝 Usage

- **Navbar:** Use the hamburger menu on mobile to toggle navigation links.
- **Carousel:** Scroll through moon images using the arrows or wait for auto-play.
- **Booking:** Fill out the booking form; data is saved in your browser and can be exported as CSV.
- **AI Assistant:** Click the 🤖 icon to chat with the assistant. It uses `responses.json` for answers.
- **Theme Toggle:** Click the 🌙/☀️ button (top-right) to switch between dark and light mode.
- **Home Button:** Click the floating 🏠 button (bottom-left) to quickly return to the top.

---

## ⚠️ Notes

- **Do not open `index.html` directly from the filesystem** (file://). Use a local server so that fetch requests for `responses.json` work.
- All images and assets must be in the correct folders for everything to display properly.
- You can edit `responses.json` to expand the AI assistant's knowledge.

---

## 🛠️ Customization

- **Change colors, fonts, or layout** in `styles.css`.
- **Edit or add sections** in `index.html`.
- **Expand AI responses** in `responses.json`.

---

## 📄 License

This project is for educational/demo purposes.  
Feel free to use and modify for your own learning or portfolio!

---
