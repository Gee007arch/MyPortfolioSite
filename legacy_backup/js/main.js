/**
 * Modern Resume Website - JavaScript
 * Interactive functionality with modern ES6+ features
 */

class ResumeWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initNavigation();
        this.initTypingAnimation();
        this.initScrollAnimations();
        this.initCounters();
        this.initSkillsAnimation();
        this.initPortfolioFilter();
        this.initContactForm();
        this.initBackToTop();
    }

    // Setup all event listeners
    setupEventListeners() {
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            });
        }

        // Close mobile menu when clicking on links
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Navigation functionality
    initNavigation() {
        const navbar = document.getElementById('navbar');
        const navLinks = document.querySelectorAll('.nav-link');

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('bg-black', 'bg-opacity-90', 'backdrop-blur-sm');
            } else {
                navbar.classList.remove('bg-black', 'bg-opacity-90', 'backdrop-blur-sm');
            }
        });

        // Active navigation link on scroll
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-white', 'bg-primary-600');
                link.classList.add('text-gray-300');
                
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.remove('text-gray-300');
                    link.classList.add('text-white', 'bg-primary-600');
                }
            });
        });
    }

    // Typing animation for hero section
    initTypingAnimation() {
        const typedText = document.getElementById('typed-text');
        if (!typedText) return;

        const texts = [
            'Front End Developer',
            'React Developer',
            'Tailwind CSS',
            'API Integration'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;
        let deleteSpeed = 50;
        let pauseTime = 2000;

        const typeWriter = () => {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typedText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = deleteSpeed;
            } else {
                typedText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = pauseTime;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            setTimeout(typeWriter, typeSpeed);
        };

        // Start typing animation after a short delay
        setTimeout(typeWriter, 1000);
    }

    // Scroll animations using Intersection Observer
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    
                    // Trigger skill bars animation
                    if (entry.target.id === 'skills') {
                        this.animateSkillBars();
                    }
                    
                    // Trigger counter animation
                    if (entry.target.id === 'stats') {
                        this.animateCounters();
                    }
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }

    // Counter animation for stats section
    initCounters() {
        this.counters = document.querySelectorAll('[data-counter]');
    }

    animateCounters() {
        this.counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-counter'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });
    }

    // Skills progress bars animation
    initSkillsAnimation() {
        this.skillBars = document.querySelectorAll('[data-width]');
    }

    animateSkillBars() {
        this.skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 100);
        });
    }

    // Portfolio filtering
    initPortfolioFilter() {
        const filterButtons = document.querySelectorAll('.portfolio-filter');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => {
                    btn.classList.remove('active', 'bg-primary-600', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-gray-700');
                });

                // Add active class to clicked button
                button.classList.add('active', 'bg-primary-600', 'text-white');
                button.classList.remove('bg-gray-200', 'text-gray-700');

                const filter = button.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeIn 0.5s ease-in-out';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Contact form handling
    initContactForm() {
        const form = document.getElementById('contact-form');
        
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(form);
            });
        }
    }

    handleFormSubmission(form) {
        const formData = new FormData(form);
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Send form data to PHP backend
        fetch('forms/contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                this.showNotification(data.message || 'Message sent successfully!', 'success');
                form.reset();
            } else {
                // Handle validation errors
                if (data.errors && data.errors.length > 0) {
                    this.showNotification(data.errors.join(' '), 'error');
                } else {
                    this.showNotification(data.error || 'Failed to send message. Please try again.', 'error');
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
            this.showNotification('Network error. Please check your connection and try again.', 'error');
        })
        .finally(() => {
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
        
        if (type === 'success') {
            notification.classList.add('bg-green-500', 'text-white');
        } else if (type === 'error') {
            notification.classList.add('bg-red-500', 'text-white');
        } else {
            notification.classList.add('bg-blue-500', 'text-white');
        }
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Back to top button
    initBackToTop() {
        const backToTopBtn = document.getElementById('back-to-top');
        
        if (backToTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopBtn.classList.remove('opacity-0', 'invisible');
                    backToTopBtn.classList.add('opacity-100', 'visible');
                } else {
                    backToTopBtn.classList.add('opacity-0', 'invisible');
                    backToTopBtn.classList.remove('opacity-100', 'visible');
                }
            });

            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
}

// Utility functions
class Utils {
    // Debounce function for performance optimization
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle function for scroll events
    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Check if element is in viewport
    static isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}

// Portfolio lightbox functionality
class PortfolioLightbox {
    constructor() {
        this.init();
    }

    init() {
        this.createLightbox();
        this.bindEvents();
    }

    createLightbox() {
        const lightbox = document.createElement('div');
        lightbox.id = 'portfolio-lightbox';
        lightbox.className = 'fixed inset-0 z-50 hidden bg-black bg-opacity-90 flex items-center justify-center';
        
        lightbox.innerHTML = `
            <div class="relative max-w-4xl max-h-full mx-4">
                <button id="lightbox-close" class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10">
                    <i class="fas fa-times"></i>
                </button>
                <img id="lightbox-image" class="max-w-full max-h-full object-contain" src="" alt="">
                <div class="absolute bottom-4 left-4 text-white">
                    <h3 id="lightbox-title" class="text-xl font-bold"></h3>
                    <p id="lightbox-description" class="text-sm opacity-80"></p>
                </div>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        this.lightbox = lightbox;
    }

    bindEvents() {
        // Close lightbox events
        document.getElementById('lightbox-close').addEventListener('click', () => this.close());
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) this.close();
        });

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.lightbox.classList.contains('hidden')) {
                this.close();
            }
        });
    }

    open(imageSrc, title, description) {
        document.getElementById('lightbox-image').src = imageSrc;
        document.getElementById('lightbox-title').textContent = title;
        document.getElementById('lightbox-description').textContent = description;
        this.lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.lightbox.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Smooth scroll polyfill for older browsers
if (!window.CSS || !window.CSS.supports || !window.CSS.supports('scroll-behavior', 'smooth')) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
    document.head.appendChild(script);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ResumeWebsite();
    new PortfolioLightbox();
    
    // Add portfolio lightbox functionality
    document.querySelectorAll('.portfolio-item button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const portfolioItem = button.closest('.portfolio-item');
            const img = portfolioItem.querySelector('img');
            const title = portfolioItem.querySelector('h3').textContent;
            const description = portfolioItem.querySelector('p').textContent;
            
            if (button.textContent.includes('View')) {
                new PortfolioLightbox().open(img.src, title, description);
            }
        });
    });
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations when page becomes visible
        document.body.style.animationPlayState = 'running';
    }
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ResumeWebsite, Utils, PortfolioLightbox };
}
