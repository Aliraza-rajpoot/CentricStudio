# Centric Design Studio Website - Premium React Build

## 🎨 Website is Live!

The beautiful Centric Design Studio website is now **running locally** on your machine!

### 🚀 Access the Site

**URL:** http://localhost:3000

The development server is running and the site is fully functional with all pages, animations, and interactive features.

---

## 📋 Website Features

### ✨ Complete Pages Built

1. **Home** - Hero section with video background, pillars, services preview, featured projects, credentials, testimonials, and CTA
2. **About** - Company mission, values, team showcase, location info, and certifications
3. **Services** - Detailed service offerings with features, process breakdown, and consultation CTA
4. **Portfolio** - Filterable project gallery with multiple categories and hover effects
5. **Certifications** - Complete credential showcase (DBE, SBE, MBE, CBE, FEP, LEED) with compliance information
6. **Contact** - Fully functional contact form with validation, contact information, and Google Maps

### 🎭 Design & Animation Features

- **Premium UI/UX** with elegant serif headings and refined sans-serif body text
- **Smooth Scroll Animations** using Framer Motion for fade-ins, slide-ups, and scale effects
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Hero Section** - Autoplaying video background with gradient overlay
- **Interactive Elements** - Hover effects, transitions, and animated transitions between states
- **Professional Color Palette** - Gold accents (#d4af37), dark blues (#1e3a5f), clean neutrals
- **Sticky Navigation** - Smart navbar that changes on scroll with smooth transitions
- **Form Validation** - Client-side validation for name, email, phone, and message fields
- **Success States** - Beautiful confirmation messages for form submissions

### 🔧 Technical Stack

- **Framework:** React 19 with Hooks
- **Routing:** React Router v6 for multi-page navigation
- **Animations:** Framer Motion for smooth scroll-based animations
- **Icons:** React Icons (Feather icons)
- **Styling:** Pure CSS with CSS variables for theming
- **Form Handling:** React state management with validation
- **Responsive:** Mobile-first responsive design
- **No Dependencies:** No external UI libraries - custom elegant design

### 📄 Website Structure

```
src/
├── App.js                 # Main app with routing
├── App.css               # Global styles & animations
├── components/
│   ├── Navbar.js        # Sticky navigation
│   ├── Navbar.css
│   ├── Footer.js        # Footer with certifications
│   └── Footer.css
├── pages/
│   ├── Home.js          # Home page with hero & sections
│   ├── Home.css
│   ├── About.js         # About page with team
│   ├── About.css
│   ├── Services.js      # Services listing
│   ├── Services.css
│   ├── Portfolio.js     # Project gallery
│   ├── Portfolio.css
│   ├── Certifications.js # Certifications showcase
│   ├── Certifications.css
│   ├── Contact.js       # Contact form
│   └── Contact.css
```

---

## 🎯 Key Sections & Content

### Hero Section
- Full-width video background (architecture/design footage)
- Gradient overlay for text readability
- Headline: "Where Architecture Meets Brand Identity"
- CTA button linking to contact form
- Scroll indicator animation

### Credentials & Certifications (Trust Signal)
Prominently displayed throughout:
- Wayne County USDOT **DBE** (HRD0920360)
- Wayne County Airport Authority **SBE** (SBE09-0102)
- Wayne County **SBE** (HRD0920360)
- **MBE** (Minority Owned Business Enterprise)
- **CBE** (County Based Enterprise)
- **FEP** (Fair Employment Practices)

### Services
1. Architecture Design
2. BIM & 3D Modeling
3. LEED & Sustainable Design
4. Interior Design
5. Environmental Graphic Design
6. Signage & Wayfinding

### Contact Information
- **Main Office:** 607 Shelby St, Ste 721, Detroit, MI 48226
- **TechTown Office:** 440 Burroughs, Suite 360, Detroit, MI 48202
- **Phone:** +1 (313) 486-1908
- **Email:** hello@centricdesign.com
- **Google Map Integration**

### Form Validation
- ✅ Required fields validation
- ✅ Email format validation
- ✅ Phone number format validation
- ✅ Error messages display
- ✅ Success confirmation message
- ✅ Form reset on successful submission

---

## 🎨 Color Palette

- **Primary Dark:** #1a1a1a (Text, backgrounds)
- **Primary Light:** #ffffff (White)
- **Accent Gold:** #d4af37 (CTA, highlights)
- **Accent Dark Blue:** #1e3a5f (Gradients)
- **Neutral 50:** #f8f8f8 (Card backgrounds)
- **Text Secondary:** #666666 (Secondary text)

---

## ⚡ How to Use

### Start the Development Server
```bash
cd /home/aliraza/Desktop/CentricDesignStudio/centric-design-studio
npm start
```

The site will open at **http://localhost:3000**

### Build for Production
```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

### Stop the Server
```bash
# In the terminal where npm start is running, press Ctrl+C
```

---

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

All pages are fully responsive with:
- Flexible grid layouts
- Mobile-optimized navigation (hamburger menu)
- Touch-friendly buttons and forms
- Optimized typography scaling

---

## 🚀 Next Steps & Customization

To customize the website:

1. **Change Colors:** Edit CSS variables in `App.css` `:root` section
2. **Update Content:** Modify text in each page component
3. **Add Projects:** Update project arrays in `Portfolio.js`
4. **Modify Images:** Replace image URLs with your own
5. **Add Team Members:** Update team data in `About.js`
6. **Configure Contact:** Update email in `Contact.js` footer link

---

## ✨ Premium Features

- ⚡ **Fast Load Time** - Optimized React with code splitting
- 🎬 **Video Background** - Smooth autoplaying hero video
- 🔄 **Smooth Transitions** - Framer Motion animations throughout
- 📱 **Mobile First** - Perfect on all devices
- ♿ **Accessible** - Semantic HTML, proper ARIA labels
- 🎯 **SEO Ready** - Proper meta tags, structured content
- 🔒 **Secure Form** - Client-side validation, no data exposure

---

## 📞 Contact Form

The contact form includes:
- Full name, email, phone, project type, and message fields
- Real-time validation with error messages
- Success confirmation screen
- Email format validation
- Phone number format validation
- All fields required

---

## 🎬 Running Locally in Storage

The site is configured to run using React's built-in development server which stores all assets in memory for fast reloading during development. For production deployment, you can build it with `npm run build` to create a static build that can be hosted anywhere.

---

**Built with ❤️ using React, Framer Motion, and Premium Design Practices**

Enjoy your beautiful new website! 🚀
