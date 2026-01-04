const NowhereComponents = {
    getHeaderHTML: (activePage) => {
        const isHome = activePage === 'home';
        const homeLink = isHome ? '#' : 'index.html';
        const storyLink = isHome ? '#story' : 'index.html#story';
        const acquireLink = isHome ? '#shop' : 'index.html#shop';

        // Navigation Logic:
        // On Home: "Artifacts" -> #gallery (Section)
        // On Artifacts: "Artifacts" -> artifacts.html (Page)
        const artifactsHref = isHome ? '#gallery' : 'artifacts.html';
        const artifactsClass = activePage === 'artifacts' ? 'text-primary' : '';

        return `
            <div class="header-outer">
                <div class="header-container">
                    <a href="${homeLink}" class="logo-container block hover:opacity-80 transition-opacity">
                        <div class="logo-wrapper">
                            <img src="assets/images/NOWHERE_2_yatay_240px.png" alt="Nowhere Craft Logo"
                                class="logo-img filter-text-glow">
                        </div>
                    </a>
                    <div class="header-nav">
                        <div class="nav-group">
                            <a class="nav-link" href="${storyLink}">The Ritual</a>
                            <a class="nav-link ${artifactsClass}" href="${artifactsHref}">Artifacts</a>
                        </div>
                        <a class="group btn-acquire" href="${acquireLink}">
                            <span
                                class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                            <span
                                class="relative text-sm uppercase font-serif font-bold tracking-[0.25em] group-hover:tracking-[0.3em] transition-all text-primary">Acquire</span>
                        </a>
                    </div>
                    <div class="md:hidden text-primary cursor-pointer border border-primary/30 p-1 rounded"
                        id="mobile-menu-btn">
                        <span class="material-symbols-outlined">menu</span>
                    </div>
                </div>
            </div>`;
    },

    getFooterHTML: () => {
        return `
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="footer-brand-top">
                        <a href="index.html" class="footer-logo-link">
                            <img src="assets/images/NOWHERE_2_yatay_240px.png" alt="Nowhere Craft Logo"
                                class="footer-brand-img" />
                        </a>
                    </div>
                    <p class="footer-copyright">© 2023. Handcrafted in the Shadows of Nowhere.</p>
                </div>
                <div class="footer-links">
                    <a class="footer-link-item" href="#">Instagram</a>
                    <a class="footer-link-item" href="#">Twitter</a>
                    <a class="footer-link-item" href="#">Contact</a>
                </div>
            </div>`;
    },

    getMobileNavHTML: (activePage) => {
        const isHome = activePage === 'home';
        const storyLink = isHome ? '#story' : 'index.html#story';
        const acquireLink = isHome ? '#shop' : 'index.html#shop';
        const artifactsHref = isHome ? '#gallery' : 'artifacts.html';
        const artifactsClass = activePage === 'artifacts' ? 'text-primary' : '';

        return `
            <button class="absolute top-6 right-6 text-primary p-2" id="close-mobile-menu">
                <span class="material-symbols-outlined text-3xl">close</span>
            </button>
            <a class="mobile-nav-link" href="${storyLink}" onclick="closeMobileMenu()">The Ritual</a>
            <a class="mobile-nav-link ${artifactsClass}" href="${artifactsHref}" onclick="closeMobileMenu()">Artifacts</a>
            <a class="mobile-nav-link" href="${acquireLink}" onclick="closeMobileMenu()">Acquire</a>`;
    },

    render: () => {
        const path = window.location.pathname;
        // Simple detection logic
        let activePage = 'home';
        if (path.includes('artifacts.html')) {
            activePage = 'artifacts';
        }

        const headerEl = document.querySelector('.site-header');
        if (headerEl) {
            headerEl.innerHTML = NowhereComponents.getHeaderHTML(activePage);
        }

        const footerEl = document.querySelector('.site-footer');
        if (footerEl) {
            footerEl.innerHTML = NowhereComponents.getFooterHTML();
        }

        const mobileNavEl = document.getElementById('mobile-nav');
        if (mobileNavEl) {
            mobileNavEl.innerHTML = NowhereComponents.getMobileNavHTML(activePage);
        }
    }
};
