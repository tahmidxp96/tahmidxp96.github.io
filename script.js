document.addEventListener('DOMContentLoaded', () => {
    // --- Section Switching Logic ---
    const corporateBtn = document.getElementById('corporate-btn');
    const academicsBtn = document.getElementById('academics-btn');
    const corporateSection = document.getElementById('corporate');
    const academicsSection = document.getElementById('academics');

    function activateSection(sectionId) {
        if (sectionId === 'corporate') {
            corporateSection.classList.add('active');
            academicsSection.classList.remove('active');
            corporateBtn.classList.add('active');
            academicsBtn.classList.remove('active');
        } else {
            academicsSection.classList.add('active');
            corporateSection.classList.remove('active');
            academicsBtn.classList.add('active');
            corporateBtn.classList.remove('active');
        }
    }

    corporateBtn.addEventListener('click', () => activateSection('corporate'));
    academicsBtn.addEventListener('click', () => activateSection('academics'));

    // Initialize the active section on page load
    activateSection('corporate');

    // --- Day/Night Theme Toggle Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun text-xl"></i>';
    } else if (savedTheme === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // If no saved theme, check system preference
        body.classList.add('dark-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun text-xl"></i>';
    } else {
        body.classList.remove('dark-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon text-xl"></i>';
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            themeToggleBtn.innerHTML = '<i class="fas fa-moon text-xl"></i>';
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.add('dark-mode');
            themeToggleBtn.innerHTML = '<i class="fas fa-sun text-xl"></i>';
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // --- Animated Heading Logic ---
    const mainHeading = document.querySelector('.main-heading');
    const text = mainHeading.textContent;
    mainHeading.innerHTML = ''; // Clear original text

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.setProperty('--delay', `${index * 0.05}s`); // Staggered animation
        mainHeading.appendChild(span);
    });
});
