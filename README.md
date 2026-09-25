# 🚀 JourneyFlow - Customer Journey Optimization Landing Page

A modern, high-converting SaaS landing page designed for CX and marketing analytics platforms. Features an interactive 6-stage journey simulator, animated pricing toggle with monthly/yearly switching, and smooth scroll animations. Built with zero dependencies using vanilla HTML5, CSS3, and JavaScript.

<img width="1349" height="3307" alt="image" src="https://github.com/user-attachments/assets/aedb32b1-66f1-4f88-9732-7e00e38206a1" />

## ✨ Key Features

-   **🔄 Interactive Journey Simulator:** Custom-built circular UI that lets users explore the 6 stages of customer optimization (Discovery → Advocacy) with dynamic content updates.
-   **💰 Animated Pricing Toggle:** Smooth monthly/yearly price switching with number counting animation logic and "Save 20%" badge.
-   **⚡ Zero Dependencies:** No React, Vue, Tailwind, or build tools required. Pure semantic HTML5, custom CSS variables, and ES6+ JavaScript.
-   **👁️ Scroll Animations:** Elements gracefully fade in using the native `IntersectionObserver` API for buttery-smooth 60fps performance.
-   **📱 Fully Responsive:** Mobile-first design that adapts seamlessly from 4K monitors down to mobile devices.
-   **🔧 Highly Customizable:** All colors, spacing, and shadows are controlled via CSS custom properties at the top of `style.css`.

## ️ Tech Stack

| Technology | Usage |
| :--- | :--- |
| **HTML5** | Semantic structure, accessibility, and SEO-friendly markup |
| **CSS3** | Custom properties, Flexbox/Grid, keyframe animations, responsive queries |
| **JavaScript (ES6+)** | DOM manipulation, Intersection Observer, event listeners, math logic |
| **Phosphor Icons** | Lightweight, consistent SVG icon library |
| **Inter Font** | Clean, modern sans-serif typeface for optimal readability |

## ⚡ Getting Started

This project has **no build step**. You can run it immediately without installing Node.js, npm, or any package managers.

### Clone the Repository

```bash
git clone https://github.com/AmiARMiess/journey-flow.git
cd journey-flow
```

### 🎨 Customize Your Brand

All theme colors, spacing, and shadows are managed via CSS custom properties at the top of `style.css`. Simply update these values to match your brand identity instantly:

```css
:root {
    --primary: #3b82f6;        /* Main brand color */
    --accent-purple: #8b5cf6;  /* Secondary accent */
    --accent-orange: #f97316;  /* Tertiary accent */
    --bg-dark: #0f172a;        /* Primary background */
    --bg-card: #1e293b;        /* Card backgrounds */
}
```

### 💰 Update Pricing & Simulator Content

**Pricing:** Edit prices directly in `index.html` using data attributes. The JavaScript automatically reads these values for the toggle animation:

```html
<span class="amount" data-monthly="79" data-yearly="64">79</span>
```

**Simulator Steps:** Modify the steps array in script.js to update titles, descriptions, and metrics for each journey stage:

```javascript
const steps = [
    { num: "01", title: "Discovery", desc: "...", metric: "Impressions" },
    // ... add or modify steps here
];
```

No build tools are required. Changes to HTML and JS take effect immediately upon refresh.

## 📂 Project Structure

```text
journey-flow/
├── index.html      # Main markup, semantic sections, and content
├── style.css       # Global styles, CSS variables, animations, responsive queries
├── script.js       # Simulator logic, pricing toggle, scroll observer
└── README.md       # Documentation
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE).
