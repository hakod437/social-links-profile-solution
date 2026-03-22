# Frontend Mentor - Social links profile solution

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Deployment](#deployment)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page
- View the optimal layout for the interface depending on their device's screen size
- Navigate through social media links seamlessly

### Links

- Solution URL: [GitHub Repository](https://github.com/hakod437/social-links-profile-solution)
- Live Site URL: [GitHub Pages](https://hakod437.github.io/social-links-profile-solution/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (HSL color palette)
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool & development server
- [gh-pages](https://www.npmjs.com/package/gh-pages) - Deployment to GitHub Pages
- Inter font family (custom @font-face)

### What I learned

This project taught me several key concepts:

**Multi-account Git/SSH Management:**
- Setting up multiple SSH keys for different GitHub accounts
- Configuring SSH aliases for seamless account switching
- Managing user identity per repository

```bash
# Configure repo for specific account
git remote set-url origin git@github-hakod437:hakod437/REPO_NAME.git
git config user.name "fullname"
git config user.email "email"
```

**Responsive Design with Media Queries:**
- Mobile-first approach with breakpoints at 480px and 640px
- Adapting layouts for different screen sizes

```css
@media (max-width: 480px) {
  .parent-div {
    width: 100%;
    padding: 1.5rem;
  }
}
```

**Component Structure:**
- Separating image, text, and interactive elements
- Using semantic naming conventions for CSS classes
- Merging related content into single containers

### Continued development

Focus areas for future enhancement:

- Optimize SEO with meta tags and structured data
- Add animations and transitions for smoother interactions
- Implement dark mode toggle using `prefers-color-scheme`
- Create reusable component library for social link cards
- Add accessibility improvements (ARIA labels, keyboard navigation)

### Useful resources

- [Frontend Mentor](https://www.frontendmentor.io/) - Design challenges for practice
- [MDN - Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) - Responsive design guide
- [Vite Documentation](https://vitejs.dev/) - Development server and build tool
- [React Documentation](https://react.dev/) - Component and hook patterns
- [SSH Key Management](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) - GitHub SSH setup

### AI Collaboration

This project used GitHub Copilot for:

- **Project Setup:** Scaffolding React + Vite structure with proper dependencies
- **Deployment Setup:** Configuring Vite base path and GitHub Pages scripts
- **Git Configuration:** Setting up multi-account SSH management for seamless GitHub workflow
- **Code Review:** Ensuring clean, semantic HTML and maintainable CSS

**What worked well:**
- AI assistance in rapid prototyping and boilerplate generation
- Quick solutions for Git/SSH configuration complexity
- CSS variable alignment with design specifications

**What I improved:**
- Final manual tweaks for pixel-perfect alignment
- Custom responsive breakpoints based on actual mobile dimensions

## Deployment

This project is deployed on GitHub Pages.

```bash
# Build and publish to gh-pages branch
npm run deploy
```

Notes:

- Vite base path is configured for repository deployment.
- The image source uses `import.meta.env.BASE_URL` to work correctly on GitHub Pages.

## Author

- Website - [Your Portfolio](https://www.your-site.com)
- Frontend Mentor - [@hakod437](https://www.frontendmentor.io/profile/hakod437)
- GitHub - [hakod437](https://github.com/hakod437)

---

## Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

The app will be available at `http://localhost:5173/`
