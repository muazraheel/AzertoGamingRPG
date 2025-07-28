// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Copy server IP to clipboard
function copyServerIP() {
    const serverIP = 'play.azerto.com:7777';
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(serverIP).then(() => {
            showToast('Server IP copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
            fallbackCopyTextToClipboard(serverIP);
        });
    } else {
        fallbackCopyTextToClipboard(serverIP);
    }
}

// Fallback copy function for older browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showToast('Server IP copied to clipboard!');
        } else {
            showToast('Failed to copy server IP');
        }
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        showToast('Failed to copy server IP');
    }
    
    document.body.removeChild(textArea);
}

// Toast notification function
function showToast(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-content">
            <i data-lucide="check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add toast styles
    toast.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: var(--gaming-secondary);
        color: var(--foreground);
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        border: 1px solid var(--gaming-accent)/50;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    `;
    
    // Add toast content styles
    const toastContent = toast.querySelector('.toast-content');
    toastContent.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
    `;
    
    document.body.appendChild(toast);
    
    // Trigger icon creation for the new element
    lucide.createIcons();
    
    // Animate in
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    navLinks.classList.toggle('mobile-open');
    mobileMenuBtn.classList.toggle('active');
}

// Add mobile menu styles
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-links {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: var(--gaming-secondary);
                flex-direction: column;
                padding: 2rem;
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                border-top: 1px solid var(--gaming-accent)/20;
            }
            
            .nav-links.mobile-open {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            .mobile-menu-btn.active {
                color: var(--gaming-accent);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add mobile menu event listener
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
});

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Add animation classes and observe elements
    const animatedElements = document.querySelectorAll('.section-header, .feature-card, .stat-card, .about-content, .forums-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(36, 36, 47, 0.95)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.1)';
    }
});

// Parallax effect for floating elements
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Dynamic stats counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Trigger counter animations when stats come into view
document.addEventListener('DOMContentLoaded', function() {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const number = entry.target.textContent;
                
                // Extract numeric value
                const numericValue = parseInt(number.replace(/[^\d]/g, ''));
                if (!isNaN(numericValue)) {
                    animateCounter(entry.target, numericValue);
                }
            }
        });
    }, { threshold: 0.5 });
    
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Add glow effect to primary buttons
document.addEventListener('DOMContentLoaded', function() {
    const primaryButtons = document.querySelectorAll('.btn-primary');
    
    primaryButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.animation = 'glow 1s ease-in-out infinite alternate';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
});

// Smooth reveal animations for feature cards
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Easter egg: Konami code
let konamiCode = [];
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konami.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konami)) {
        showToast('🎮 Konami Code activated! Welcome, fellow gamer!');
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 3000);
        konamiCode = [];
    }
});