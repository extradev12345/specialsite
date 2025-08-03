// Main JavaScript functionality for the website

// Navigation functionality
function navigateToPage(pageName) {
    const iframe = document.querySelector('.maincontainer');
    const navLinks = document.querySelectorAll('.topnav-item-menu');
    
    // Update iframe source
    iframe.src = `parts/${pageName}.html`;
    
    // Update active link styling
    navLinks.forEach(link => {
        link.classList.remove('link-active');
    });
    
    // Find and activate the clicked link
    const activeLink = Array.from(navLinks).find(link => 
        link.textContent.toLowerCase() === pageName.toLowerCase()
    );
    if (activeLink) {
        activeLink.classList.add('link-active');
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.topnav-item-menu');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageName = this.textContent.toLowerCase();
            
            // Map navigation text to actual page names
            let actualPageName = pageName;
            if (pageName === 'message') {
                actualPageName = 'messages';
            }
            
            navigateToPage(actualPageName);
        });
    });
    
    // Set default page to about
    navigateToPage('about');
});

// Project info functionality
function initializeProjectButtons() {
    const infoButtons = document.querySelectorAll('.project button');
    
    infoButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Sample project data - you can expand this
            const projects = [
                {
                    name: "Ineom App",
                    description: "A comprehensive mobile application for managing daily tasks and productivity.",
                    technologies: "React Native, Node.js, MongoDB",
                    status: "Completed",
                    year: "2025"
                },
                {
                    name: "Portfolio Website",
                    description: "Personal portfolio website showcasing web development skills and projects.",
                    technologies: "HTML, CSS, JavaScript",
                    status: "In Progress",
                    year: "2025"
                },
                {
                    name: "E-Commerce Platform",
                    description: "Full-stack e-commerce solution with payment integration and admin panel.",
                    technologies: "PHP, MySQL, Bootstrap",
                    status: "Completed",
                    year: "2024"
                }
            ];
            
            const project = projects[index % projects.length];
            
            const infoMessage = `
Project: ${project.name}
Description: ${project.description}
Technologies: ${project.technologies}
Status: ${project.status}
Year: ${project.year}
            `;
            
            alert(infoMessage);
        });
    });
}

// Smooth scrolling and animations
function addSmoothAnimations() {
    // Add loading animation to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize iframe content when it loads
function initializeIframeContent() {
    const iframe = document.querySelector('.maincontainer');
    
    iframe.addEventListener('load', function() {
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            
            
            // Initialize project buttons if on projects page
            if (iframe.src.includes('projects.html')) {
                setTimeout(() => {
                    const infoButtons = iframeDoc.querySelectorAll('.project button');
                    
                    infoButtons.forEach((button, index) => {
                        button.addEventListener('click', function(e) {
                            e.preventDefault();
                            
                            const projects = [
                                {
                                    name: "Ineom App",
                                    description: "A comprehensive mobile application for managing daily tasks and productivity.",
                                    technologies: "React Native, Node.js, MongoDB",
                                    status: "Completed",
                                    year: "2025"
                                },
                                {
                                    name: "Portfolio Website",
                                    description: "Personal portfolio website showcasing web development skills and projects.",
                                    technologies: "HTML, CSS, JavaScript",
                                    status: "In Progress",
                                    year: "2025"
                                },
                                {
                                    name: "E-Commerce Platform",
                                    description: "Full-stack e-commerce solution with payment integration and admin panel.",
                                    technologies: "PHP, MySQL, Bootstrap",
                                    status: "Completed",
                                    year: "2024"
                                },
                                {
                                    name: "Task Management System",
                                    description: "Web-based task management system with team collaboration features.",
                                    technologies: "Vue.js, Express.js, PostgreSQL",
                                    status: "In Progress",
                                    year: "2025"
                                },
                                {
                                    name: "Weather App",
                                    description: "Mobile weather application with location-based forecasts.",
                                    technologies: "Flutter, API Integration",
                                    status: "Completed",
                                    year: "2024"
                                },
                                {
                                    name: "Blog Platform",
                                    description: "Content management system for blogging with rich text editor.",
                                    technologies: "Django, Python, SQLite",
                                    status: "Completed",
                                    year: "2024"
                                },
                                {
                                    name: "Chat Application",
                                    description: "Real-time messaging application with group chat functionality.",
                                    technologies: "Socket.io, React, Node.js",
                                    status: "In Progress",
                                    year: "2025"
                                },
                                {
                                    name: "Inventory System",
                                    description: "Business inventory management system with reporting features.",
                                    technologies: "Laravel, MySQL, Bootstrap",
                                    status: "Completed",
                                    year: "2024"
                                },
                                {
                                    name: "Learning Platform",
                                    description: "Online learning platform with course management and progress tracking.",
                                    technologies: "MERN Stack, MongoDB",
                                    status: "In Progress",
                                    year: "2025"
                                }
                            ];
                            
                            const project = projects[index % projects.length];
                            
                            const infoMessage = `
Project: ${project.name}

Description: ${project.description}

Technologies: ${project.technologies}
Status: ${project.status}
Year: ${project.year}
                            `;
                            
                            alert(infoMessage);
                        });
                    });
                }, 100);
            }
            
            // Add smooth animations to iframe content
            setTimeout(() => {
                const cards = iframeDoc.querySelectorAll('.card');
                cards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.transition = 'all 0.6s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }, 50);
            
        } catch (error) {
            // Handle cross-origin restrictions gracefully
            console.log('Cross-origin restrictions prevent iframe content access');
        }
    });
}

// Enhanced interactivity features
function addInteractiveFeatures() {
    // Add smooth hover effects to navigation
    const navLinks = document.querySelectorAll('.topnav-item-menu');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.textShadow = '0 2px 4px rgba(30, 144, 255, 0.5)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.textShadow = 'none';
        });
    });

    // Add typing effect to header
    const header = document.querySelector('.header');
    if (header) {
        const originalText = header.textContent;
        header.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                header.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            }
        }
        
        setTimeout(typeWriter, 500);
    }

    // Add floating animation to pill
    const pill = document.querySelector('.pill');
    if (pill) {
        setInterval(() => {
            pill.style.transform = 'translateY(-3px)';
            setTimeout(() => {
                pill.style.transform = 'translateY(0)';
            }, 1000);
        }, 3000);
    }

    // Add page transition effects
    const iframe = document.querySelector('.maincontainer');
    if (iframe) {
        iframe.style.opacity = '0';
        iframe.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            iframe.style.transition = 'all 0.5s ease';
            iframe.style.opacity = '1';
            iframe.style.transform = 'scale(1)';
        }, 100);
    }
}

// Enhanced navigation with page transition effects
function enhancedNavigateToPage(pageName) {
    const iframe = document.querySelector('.maincontainer');
    const navLinks = document.querySelectorAll('.topnav-item-menu');
    
    // Add fade out effect
    iframe.style.opacity = '0';
    iframe.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        // Update iframe source
        iframe.src = `parts/${pageName}.html`;
        
        // Update active link styling
        navLinks.forEach(link => {
            link.classList.remove('link-active');
        });
        
        // Find and activate the clicked link
        const activeLink = Array.from(navLinks).find(link =>
            link.textContent.toLowerCase() === pageName.toLowerCase()
        );
        if (activeLink) {
            activeLink.classList.add('link-active');
        }
        
        // Add fade in effect
        setTimeout(() => {
            iframe.style.opacity = '1';
            iframe.style.transform = 'scale(1)';
        }, 100);
    }, 250);
}

// Theme switcher functionality
function addThemeSwitcher() {
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fa-solid fa-palette"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: dodgerblue;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(30, 144, 255, 0.3);
    `;
    
    themeToggle.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 16px rgba(30, 144, 255, 0.4)';
    });
    
    themeToggle.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 12px rgba(30, 144, 255, 0.3)';
    });
    
    document.body.appendChild(themeToggle);
    
    // Theme variations
    const themes = [
        { name: 'dodgerblue', primary: 'dodgerblue', secondary: '#4169e1' },
        { name: 'emerald', primary: '#50c878', secondary: '#3cb371' },
        { name: 'sunset', primary: '#ff6b35', secondary: '#ff8c42' },
        { name: 'purple', primary: '#8a2be2', secondary: '#9932cc' },
        { name: 'crimson', primary: '#dc143c', secondary: '#b22222' }
    ];
    
    let currentTheme = 0;
    
    themeToggle.addEventListener('click', function() {
        currentTheme = (currentTheme + 1) % themes.length;
        const theme = themes[currentTheme];
        
        // Update CSS custom properties
        document.documentElement.style.setProperty('--primary-color', theme.primary);
        document.documentElement.style.setProperty('--secondary-color', theme.secondary);
        
        // Update all elements with the primary color
        const elements = document.querySelectorAll('*');
        elements.forEach(el => {
            const computedStyle = window.getComputedStyle(el);
            if (computedStyle.color === 'rgb(30, 144, 255)' || computedStyle.color === 'dodgerblue') {
                el.style.color = theme.primary;
            }
            if (computedStyle.borderColor === 'rgb(30, 144, 255)' || computedStyle.borderColor === 'dodgerblue') {
                el.style.borderColor = theme.primary;
            }
            if (computedStyle.backgroundColor === 'rgb(30, 144, 255)' || computedStyle.backgroundColor === 'dodgerblue') {
                el.style.backgroundColor = theme.primary;
            }
        });
        
        // Update theme toggle button
        this.style.backgroundColor = theme.primary;
        
        // Show theme name
        const themeName = document.createElement('div');
        themeName.textContent = theme.name.charAt(0).toUpperCase() + theme.name.slice(1);
        themeName.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: ${theme.primary};
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 12px;
            z-index: 1001;
            opacity: 0;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(themeName);
        
        setTimeout(() => {
            themeName.style.opacity = '1';
        }, 100);
        
        setTimeout(() => {
            themeName.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(themeName);
            }, 300);
        }, 2000);
    });
}

// Particle background effect
function addParticleBackground() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.1;
    `;
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'dodgerblue';
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeIframeContent();
    addInteractiveFeatures();
    addThemeSwitcher();
    addParticleBackground();
    
    // Override the original navigation function
    const navLinks = document.querySelectorAll('.topnav-item-menu');
    navLinks.forEach(link => {
        link.removeEventListener('click', navigateToPage);
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageName = this.textContent.toLowerCase();
            
            // Map navigation text to actual page names
            let actualPageName = pageName;
            if (pageName === 'message') {
                actualPageName = 'messages';
            }
            
            enhancedNavigateToPage(actualPageName);
        });
    });
});
