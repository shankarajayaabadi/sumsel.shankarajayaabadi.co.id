document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenuIcon = document.querySelector('.mobile-menu');
    const mobileMenuIconOpen = document.querySelector('.fa-bars');
    const mobileMenuIconClose = document.querySelector('.fa-xmark');
    const tabMenu = document.querySelector('.tab-menu');
    const menuLinks = tabMenu.querySelectorAll('a');

    // Set initial state
    function initializeMenu() {
        menuToggle.checked = false;
        tabMenu.style.display = 'none';
        mobileMenuIconOpen.style.display = 'inline-block';
        mobileMenuIconClose.style.display = 'none';
    }

    // Initialize menu on page load
    initializeMenu();

    function toggleMenu() {
        if (menuToggle.checked) {
            tabMenu.style.display = 'flex';
            mobileMenuIconOpen.style.display = 'none';
            mobileMenuIconClose.style.display = 'inline-block';
        } else {
            tabMenu.style.display = 'none';
            mobileMenuIconOpen.style.display = 'inline-block';
            mobileMenuIconClose.style.display = 'none';
        }
    }

    // Handle menu link clicks
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menuToggle.checked = false;
                toggleMenu();
            }
        });
    });

    // Handle menu icon clicks
    mobileMenuIcon.addEventListener('click', function(event) {
        event.preventDefault();
        menuToggle.checked = !menuToggle.checked;
        toggleMenu();
    });

    // Handle clicks outside menu
    document.addEventListener('click', function(event) {
        if (!tabMenu.contains(event.target) && 
            !event.target.closest('.mobile-menu') && 
            menuToggle.checked) {
            menuToggle.checked = false;
            toggleMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            tabMenu.style.display = 'flex';
            mobileMenuIconOpen.style.display = 'inline-block';
            mobileMenuIconClose.style.display = 'none';
            menuToggle.checked = false;
        } else {
            initializeMenu();
        }
    });

    // Handle page navigation/loads
    window.addEventListener('pageshow', function(event) {
        if (window.innerWidth <= 768) {
            initializeMenu();
        }
    });
});