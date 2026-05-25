# <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/code.svg" width="30" height="30"> Frontend Mentor - Product Preview Card Component

<div align="center">

  <div style="display: flex; justify-content: center; align-items: flex-end; gap: 20px; margin-bottom: 20px;">
    <img src="./images/desktop-view.png" alt="Desktop Preview" width="60%" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
    <img src="./images/mobile-view.png" alt="Mobile Preview" width="20%" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  </div>

  <h3>
    <a href="https://productprvcard.netlify.app/">Live Demo</a> 
    <span> | </span>
    <a href="https://github.com/HavishyaVally">Github</a>
  </h3>

  <p>A product preview card component challenge from <a href="https://www.frontendmentor.io">Frontend Mentor</a>.</p>

  <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
    <img src="https://img.shields.io/badge/Flexbox-FF69B4?style=for-the-badge" alt="Flexbox">
    <img src="https://img.shields.io/badge/Grid-663399?style=for-the-badge" alt="Grid">
    <img src="https://img.shields.io/badge/Mobile--First-000000?style=for-the-badge" alt="Mobile First">
  </div>
</div>

---

### 📝 Project Overview

This is my solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). This challenge was a great exercise in building a responsive component with a focus on art direction and modern CSS techniques.

### 🚀 Features

- **Optimal Layout:** Responsive design for various screen sizes.
- **Interactive Elements:** Hover and focus states for buttons.
- **Art Direction:** Used the `<picture>` element for optimized image delivery.
- **Modern CSS:** Implemented CSS Nesting for cleaner media queries.

### 💡 Key Learnings

One of the highlights was implementing **CSS Nesting**. It allowed me to keep responsive logic right inside the component's block, making the code much easier to read and maintain.

I also focused on performance by using the `<picture>` element to intelligently select the correct asset based on the viewport width.

```html
<picture class="card-image">
  <source media="(min-width: 435px)" srcset="images/image-product-desktop.jpg">
  <img src="images/image-product-mobile.jpg" alt="Gabrielle Essence Eau De Parfum">
</picture>
```

---

### 📖 Technical Documentation

I have created a dedicated, styled documentation page that goes deeper into my technical approach, design philosophy, and specific code implementations.

<div align="center">
  <a href="https://productprvcard.netlify.app/documentation">
    <img src="https://img.shields.io/badge/View_Detailed_Documentation-4B0082?style=for-the-badge&logo=googledocs&logoColor=white" alt="Documentation">
  </a>
</div>

---

### 👤 Author

- LinkedIn - [@HavishyaVally](https://www.linkedin.com/in/havishyavally/)
- Frontend Mentor - [@HavishyaVally](https://www.frontendmentor.io/profile/HavishyaVally)
- GitHub - [HavishyaVally](https://github.com/HavishyaVally)


---

