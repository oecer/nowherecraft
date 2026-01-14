// Global Language State
const savedLang = localStorage.getItem('nowhere_lang');

if (savedLang === 'en' || savedLang === 'tr') {
    window.currentLanguage = savedLang;
} else {
    // Logic: Display in TR if (Browser is TR OR Location is TR). Otherwise EN.

    // 1. Check Browser Language
    const browserLang = navigator.language || navigator.userLanguage;
    const isBrowserTr = browserLang && String(browserLang).toLowerCase().startsWith('tr');

    if (isBrowserTr) {
        window.currentLanguage = 'tr';
    } else {
        // Browser is not TR, so default to EN for now
        window.currentLanguage = 'en';

        // 2. Check IP Location (Async)
        // If user is in Turkey (even if browser is EN), switch back to TR
        fetch('https://ipapi.co/country/')
            .then(res => res.text())
            .then(countryCode => {
                if (countryCode && countryCode.trim() === 'TR') {
                    console.log('Detected TR IP, switching language to TR...');
                    window.currentLanguage = 'tr';
                    if (typeof window.updateTranslations === 'function') {
                        window.updateTranslations();
                    }
                }
            })
            .catch(e => console.log('Auto-language detection failed:', e));
    }
}

window.translations = {
    en: {
        nav_home: "Home",
        // ... (keep existing object content, just validating init)
        nav_ritual: "The Ritual",
        nav_artifacts: "Artifacts",
        nav_acquire: "Acquire",
        hero_subtitle: "\"Forged in shadow. Stitched by hand. Heritage quality <strong>Leather Goods</strong> that darken with time.\"",
        hero_cta: "View Artifacts",
        ritual_header: "The Ritual",
        ritual_title_1: "Obsession in",
        ritual_title_2: "Every Stitch",
        ritual_description: "Nowhere Craft is a handcrafted brand standing against the soullessness of mass production. Leather and metal are produced slowly and by hand; every piece carries the traces of street culture, rock’n roll spirit, and a timeless design philosophy.<br/><br/>Every product is made individually. Cut, dyed, shaped. During this process, marks may remain, and color tones may change. These differences are seen not as flaws, but as details that give each piece its character.",
        ritual_subtext: "The materials used are living structures. Leather darkens over time, metal takes on marks. Products are made not to stay new, but to settle in as they are used.<br/><br/>Nowhere Craft represents a stance more than a place. Silent, simple, and permanent.",
        ritual_stat_years: "Years of Craft",
        ritual_stat_bond: "Lifetime Bond",
        gallery_badge: "The Artifacts",
        gallery_title: "Featured Collections",
        collection_classic: "Classic Collection",
        collection_dark: "Dark Collection",
        collection_oldschool: "Oldschool Collection",
        gallery_subtitle: "Handcrafted Leather Goods",
        gallery_cta: "See All Artifacts",
        shop_title: "Claim Your Legacy",
        shop_forged_count: "Artifacts Forged",
        shop_desc: "Each piece is summoned into existence upon order. Secure your place in the queue before the darkness closes in.",
        shop_time: "Forging time: 2-3 weeks",
        shop_secure: "Encrypted Transaction",
        shop_btn_shopier: "Shopier",
        shop_btn_etsy: "Etsy",
        footer_made: "© 2024. Handcrafted in the Shadows of Nowhere.",
        footer_links_instagram: "Instagram",
        footer_links_twitter: "Twitter",
        footer_links_contact: "Contact",
        artifacts_page_title: "The Archives",
        artifacts_page_subtitle: "Complete Collection",
        filter_all: "All",
        search_placeholder: "Search artifacts...",
        no_results: "No artifacts found in the archives.",
        modal_price: "Price",
        modal_inquire: "Inquire for Purchase",
        category_wallet: "Wallet",
        category_cardholder: "Cardholder",
        category_bundle: "Bundle",
        category_keyholder: "Keyholder",
        back_home: "Return to Home",
        showing_text: "Showing",
        items_text: "Items",
        filter_collections: "Collections",
        filter_categories: "Categories"
    },
    tr: {
        nav_home: "Ana Sayfa",
        nav_ritual: "Manifesto",
        nav_artifacts: "Eserler",
        nav_acquire: "Sahip Ol",
        hero_subtitle: "\"Gölgelerde dövüldü. Ruhla dikildi. Zamanla ruh kazanan miras niteliğinde <strong>Deri Eserler</strong>.\"",
        hero_cta: "Eserleri İncele",
        ritual_header: "Manifesto",
        ritual_title_1: "Her İlmekte",
        ritual_title_2: "Saplantı",
        ritual_description: "Nowhere Craft, seri üretimin ruhsuzluğuna karşı duran bir el işçiliği markasıdır. Deri ve metal, elde ve yavaş üretilir; her parça sokak kültürünün, rock’n roll ruhunun ve zamansız tasarım anlayışının izlerini taşır.<br/><br/>Her ürün tek tek yapılır. Kesilir, boyanır, şekillenir. Bu süreçte iz kalabilir, renk tonu değişebilir. Bu farklar kusur olarak değil, her parçaya karakter veren detaylar olarak görülür.",
        ritual_subtext: "Kullanılan malzemeler yaşayan yapılardır. Deri zamanla koyulaşır, metal iz alır. Ürünler yeni kalması için değil, kullanıldıkça kendine oturması için üretilir.<br/><br/>Nowhere Craft bir yerden çok bir duruşu temsil eder. Sessiz, sade ve kalıcı.",
        ritual_stat_years: "Yıllık Zanaat",
        ritual_stat_bond: "Ömürlük Bağ",
        gallery_badge: "Eserler",
        gallery_title: "Öne Çıkan Koleksiyonlar",
        collection_classic: "Klasik Koleksiyon",
        collection_dark: "Dark Koleksiyon",
        collection_oldschool: "Oldschool Koleksiyon",
        gallery_subtitle: "El Yapımı Deri Eserler",
        gallery_cta: "Tüm Eserleri Gör",
        shop_title: "Mirasını Sahiplen",
        shop_forged_count: "Eser Dövüldü",
        shop_desc: "Her parça, sipariş üzerine varlığa çağrılır. Karanlık üzerinize çökmeden sırada yerinizi ayırtın.",
        shop_time: "Dövülme süresi: 2-3 hafta",
        shop_secure: "Güvenli Ödeme",
        shop_btn_shopier: "Shopier",
        shop_btn_etsy: "Etsy",
        footer_made: "© 2024. Nowhere'in Gölgelerinde El ile Yapıldı.",
        footer_links_instagram: "Instagram",
        footer_links_twitter: "Twitter",
        footer_links_contact: "İletişim",
        artifacts_page_title: "Eserler",
        artifacts_page_subtitle: "Tam Koleksiyon",
        filter_all: "Tümü",
        search_placeholder: "Eser ara...",
        no_results: "Eser bulunamadı.",
        modal_price: "Bedel",
        modal_inquire: "Sahiplenmek İçin Yaz",
        category_wallet: "Cüzdan",
        category_cardholder: "Kartlık",
        category_bundle: "Set",
        category_keyholder: "Anahtarlık",
        back_home: "Ana Sayfaya Dön",
        showing_text: "Görüntülenen:",
        items_text: "Eser",
        filter_collections: "Koleksiyonlar",
        filter_categories: "Türler"
    }
};

window.updateTranslations = function () {
    console.log("updateTranslations called. Lang:", window.currentLanguage);
    try {
        const trans = window.translations[window.currentLanguage];
        if (!trans) {
            console.error("Missing translation for lang:", window.currentLanguage);
            return;
        }

        // Update elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const prefix = el.getAttribute('data-prefix') || '';
            const translation = trans[key];

            if (translation) {
                if (translation.includes('<') || el.children.length > 0) {
                    el.innerHTML = prefix + translation;
                } else {
                    el.textContent = prefix + translation;
                }
            }
        });

        // Update Language Switcher Text
        const langDisplay = document.getElementById('lang-display');
        if (langDisplay) {
            langDisplay.innerHTML = window.currentLanguage === 'en'
                ? '<span class="text-primary font-bold">EN</span> / TR'
                : 'EN / <span class="text-primary font-bold">TR</span>';
        }

        // Update Mobile Language Switcher Text
        const mobileLangDisplay = document.getElementById('mobile-lang-display');
        if (mobileLangDisplay) {
            mobileLangDisplay.innerHTML = window.currentLanguage === 'en'
                ? '<span class="text-primary font-bold">EN</span> / TR'
                : 'EN / <span class="text-primary font-bold">TR</span>';
        }

        // Update HTML lang attribute
        document.documentElement.lang = window.currentLanguage;

        // Trigger re-renders for dynamic content if available
        if (typeof window.setupFilters === 'function') {
            window.setupFilters();
        } else if (typeof setupFilters === 'function') {
            setupFilters();
        }

        if (typeof window.renderArtifacts === 'function') {
            // Check for index page collections
            if (document.getElementById('gallery-classic')) {
                window.renderArtifacts('gallery-classic', 'classic');
            }
            if (document.getElementById('gallery-dark')) {
                window.renderArtifacts('gallery-dark', 'dark');
            }
            if (document.getElementById('gallery-oldschool')) {
                window.renderArtifacts('gallery-oldschool', 'oldschool');
            }

            // Check for artifacts page grid
            if (document.getElementById('all-artifacts-grid')) {
                window.renderArtifacts('all-artifacts-grid');
            }
        }

    } catch (e) {
        console.error("Error in updateTranslations:", e);
    }
};

window.toggleLanguage = function () {
    window.currentLanguage = window.currentLanguage === 'en' ? 'tr' : 'en';
    console.log("Language toggled to:", window.currentLanguage);
    localStorage.setItem('nowhere_lang', window.currentLanguage);
    window.updateTranslations();
};

// Initial Translation Update on Load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.updateTranslations);
} else {
    window.updateTranslations();
}
