// Global Language State
window.currentLanguage = localStorage.getItem('nowhere_lang');
if (window.currentLanguage !== 'en' && window.currentLanguage !== 'tr') {
    window.currentLanguage = 'en';
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
        ritual_description: "Every artifact begins as raw, unyielding hide. I select each piece by hand, seeking the <span>scars and grain</span> that tell a violent, beautiful story. Cut by blade, pierced by awl, and stitched with wax thread in a ritual machines cannot replicate.",
        ritual_subtext: "This is not mere commerce; it is alchemy. In a disposable world, I forge items of permanence that will haunt your pocket and age with a dark patina.",
        ritual_stat_years: "Years of Craft",
        ritual_stat_bond: "Lifetime Bond",
        gallery_badge: "The Artifacts",
        gallery_title: "Dark Collection",
        gallery_subtitle: "Handcrafted Leather Goods",
        gallery_cta: "See All Artifacts",
        shop_title: "Claim Your Legacy",
        shop_forged_count: "Artifacts Forged",
        shop_desc: "Each piece is summoned into existence upon order. Secure your place in the queue before the darkness closes in.",
        shop_time: "Forging time: 2-3 weeks",
        shop_secure: "Encrypted Transaction",
        shop_btn_shopier: "Shopier",
        shop_btn_etsy: "Etsy",
        footer_made: "© 2023. Handcrafted in the Shadows of Nowhere.",
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
        items_text: "Items"
    },
    tr: {
        nav_home: "Ana Sayfa",
        nav_ritual: "Ayin",
        nav_artifacts: "Eserler",
        nav_acquire: "Sahip Ol",
        hero_subtitle: "\"Gölgelerde dövüldü. Ruhla dikildi. Zamanla ruh kazanan miras niteliğinde <strong>Deri Eserler</strong>.\"",
        hero_cta: "Eserleri İncele",
        ritual_header: "Ayin",
        ritual_title_1: "Her İlmekte",
        ritual_title_2: "Saplantı",
        ritual_description: "Her eser, ham ve boyun eğmez bir deri parçası olarak doğar. Şiddetli ve güzel bir hikayeyi anlatan <span>yara izlerini ve dokuyu</span> arayarak her parçayı elle seçiyorum. Bıçakla kesilen, bizle delinen ve makinelerin taklit edemeyeceği bir ayinle, mumlu iple dikilen parçalar.",
        ritual_subtext: "Bu sadece ticaret değil, bu bir simya. Kullan-at dünyasında, cebinize musallat olacak ve karanlık bir patina ile yaşlanacak kalıcı eserler dövüyorum.",
        ritual_stat_years: "Yıllık Zanaat",
        ritual_stat_bond: "Ömürlük Bağ",
        gallery_badge: "Eserler",
        gallery_title: "Karanlık Koleksiyon",
        gallery_subtitle: "El Yapımı Deri Eserler",
        gallery_cta: "Tüm Eserleri Gör",
        shop_title: "Mirasını Sahiplen",
        shop_forged_count: "Eser Dövüldü",
        shop_desc: "Her parça, sipariş üzerine varlığa çağrılır. Karanlık üzerinize çökmeden sırada yerinizi ayırtın.",
        shop_time: "Dövülme süresi: 2-3 hafta",
        shop_secure: "Şifreli İşlem",
        shop_btn_shopier: "Shopier",
        shop_btn_etsy: "Etsy",
        footer_made: "© 2023. Nowhere'in Gölgelerinde El ile Yapıldı.",
        footer_links_instagram: "Instagram",
        footer_links_twitter: "Twitter",
        footer_links_contact: "İletişim",
        artifacts_page_title: "Arşivler",
        artifacts_page_subtitle: "Tam Koleksiyon",
        filter_all: "Tümü",
        search_placeholder: "Eser ara...",
        no_results: "Arşivlerde eser bulunamadı.",
        modal_price: "Bedel",
        modal_inquire: "Sahiplenmek İçin Yaz",
        category_wallet: "Cüzdan",
        category_cardholder: "Kartlık",
        category_bundle: "Set",
        category_keyholder: "Anahtarlık",
        back_home: "Ana Sayfaya Dön",
        showing_text: "Görüntülenen:",
        items_text: "Eser"
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
            const containerId = document.getElementById('all-artifacts-grid') ? 'all-artifacts-grid' : 'gallery-scroll';
            if (document.getElementById(containerId)) {
                window.renderArtifacts(containerId);
            }
        } else if (typeof renderArtifacts === 'function') {
            const containerId = document.getElementById('all-artifacts-grid') ? 'all-artifacts-grid' : 'gallery-scroll';
            if (document.getElementById(containerId)) {
                renderArtifacts(containerId);
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
