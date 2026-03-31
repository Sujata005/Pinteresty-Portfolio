# Pinteresty Portfolio

A beautiful, modern personal portfolio website with a Pinterest-inspired aesthetic and soft pastel lavender color palette.

## 🎨 Features

- **Modern Design:** Clean, minimal, and aesthetic layout
- **Pinterest-Inspired:** Masonry grid layouts for projects and gallery
- **Lavender Theme:** Soft pastel color palette throughout
- **Responsive:** Works perfectly on mobile, tablet, and desktop
- **Smooth Animations:** Fade-in, hover effects, and smooth transitions
- **Interactive Components:** Lightbox gallery, contact form, sticky navbar
- **Fast:** Built with Vite for optimal performance

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── Home.jsx            # Hero section
│   ├── Education.jsx       # Education section
│   ├── Projects.jsx        # Projects showcase
│   ├── Resume.jsx          # Resume section
│   ├── Certifications.jsx  # Certificates section
│   ├── Gallery.jsx         # Image gallery
│   └── Contact.jsx         # Contact form
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## 🎯 Sections

1. **Home** - Welcome section with profile image and intro
2. **Education** - Educational background and credentials
3. **Projects** - Portfolio projects in masonry grid
4. **Resume** - Resume preview and download
5. **Certifications** - Professional certifications
6. **Gallery** - Image gallery with lightbox modal
7. **Contact** - Contact form and social links

## 🎨 Color Palette

- **Background:** Light Lavender (#f5f0ff)
- **Primary:** Lavender (#c8b6ff)
- **Secondary:** White (#ffffff)
- **Accent:** Soft Purple (#b8a2ff)

## 📝 Customization

### Update Personal Information

1. **Home Section:** Edit `src/components/Home.jsx`
2. **Education:** Update the `educationData` array in `Education.jsx`
3. **Projects:** Modify the `projects` array in `Projects.jsx`
4. **Certifications:** Edit the `certifications` array in `Certifications.jsx`
5. **Gallery:** Update the `images` array in `Gallery.jsx`
6. **Contact:** Update email and social links in `Contact.jsx`

### Replace Images

Replace all placeholder images with your own:
- Profile image in Home section
- Resume preview image
- Certification images
- Gallery images

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Fonts:** Google Fonts (Poppins, Quicksand)
- **Animations:** CSS animations

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile hamburger menu
- Adaptive grid layouts
- Touch-friendly buttons and links
- Mobile-optimized images

## ✨ Animations

- Fade-in animations on page load
- Scale and translate hover effects
- Smooth slide-up animations for content
- Floating elements for visual interest
- Smooth scroll behavior

## 🔗 Next Steps

1. Replace all placeholder images with your actual photos
2. Update personal information and content
3. **Set up EmailJS for the contact form** (see below)
4. Add links to your actual projects and social profiles
5. Deploy to Vercel, Netlify, or GitHub Pages

### 📧 Setting up EmailJS for Contact Form

The contact form is already integrated with EmailJS. To enable email sending:

1. **Create an EmailJS Account:**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Set up Email Service:**
   - In your EmailJS dashboard, go to "Email Services"
   - Add a new service (Gmail, Outlook, Yahoo, etc.)
   - Follow the setup instructions for your email provider

3. **Create Email Template:**
   - Go to "Email Templates" in your dashboard
   - Create a new template with these variables:
     ```
     Subject: New Contact Form Message from {{from_name}}

     From: {{from_name}} ({{from_email}})

     Message:
     {{message}}

     ---
     This message was sent from your portfolio contact form.
     ```

4. **Get Your Credentials:**
   - Service ID: Found in Email Services → [Your Service] → Service ID
   - Template ID: Found in Email Templates → [Your Template] → Template ID
   - Public Key: Found in Account → General → Public Key

5. **Configure Environment Variables:**
   - Copy `.env.example` to `.env`
   - Update the values in `.env`:
     ```
     VITE_EMAILJS_SERVICE_ID=your_actual_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
     ```

6. **Test the Form:**
   - Start the development server: `npm run dev`
   - Go to the Contact section
   - Fill out and submit the form
   - Check your email for the message

**Note:** The `.env` file is already added to `.gitignore` for security.

## 📦 Dependencies

- react: ^18.2.0
- react-dom: ^18.2.0
- react-icons: ^5.0.1
- react-intersection-observer: ^9.5.2
- tailwindcss: ^3.3.6

## 📄 License

Feel free to use this portfolio template for your own projects.

---

**Happy coding! 🎨**
