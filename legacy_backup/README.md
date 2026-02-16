# Modern Resume Portfolio Website

A modern, responsive portfolio website built with **HTML5**, **Tailwind CSS**, and **Vanilla JavaScript**. This project is a complete redesign of the original Bootstrap-based resume template, featuring a clean, modern design with enhanced functionality.

## 🚀 Features

### Design & UI
- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Elegant dark color scheme with proper contrast
- **Smooth Animations**: CSS transitions and JavaScript-powered animations
- **Glass Morphism Effects**: Modern glass-like design elements

### Functionality
- **Typing Animation**: Dynamic text animation in the hero section
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior
- **Portfolio Filtering**: Interactive portfolio filtering by category
- **Contact Form**: Fully functional contact form with PHP backend
- **Lightbox Gallery**: Image lightbox for portfolio items
- **Counter Animations**: Animated statistics counters
- **Progress Bars**: Animated skill progress indicators
- **Mobile Navigation**: Responsive mobile menu with hamburger toggle

### Technical Features
- **Modern JavaScript**: ES6+ features with class-based architecture
- **Intersection Observer**: Efficient scroll-based animations
- **Service Worker**: PWA capabilities for offline functionality
- **Form Validation**: Client and server-side form validation
- **Email Notifications**: Automated email responses
- **SEO Optimized**: Semantic HTML and meta tags

## 📁 Project Structure

```
MyResume/
├── index.html              # Main portfolio page
├── portfolio-details.html  # Portfolio detail page
├── js/
│   └── main.js            # Main JavaScript file
├── forms/
│   └── contact.php        # Contact form handler
├── assets/
│   └── img/               # Images and assets
├── sw.js                  # Service worker
└── README.md              # This file
```

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup with accessibility features
- **Tailwind CSS**: Utility-first CSS framework
- **Vanilla JavaScript**: Modern ES6+ JavaScript
- **Font Awesome**: Icon library
- **Google Fonts**: Inter and Playfair Display fonts

### Backend
- **PHP**: Contact form processing
- **Email**: SMTP email functionality

### Tools & Libraries
- **Tailwind CSS CDN**: For styling
- **Intersection Observer API**: For scroll animations
- **Fetch API**: For form submissions
- **Service Worker**: For PWA capabilities

## 🚀 Getting Started

### Prerequisites
- A web server with PHP support (XAMPP, WAMP, or live server)
- Modern web browser with JavaScript enabled

### Installation

1. **Clone or Download** the project files
2. **Set up a local server** (if testing locally):
   ```bash
   # Using PHP built-in server
   php -S localhost:8000
   
   # Or using Node.js live-server
   npx live-server
   ```

3. **Configure Email Settings** (in `forms/contact.php`):
   ```php
   $config = [
       'to_email' => 'your-email@domain.com',     // Your email
       'from_email' => 'noreply@yourdomain.com',  // Your domain email
       // ... other settings
   ];
   ```

4. **Open** `index.html` in your browser

### Customization

#### Personal Information
Update the following in `index.html`:
- Name and title in hero section
- Contact information in about section
- Social media links
- Portfolio projects and descriptions
- Skills and experience details

#### Styling
Modify colors and styling in the Tailwind configuration:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    // Your color palette
                }
            }
        }
    }
}
```

#### Contact Form
Update email settings in `forms/contact.php`:
```php
$config = [
    'to_email' => 'your-email@domain.com',
    'from_email' => 'noreply@yourdomain.com',
    'subject_prefix' => '[Your Portfolio] ',
];
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Mobile-first navigation
- Flexible grid layouts
- Responsive typography
- Touch-friendly buttons
- Optimized images

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (#3b82f6 to #1d4ed8)
- **Secondary**: Purple accents
- **Background**: Gray scale with dark sections
- **Text**: High contrast for accessibility

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Sizes**: Responsive typography scale

### Animations
- Fade-in animations on scroll
- Smooth hover effects
- Typing animation for hero text
- Progress bar animations
- Counter animations

## 🔧 Browser Support

- **Chrome**: 60+
- **Firefox**: 60+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+

## 📧 Contact Form Features

### Client-Side Validation
- Required field validation
- Email format validation
- Message length validation
- Real-time feedback

### Server-Side Features
- PHP form processing
- Email sanitization
- CSRF protection
- Auto-reply emails
- Error logging
- HTML email templates

## 🚀 Performance Optimizations

- **Lazy Loading**: Images load as needed
- **Minified Assets**: Optimized file sizes
- **Service Worker**: Caching for offline use
- **Efficient Animations**: Hardware-accelerated CSS
- **Optimized Images**: Proper sizing and formats

## 🔒 Security Features

- **Input Sanitization**: All form inputs are sanitized
- **Email Validation**: Server-side email validation
- **CSRF Protection**: Form submission protection
- **XSS Prevention**: HTML encoding of user input
- **Rate Limiting**: Basic form submission limiting

## 📈 SEO Features

- **Semantic HTML**: Proper HTML5 structure
- **Meta Tags**: Complete meta tag implementation
- **Open Graph**: Social media sharing optimization
- **Schema Markup**: Structured data for search engines
- **Fast Loading**: Optimized for Core Web Vitals

## 🛠️ Development

### Adding New Sections
1. Create HTML structure in `index.html`
2. Add Tailwind classes for styling
3. Add JavaScript functionality in `main.js`
4. Update navigation links

### Adding New Portfolio Items
1. Add images to `assets/img/portfolio/`
2. Update portfolio grid in HTML
3. Add filtering categories if needed

### Customizing Animations
Modify animation classes and JavaScript in `main.js`:
```javascript
// Example: Custom scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help with customization, please:
1. Check the documentation above
2. Review the code comments
3. Open an issue on GitHub

## 🎯 Future Enhancements

- [ ] Blog section integration
- [ ] Multi-language support
- [ ] Advanced animations
- [ ] CMS integration
- [ ] Advanced analytics
- [ ] Social media integration
- [ ] Video portfolio support

---

**Built with ❤️ using Tailwind CSS and Modern JavaScript**

