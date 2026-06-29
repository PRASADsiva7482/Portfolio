// ============================================
// THEME MANAGEMENT
// ============================================

// Initialize theme from localStorage or default to dark
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

// Toggle theme between light and dark
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

// Update theme toggle icon
function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');

    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ============================================
// NAVIGATION
// ============================================

// Handle navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Handle mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Close mobile menu when clicking on a nav link
function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('active');
}

// Highlight active nav link based on scroll position
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// SMOOTH SCROLLING
// ============================================

function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Get the target element
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                // Close mobile menu if open
                closeMobileMenu();

                // Calculate offset for fixed navbar
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// ANIMATIONS
// ============================================

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.skill-category, .timeline-item, .project-card');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Add CSS for scroll animations
function addScrollAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .skill-category,
        .timeline-item,
        .project-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .skill-category.animate-in,
        .timeline-item.animate-in,
        .project-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .nav-link.active {
            color: var(--color-primary);
            background-color: var(--color-bg-secondary);
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// SKILL TAGS INTERACTION
// ============================================

function initSkillTagInteractions() {
    const skillTags = document.querySelectorAll('.skill-tag:not(.primary)');

    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
        });

        tag.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });
}

// ============================================
// TYPING EFFECT (Optional Enhancement)
// ============================================

function createTypingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;

    const originalText = subtitle.textContent;
    subtitle.textContent = '';

    let index = 0;

    function type() {
        if (index < originalText.length) {
            subtitle.textContent += originalText.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }

    // Start typing effect after a small delay
    setTimeout(type, 500);
}

// ============================================
// RESUME DOWNLOAD - FORCE DOWNLOAD
// ============================================

function forceResumeDownload(event, button) {
    event.preventDefault();

    const resumePath = button.getAttribute('href');
    const resumeFileName = 'Siva_Prasad_Vajja_Resume.pdf';

    // Use fetch to get the file as blob for forced download
    fetch(resumePath)
        .then(response => response.blob())
        .then(blob => {
            // Create blob URL
            const blobUrl = window.URL.createObjectURL(blob);

            // Create temporary link
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = resumeFileName;
            link.style.display = 'none';

            // Add to document, click, and cleanup
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Cleanup blob URL
            setTimeout(() => {
                window.URL.revokeObjectURL(blobUrl);
            }, 100);

            console.log('Resume downloaded:', resumeFileName);
        })
        .catch(error => {
            console.error('Download failed:', error);
            // Fallback - try direct download
            const link = document.createElement('a');
            link.href = resumePath;
            link.download = resumeFileName;
            link.click();
        });
}

function initResumeDownload() {
    const resumeButtons = document.querySelectorAll('a[href*="resume" i], a[href*=".pdf"]');

    resumeButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            forceResumeDownload(e, this);
        });
    });
}

// ============================================
// LAZY LOADING IMAGES (If needed)
// ============================================

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// CONTACT FORM VALIDATION (If form is added)
// ============================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Add form validation logic here
            const formData = new FormData(contactForm);

            // Example: send to backend or show success message
            console.log('Form submitted', Object.fromEntries(formData));

            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
}

// ============================================
// DYNAMIC EXPERIENCE CALCULATION
// ============================================

function initDynamicExperience() {
    const startDate = new Date(2021, 7, 1); // August 1, 2021 (Month is 0-indexed, so 7 is August)
    const currentDate = new Date();
    
    // Calculate difference in years and months
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    
    // Adjust if current day is before start day of the month
    if (currentDate.getDate() < startDate.getDate()) {
        months--;
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Round months: if we're at >= 80% of the current month (e.g. June 29), count as a full month
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const dayProgress = currentDate.getDate() / daysInMonth;
    if (dayProgress >= 0.8) {
        months++;
        if (months >= 12) {
            years++;
            months = 0;
        }
    }

    // Format strings
    let shortFormat;
    let longFormat;
    
    if (years >= 5) {
        shortFormat = `${years}+`;
        longFormat = `${years}+ years`;
    } else {
        if (months === 0) {
            shortFormat = `${years}y`;
            longFormat = `${years} year${years !== 1 ? 's' : ''}`;
        } else {
            shortFormat = `${years}y ${months}m`;
            longFormat = `${years} years and ${months} month${months !== 1 ? 's' : ''}`;
        }
    }
    
    // Update elements
    const statElement = document.getElementById('experience-stat-number');
    if (statElement) {
        statElement.textContent = shortFormat;
    }
    
    const aboutElement = document.getElementById('experience-about-text');
    if (aboutElement) {
        aboutElement.textContent = `${longFormat} of experience`;
    }
    
    const durationElement = document.getElementById('current-job-duration');
    if (durationElement) {
        durationElement.textContent = `Aug 2021 – Present (${years}y ${months}m)`;
    }
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize theme
    initTheme();

    // Initialize dynamic experience
    initDynamicExperience();

    // Add scroll animation styles
    addScrollAnimationStyles();

    // Initialize smooth scrolling
    initSmoothScrolling();

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize skill tag interactions
    initSkillTagInteractions();

    // Initialize resume download with force download
    initResumeDownload();

    // Initialize lazy loading
    initLazyLoading();

    // Initialize contact form
    initContactForm();

    // Optional: Add typing effect (commented out by default)
    // createTypingEffect();

    // Event Listeners
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        handleNavbarScroll();
        highlightActiveNavLink();
    });

    // Initial call to set navbar state
    handleNavbarScroll();
    highlightActiveNavLink();
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Debounce function for scroll events
function debounce(func, wait) {
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

// Optimize scroll event listeners
const optimizedScroll = debounce(() => {
    handleNavbarScroll();
    highlightActiveNavLink();
}, 10);

window.addEventListener('scroll', optimizedScroll);

// ============================================
// EASTER EGG / CONSOLE MESSAGE
// ============================================

console.log(
    '%c👋 Hello, Recruiter!',
    'font-size: 20px; font-weight: bold; color: #667eea;'
);
console.log(
    '%cThanks for checking out my portfolio! Looking forward to connecting.',
    'font-size: 14px; color: #475569;'
);
console.log(
    '%c📧 v.sivaprasad7482@gmail.com',
    'font-size: 12px; color: #667eea;'
);
