document.addEventListener('DOMContentLoaded', () => {
    // --- Section Switching Logic ---
    const corporateBtn = document.getElementById('corporate-btn');
    const academicsBtn = document.getElementById('academics-btn');
    const corporateSection = document.getElementById('corporate');
    const academicsSection = document.getElementById('academics');
    const dynamicIconsContainer = document.getElementById('dynamic-icons-container'); // New container for icons

    // Define icons for each section
    const corporateIcons = [
        { icon: 'fas fa-industry', class: 'icon-1', size: '3rem', delay: '0s', top: '10%', left: '5%' },
        { icon: 'fas fa-award', class: 'icon-2', size: '2rem', delay: '2s', top: '30%', right: '10%' },
        { icon: 'fas fa-seedling', class: 'icon-3', size: '3.5rem', delay: '4s', bottom: '20%', left: '15%' },
        { icon: 'fas fa-chart-line', class: 'icon-4', size: '2.8rem', delay: '6s', top: '50%', left: '2%' },
        { icon: 'fas fa-users', class: 'icon-5', size: '2.2rem', delay: '8s', top: '80%', right: '5%' },
        { icon: 'fas fa-clipboard-check', class: 'icon-6', size: '3.2rem', delay: '10s', bottom: '5%', left: '30%' }
    ];

    const academicsIcons = [
        { icon: 'fas fa-graduation-cap', class: 'icon-1', size: '3rem', delay: '0s', top: '10%', left: '5%' },
        { icon: 'fas fa-flask', class: 'icon-2', size: '2rem', delay: '2s', top: '30%', right: '10%' },
        { icon: 'fas fa-atom', class: 'icon-3', size: '3.5rem', delay: '4s', bottom: '20%', left: '15%' },
        { icon: 'fas fa-robot', class: 'icon-4', size: '2.8rem', delay: '6s', top: '50%', left: '2%' },
        { icon: 'fas fa-microchip', class: 'icon-5', size: '2.2rem', delay: '8s', top: '80%', right: '5%' },
        { icon: 'fas fa-tractor', class: 'icon-6', size: '3.2rem', delay: '10s', bottom: '5%', left: '30%' }
    ];

    function loadDynamicIcons(iconsConfig) {
        dynamicIconsContainer.innerHTML = ''; // Clear existing icons
        iconsConfig.forEach(config => {
            const div = document.createElement('div');
            div.className = `dynamic-icon ${config.class}`;
            div.style.fontSize = config.size;
            div.style.animationDelay = config.delay;
            if (config.top) div.style.top = config.top;
            if (config.bottom) div.style.bottom = config.bottom;
            if (config.left) div.style.left = config.left;
            if (config.right) div.style.right = config.right;
            div.innerHTML = `<i class="${config.icon}"></i>`;
            dynamicIconsContainer.appendChild(div);
        });
    }

    function activateSection(sectionId) {
        if (sectionId === 'corporate') {
            corporateSection.classList.add('active');
            academicsSection.classList.remove('active');
            corporateBtn.classList.add('active');
            academicsBtn.classList.remove('active');
            loadDynamicIcons(corporateIcons); // Load corporate icons
        } else {
            academicsSection.classList.add('active');
            corporateSection.classList.remove('active');
            academicsBtn.classList.add('active');
            corporateBtn.classList.remove('active');
            loadDynamicIcons(academicsIcons); // Load academics icons
        }
    }

    corporateBtn.addEventListener('click', () => activateSection('corporate'));
    academicsBtn.addEventListener('click', () => activateSection('academics'));

    // Initialize the active section and load its icons on page load
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
    // Ensure the heading exists before trying to animate it
    if (mainHeading) {
        const text = mainHeading.textContent;
        mainHeading.innerHTML = ''; // Clear original text

        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.setProperty('--delay', `${index * 0.05}s`); // Staggered animation
            mainHeading.appendChild(span);
        });
    }
});