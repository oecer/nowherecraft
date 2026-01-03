tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#d68c1c", // Slightly deeper, more metallic amber
                "primary-hover": "#b45309",
                "background-light": "#f8f7f6",
                "background-dark": "#020202", // Deepest black
                "surface-dark": "#080808", // Very dark charcoal
                "surface-accent": "#111111",
                charcoal: "#161616",
                "border-dark": "#332a20" // Dark brown-grey border
            },
            fontFamily: {
                display: "Space Grotesk",
                serif: ["Playfair Display", "serif"],
                gothic: ["Cinzel Decorative", "cursive"] // Swapped to Decorative for ornate feel
            },
            borderRadius: {
                DEFAULT: "0.125rem",
                lg: "0.25rem",
                xl: "0.5rem",
                full: "0.75rem"
            },
            backgroundImage: {
                'gothic-pattern': "url('https://www.transparenttextures.com/patterns/black-linen.png')",
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('gallery-scroll');
    const prevBtn = document.getElementById('gallery-prev');
    const nextBtn = document.getElementById('gallery-next');

    if (scrollContainer && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -340, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: 340, behavior: 'smooth' });
        });
    }

    // Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-mobile-menu');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuBtn && closeMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.add('active');
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    }

    window.closeMobileMenu = function () {
        if (mobileNav) mobileNav.classList.remove('active');
    };
});
