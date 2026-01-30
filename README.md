# 🎯 Siva Prasad Vajja - Professional Portfolio

A modern, responsive, and recruiter-focused portfolio website showcasing my experience as a Senior Software Engineer specializing in Java, Spring Boot, Microservices, and React.

## ✨ Features

- **Modern Design**: Clean, professional UI with dark mode support
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Subtle scroll animations and hover effects
- **SEO Optimized**: Proper meta tags, semantic HTML, and accessibility features
- **Fast Performance**: Lightweight vanilla JavaScript, no framework overhead
- **One-Page Layout**: Smooth scrolling navigation between sections

## 📋 Sections

1. **Hero** - Introduction with key metrics and CTAs
2. **About** - Professional summary and value proposition
3. **Skills** - Categorized technical skills with visual emphasis
4. **Experience** - Timeline view of professional roles and achievements
5. **Projects** - Featured projects with problem/solution/outcome format
6. **Education** - Academic credentials
7. **Contact** - Contact information and social links

## 🚀 Running Locally

This is a static website with no build process required. You can run it in several ways:

### Option 1: Live Server (Recommended)

If you have VS Code installed:

1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. The site will open at `http://localhost:5500`

### Option 2: Python HTTP Server

```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

### Option 3: Node.js HTTP Server

```bash
# Install http-server globally
npm install -g http-server

# Run in the project directory
http-server

# Then open http://localhost:8080 in your browser
```

### Option 4: Direct File Opening

Simply open `index.html` directly in your browser. However, this method may not work for all features due to CORS restrictions.

## 📦 Deployment

This portfolio can be deployed to any static hosting service. Here are the recommended options:

### Deploy to Vercel (Recommended)

1. Install Vercel CLI (optional):
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment

**Or deploy via Vercel Dashboard:**

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Click "Deploy"

### Deploy to Netlify

1. Go to [netlify.com](https://www.netlify.com)
2. Drag and drop the entire project folder
3. Your site is live!

**Or use Netlify CLI:**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select branch and folder (root)
4. Click Save
5. Your site will be live at `https://[username].github.io/[repo-name]`

### Deploy to Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init hosting

# Deploy
firebase deploy
```

## 📄 Adding Your Resume PDF

1. Create an `assets` folder in the root directory
2. Place your resume PDF file as `Siva_Prasad_Resume.pdf`
3. The download buttons will automatically work

```
Portfolio/
├── assets/
│   └── Siva_Prasad_Resume.pdf
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 🎨 Customization

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --color-primary: #2563eb;
    --color-primary-dark: #1e40af;
    /* etc. */
}
```

### Updating Content

All content is directly in `index.html`. Simply edit the HTML to update:
- Personal information
- Experience details
- Projects
- Skills
- Contact information

### Dark Mode

The site includes automatic dark mode support. Users can toggle between light and dark themes using the moon/sun icon in the navigation.

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and CSS Variables
- **Vanilla JavaScript** - No frameworks, just clean JS
- **Google Fonts** - Inter font family
- **Font Awesome** - Icon library

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus visible indicators
- Proper heading hierarchy
- Color contrast compliance

## 🎯 SEO Features

- Semantic HTML5 elements
- Meta description and keywords
- Open Graph tags for social sharing
- Descriptive title tags
- Optimized heading structure
- Fast load times

## 📊 Performance

- **No build process** - Instant deployment
- **Lightweight** - Minimal dependencies
- **Lazy loading** - Images load on demand
- **Debounced scroll events** - Optimized performance
- **CSS animations** - Hardware-accelerated

## 🤝 Optional Enhancements

Want to add more features? Consider:

1. **Contact Form Integration**:
   - Add Formspree, Web3Forms, or Netlify Forms
   - Already has placeholder `initContactForm()` function

2. **Analytics**:
   - Add Google Analytics
   - Add Plausible or Simple Analytics for privacy

3. **Blog Section**:
   - Add a blog using markdown files
   - Integrate with a headless CMS

4. **Typing Effect**:
   - Uncomment `createTypingEffect()` in `script.js` for animated typing

## 📝 License

This project is open source and available for personal use.

## 📧 Contact

- **Email**: v.sivaprasad7482@gmail.com
- **LinkedIn**: [Siva Prasad Profile](https://www.linkedin.com/in/siva-prasad-profile)
- **GitHub**: [PRASADSIVA7482](https://github.com/PRASADSIVA7482)

---

**Built with ❤️ by Siva Prasad Vajja**
