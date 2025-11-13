# AI Automation Agency Website

A modern, responsive website built with Astro for an AI automation agency based in Miami, Florida.

## 🚀 Features

- **Modern Design**: Clean, professional layout with Tailwind CSS
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Astro's static site generation for optimal performance
- **Contact Form**: Interactive contact form with validation
- **Service Pages**: Detailed pages for services, locations, about, and contact

## 📁 Project Structure

```
ai-automation-agency/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro       # Homepage
│       ├── services.astro    # Services page
│       ├── locations.astro   # Locations page
│       ├── about.astro       # About page
│       └── contact.astro     # Contact page
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── README.md
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build your production site to `./dist/`         |
| `npm run preview`         | Preview your build locally, before deploying    |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                    |

## 🎯 Pages Overview

### Homepage (/)
- Hero section with compelling call-to-action
- Benefits showcase (time savings, cost reduction, ROI growth)
- Service previews
- Customer-focused messaging

### Services (/services)
- Detailed service descriptions
- Process automation
- AI chatbots
- Workflow optimization
- Data analytics & business intelligence
- Implementation process overview

### Locations (/locations)
- Miami headquarters information
- Service areas across South Florida
- Remote service capabilities
- Contact information and business hours

### About (/about)
- Company mission and vision
- Founding story and milestones
- Leadership team
- Company values
- Awards and recognition

### Contact (/contact)
- Comprehensive contact form
- Business information
- Multiple contact methods
- FAQ section
- Form validation with JavaScript

## 🎨 Styling

The website uses Tailwind CSS for styling with:
- Custom color scheme (blue primary with yellow accents)
- Responsive grid layouts
- Professional typography
- Hover effects and transitions
- Form styling and validation states

## 📱 Responsive Design

- Mobile-first approach
- Responsive navigation
- Flexible grid layouts
- Optimized for all screen sizes
- Touch-friendly interactive elements

## ⚡ Performance

- Static site generation with Astro
- Optimized images and assets
- Minimal JavaScript
- Fast loading times
- SEO-friendly structure

## 🔧 Customization

To customize for your business:

1. Update company information in `/src/layouts/Layout.astro`
2. Modify contact details across all pages
3. Replace placeholder team photos in `/src/pages/about.astro`
4. Update service offerings in `/src/pages/services.astro`
5. Adjust location information in `/src/pages/locations.astro`
6. Customize colors in `tailwind.config.mjs`

## 📞 Contact Form

The contact form includes:
- Client information collection
- Industry and company size selection
- Service interest checkboxes
- Project description textarea
- Basic JavaScript validation
- Form submission handling (placeholder)

*Note: Form submission needs to be connected to a backend service or form handler like Netlify Forms, Formspree, or similar.*

## 🚀 Deployment

This site is ready to deploy to Vercel, Netlify, or any static hosting provider. The build command generates a static site in the `./dist/` folder.

## 📝 License

This project is created for demonstration purposes. Feel free to use and modify as needed.
