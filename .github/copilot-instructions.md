# Pinteresty Portfolio - Project Documentation

## Project Overview
A modern personal portfolio website built with React + Vite + Tailwind CSS, featuring a Pinterest-inspired design with a soft pastel lavender color palette.

## Project Structure

### Configuration Files
- `vite.config.js` - Vite configuration with React plugin
- `tailwind.config.js` - Tailwind CSS theme customization (lavender color palette)
- `postcss.config.js` - PostCSS configuration for Tailwind processing
- `package.json` - Project dependencies and scripts

### Source Files
- `src/main.jsx` - React entry point
- `src/App.jsx` - Main application component
- `src/index.css` - Global styles and Tailwind directives

### Components (`src/components/`)
- `Navbar.jsx` - Sticky floating navigation with smooth animations
- `Home.jsx` - Hero section with centered intro card and profile image
- `Education.jsx` - Education cards in grid layout
- `Projects.jsx` - Projects in Pinterest-style masonry grid
- `Resume.jsx` - Resume preview and download section
- `Certifications.jsx` - Certification cards with images
- `Gallery.jsx` - Image gallery with masonry layout and lightbox modal
- `Contact.jsx` - Contact form and social links

## Design System

### Color Palette
- **Background:** Lavender-100 (#f5f0ff)
- **Primary:** Lavender-400 (#c8b6ff)
- **Secondary:** White (#ffffff)
- **Accent:** Accent Purple (#b8a2ff)

### Typography
- **Font:** Poppins and Quicksand from Google Fonts
- **Style:** Modern, soft, minimal

### Components
- **Cards:** `border-radius: 20px` with soft shadows
- **Buttons:** Rounded edges, smooth hover animations
- **Transitions:** 300ms smooth transitions throughout
- **Animations:** Fade-in, slide-in-up, float animations

## Installation & Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Features

### Implemented
- ✅ Responsive design (mobile + desktop)
- ✅ Smooth scroll behavior
- ✅ Hover animations on cards and buttons
- ✅ Sticky navbar with smooth transitions
- ✅ Fade-in animations on page load
- ✅ Pinterest-style masonry grid layouts
- ✅ Lightbox modal for gallery images
- ✅ Contact form with validation
- ✅ Social media links
- ✅ Rounded cards with soft shadows
- ✅ Lavender theme throughout

### Dynamic Features
- Tab-based navigation between sections
- Form submission handling
- Image lightbox modal
- Mobile menu toggle

## Customization Guide

### To Update Personal Information
1. Edit `src/components/Home.jsx` - Update name and intro text
2. Edit `src/components/Resume.jsx` - Update skills and experience
3. Edit `src/components/Contact.jsx` - Update email and social links
4. Replace placeholder images throughout components

### To Add/Modify Content
- **Education:** Edit `educationData` array in `Education.jsx`
- **Projects:** Edit `projects` array in `Projects.jsx`
- **Certifications:** Edit `certifications` array in `Certifications.jsx`
- **Gallery:** Edit `images` array in `Gallery.jsx`

### To Customize Colors
Edit `tailwind.config.js` in the `theme.extend.colors.lavender` section to modify the lavender palette.

## Browser Support
- Modern browsers with ES6 support
- Chrome, Firefox, Safari, Edge (latest versions)

## Notes
- Replace all placeholder images with actual portfolio images
- Connect contact form to email service (e.g., EmailJS, Formspree)
- Add actual links for projects, certifications, and resume
- Fully responsive and mobile-friendly

## Next Steps
1. Replace placeholder images
2. Update personal information in components
3. Connect contact form to backend
4. Deploy to Vercel, Netlify, or GitHub Pages
