const artifactsData = [
    {
        id: "2365",
        title: "Cognac Gator Bifold",
        title_tr: "Konyak Timsah Dokulu Cüzdan",
        category: "Wallet",
        images: ["assets/images/prducts/1000022365.jpg"],
        tags: "Genuine Leather • Handcrafted",
        tags_tr: "Hakiki Deri • El Yapımı",
        price: "$TBD",
        description: "A classic bifold wallet featuring a rich cognac finish with alligator texture embossing. Hand-stitched for durability and designed to age beautifully with use.",
        description_tr: "Timsah dokusu kabartmalı, zengin konyak rengi klasik iki katlı cüzdan. Dayanıklılık için elde dikildi ve kullanımla güzelleşmesi için tasarlandı."
    },
    {
        id: "2724",
        title: "Midnight Distressed Cardholder",
        title_tr: "Gece Yarısı Eskitme Kartlık",
        category: "Cardholder",
        images: [
            "assets/images/prducts/1000022724.jpg",
            "assets/images/prducts/1000022724 2.jpg"
        ],
        tags: "Genuine Leather • Handcrafted",
        tags_tr: "Hakiki Deri • El Yapımı",
        price: "$TBD",
        description: "Minimalist cardholder in a deep midnight blue with a distressed finish. Perfect for those who prefer to carry light while making a bold statement.",
        description_tr: "Eskitme bitişli, derin gece mavisi minimalist kartlık. Cesur bir duruş sergilerken hafif taşımayı tercih edenler için mükemmel."
    },
    {
        id: "2725",
        title: "Gator Texture Trio",
        title_tr: "Timsah Dokulu Üçlü Set",
        category: "Bundle",
        images: ["assets/images/prducts/1000022725.jpg"],
        tags: "Genuine Leather • Handcrafted",
        tags_tr: "Hakiki Deri • El Yapımı",
        price: "$TBD",
        description: "A curated collection of three essential items featuring our signature alligator texture. Includes a wallet, cardholder, and key fob.",
        description_tr: "İmza niteliğindeki timsah dokumuza sahip üç temel parçadan oluşan küratörlü koleksiyon. Cüzdan, kartlık ve anahtarlık içerir."
    },
    {
        id: "2726",
        title: "Abyssal Blue Gator Wallet",
        title_tr: "Abisal Mavi Timsah Cüzdan",
        category: "Wallet",
        images: ["assets/images/prducts/1000022726.jpg"],
        tags: "Genuine Leather • Handcrafted",
        tags_tr: "Hakiki Deri • El Yapımı",
        price: "$TBD",
        description: "Deep blue hues merge with rugged textures in this standard bifold. The 'Abyssal' series represents the depth of our craftsmanship.",
        description_tr: "Bu standart iki katlı cüzdanda derin mavi tonlar, sağlam dokularla birleşiyor. 'Abisal' serisi, zanaatkarlığımızın derinliğini temsil ediyor."
    },
    {
        id: "2727",
        title: "Stacked Gator Collection",
        title_tr: "Timsah Koleksiyonu",
        category: "Bundle",
        images: ["assets/images/prducts/1000022727.jpg"],
        tags: "Genuine Leather • Handcrafted",
        tags_tr: "Hakiki Deri • El Yapımı",
        price: "$TBD",
        description: "The ultimate collector's set. Multiple hues of our gator-textured leather, stacked and ready for any occasion.",
        description_tr: "Nihai koleksiyoncu seti. Timsah dokulu derimizin birçok tonu, yığılmış ve her duruma hazır."
    },
    {
        id: "2728",
        title: "Obsidian Keyholder Wallet",
        title_tr: "Obsidyen Anahtarlı Cüzdan",
        category: "Keyholder",
        images: ["assets/images/prducts/1000022728.jpg"],
        tags: "Genuine Leather • Handcrafted",
        tags_tr: "Hakiki Deri • El Yapımı",
        price: "$TBD",
        description: "Functional elegance. This hybrid wallet secures your keys and cash in one sleek, obsidian-black package.",
        description_tr: "İşlevsel zarafet. Bu hibrit cüzdan, anahtarlarınızı ve nakit paranızı şık, obsidyen siyahı bir pakette güvence altına alır."
    },
    {
        id: "2729",
        title: "Rustic Keyholder Wallet",
        title_tr: "Rustik Anahtarlı Cüzdan",
        category: "Keyholder",
        images: ["assets/images/prducts/1000022729.jpg"],
        tags: "Genuine Leather • Handcrafted",
        tags_tr: "Hakiki Deri • El Yapımı",
        price: "$TBD",
        description: "Earth tones and rugged durability define this keyholder wallet. Ideal for the adventurer who values utility and style.",
        description_tr: "Toprak tonları ve sağlam dayanıklılık bu anahtarlı cüzdanı tanımlar. Fayda ve stile değer veren maceraperestler için ideal."
    },
    {
        id: "2806",
        title: "Minimalist Fan Collection",
        title_tr: "Minimalist Koleksiyonu",
        category: "Bundle",
        images: ["assets/images/prducts/1000022806.jpg"],
        tags: "Genuine Leather • Handcrafted",
        tags_tr: "Hakiki Deri • El Yapımı",
        price: "$TBD",
        description: "A selection of our slimmest profiles. This collection is dedicated to the minimalists who refuse to compromise on quality.",
        description_tr: "En ince profillerimizden oluşan bir seçki. Bu koleksiyon, kaliteden ödün vermeyi reddeden minimalistlere adanmıştır."
    },
    {
        id: "2807",
        title: "Heritage Snap Cardholder",
        title_tr: "Miras Çıtçıtlı Kartlık",
        category: "Cardholder",
        images: [
            "assets/images/prducts/1000022807.jpg",
            "assets/images/prducts/1000022807 2.jpg"
        ],
        tags: "Genuine Leather • Handcrafted",
        tags_tr: "Hakiki Deri • El Yapımı",
        price: "$TBD",
        description: "Secure snap closure meets classic design. The Heritage cardholder keeps your essentials safe with a satisfying click.",
        description_tr: "Güvenli çıtçıt kapanış klasik tasarımla buluşuyor. Miras kartlık, tatmin edici bir tıklama ile temel eşyalarınızı güvende tutar."
    },
    {
        id: "2808",
        title: "Snap Cardholder Spectrum",
        title_tr: "Çıtçıtlı Kartlık Spektrumu",
        category: "Cardholder",
        images: ["assets/images/prducts/1000022808.jpg"],
        tags: "Genuine Leather • Handcrafted",
        tags_tr: "Hakiki Deri • El Yapımı",
        price: "$TBD",
        description: "Why choose one? The Spectrum edition showcases the variety of finishes available for our popular snap cardholder model.",
        description_tr: "Neden birini seçesiniz? Spektrum baskısı, popüler çıtçıtlı kartlık modelimiz için mevcut olan çeşitli bitişleri sergiliyor."
    },
    {
        id: "2809",
        title: "Stacked Snap Wallets",
        title_tr: "Çıtçıtlı Cüzdan Seti",
        category: "Bundle",
        images: ["assets/images/prducts/1000022809.jpg"],
        tags: "Genuine Leather • Handcrafted",
        tags_tr: "Hakiki Deri • El Yapımı",
        price: "$TBD",
        description: "A heavy-duty collection of our snap wallets. Built to last a lifetime, these are the cornerstones of the Nowhere Craft lineup.",
        description_tr: "Çıtçıtlı cüzdanlarımızın ağır hizmet koleksiyonu. Bir ömür boyu dayanacak şekilde inşa edilen bunlar, Nowhere Craft serisinin temel taşlarıdır."
    },
    {
        id: "2832",
        title: "Shadow Black Bifold",
        title_tr: "Gölge Siyahı İki Katlı Cüzdan",
        category: "Wallet",
        images: [
            "assets/images/prducts/1000022832.jpg",
            "assets/images/prducts/1000022833.jpg",
            "assets/images/prducts/1000022834.jpg",
            "assets/images/prducts/1000022835.jpg",
            "assets/images/prducts/1000022836.jpg"
        ],
        tags: "Genuine Leather • Handcrafted",
        tags_tr: "Hakiki Deri • El Yapımı",
        price: "$TBD",
        description: "Our flagship bifold in pure Shadow Black. Features multiple card slots, a bill compartment, and the unmistakable scent of premium leather.",
        description_tr: "Saf Gölge Siyahı amiral gemimiz iki katlı cüzdan. Çoklu kart yuvaları, banknot bölmesi ve birinci sınıf derinin belirgin kokusuna sahiptir."
    }
];

let currentCategory = 'All';
let searchQuery = '';

function getLocalizedStr(item, field) {
    if (window.currentLanguage === 'tr') {
        return item[field + '_tr'] || item[field];
    }
    return item[field];
}

function getLocalizedCategory(category) {
    if (category === 'All') return window.translations[window.currentLanguage].filter_all || 'All';
    const key = `category_${category.toLowerCase()}`;
    return window.translations[window.currentLanguage][key] || category;
}

function createArtifactCard(artifact) {
    const card = document.createElement('button');
    card.className = 'artifact-card group text-left relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-sm';
    const title = getLocalizedStr(artifact, 'title');
    card.setAttribute('aria-label', `View details for ${title}`);
    card.onclick = () => openArtifactModal(artifact.id);

    // Handle image array
    const images = artifact.images || [artifact.image];
    const mainImage = images[0];
    const hoverImage = images.length > 1 ? images[1] : null;

    let hoverImageHtml = '';
    if (hoverImage) {
        hoverImageHtml = `
            <img src="${hoverImage}" 
                 loading="lazy"
                 alt="${title} - Alternate View"
                 class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 z-10" />
        `;
    }

    // Badge for multi-image items
    const galleryBadge = images.length > 1
        ? `<div class="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 bg-black/50 backdrop-blur-sm p-1 rounded-full border border-white/10">
             <span class="material-symbols-outlined text-white/70 text-sm block">filter_none</span>
           </div>`
        : '';

    const displayCategory = getLocalizedCategory(artifact.category);

    card.innerHTML = `
        <div class="relative w-full aspect-[4/5] overflow-hidden bg-[#020202] border-ornate shadow-2xl">
            <img src="${mainImage}" 
                 loading="lazy"
                 alt="${title}"
                 class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
            
            ${hoverImageHtml}
            ${galleryBadge}
            
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 pointer-events-none"></div>
            
            <div class="artifact-details">
                <div class="artifact-details-icon-wrap">
                    <span class="material-symbols-outlined text-primary text-sm">visibility</span>
                </div>
                <h3 class="artifact-title">${title}</h3>
                <p class="artifact-tags">${displayCategory}</p>
                <div class="flex items-center justify-center gap-2 mt-2">
                    <span class="artifact-price">${artifact.price}</span>
                </div>
            </div>
        </div>
    `;
    return card;
}

function renderArtifacts(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Filter Logic
    let filteredItems = artifactsData;

    if (currentCategory !== 'All') {
        filteredItems = filteredItems.filter(item => item.category === currentCategory);
    }

    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredItems = filteredItems.filter(item => {
            const title = item.title.toLowerCase();
            const tags = item.tags.toLowerCase();
            const titleTr = (item.title_tr || '').toLowerCase();
            const tagsTr = (item.tags_tr || '').toLowerCase();
            return title.includes(query) || tags.includes(query) || titleTr.includes(query) || tagsTr.includes(query);
        });
    }

    // Update Count
    const countEl = document.getElementById('artifact-count');
    if (countEl) countEl.textContent = filteredItems.length;

    // Render
    container.innerHTML = '';

    if (filteredItems.length === 0) {
        const noResultsText = window.translations[window.currentLanguage].no_results || "No artifacts found.";
        container.innerHTML = `
            <div class="col-span-full py-20 text-center opacity-50">
                <span class="material-symbols-outlined text-4xl mb-4">search_off</span>
                <p class="font-serif italic text-xl">${noResultsText}</p>
            </div>
        `;
        return;
    }

    filteredItems.forEach((artifact, index) => {
        const card = createArtifactCard(artifact);
        // Staggered animation delay
        card.style.animation = `fadeInUp 0.6s ease-out forwards ${index * 0.05}s`;
        card.style.opacity = '0'; // Initial state for animation
        container.appendChild(card);
    });
}
window.renderArtifacts = renderArtifacts;

// --- Filter Logic ---

function setupFilters() {
    const filterContainer = document.getElementById('artifact-filters');
    if (!filterContainer) return;

    // Get unique categories
    const categories = ['All', ...new Set(artifactsData.map(item => item.category))];

    filterContainer.innerHTML = categories.map(cat => `
        <button onclick="setCategory('${cat}')" 
                class="filter-btn ${cat === currentCategory ? 'active' : ''}">
            ${getLocalizedCategory(cat)}
        </button>
    `).join('');

    // Search Listener
    const searchInput = document.getElementById('artifact-search');
    if (searchInput) {
        // Update placeholder
        searchInput.placeholder = window.translations[window.currentLanguage].search_placeholder || "Search artifacts...";

        // Remove old listeners to avoid duplicates if re-running
        const newSearch = searchInput.cloneNode(true);
        searchInput.parentNode.replaceChild(newSearch, searchInput);

        newSearch.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderArtifacts('all-artifacts-grid');
        });
    }
}
window.setupFilters = setupFilters;

function setCategory(category) {
    currentCategory = category;

    // Update active button state - NEED TO RE-RENDER BUTTONS TO UPDATE LANG IF NEEDED, BUT HERE JUST CLASS
    // Actually if we switch language, setupFilters() should be called again to translate buttons.
    // For now, toggleLanguage logic calls renderArtifacts, but setupFilters needs to be called too if on that page.
    // I will add that to toggleLanguage.

    // Just toggle class for now
    // Note: This logic assumes buttons are already rendered with correct text.
    // If we rely on setupFilters() to redraw, this function just sets state and re-renders grid.
    setupFilters(); // Re-render buttons to ensure correct active state and language.
    renderArtifacts('all-artifacts-grid');
}

// --- Modal Logic ---

let currentArtifactId = null;

function openArtifactModal(id) {
    const artifact = artifactsData.find(a => a.id === id);
    if (!artifact) return;

    currentArtifactId = id;
    const modal = document.getElementById('artifact-modal');
    const content = document.getElementById('modal-content-body');

    const title = getLocalizedStr(artifact, 'title');
    const description = getLocalizedStr(artifact, 'description');
    const category = getLocalizedCategory(artifact.category);
    const trans = window.translations[window.currentLanguage];

    // Populate Modal
    content.innerHTML = `
        <div class="flex flex-col md:flex-row h-full">
            <!-- Image Section -->
            <div class="w-full md:w-1/2 bg-[#050505] relative min-h-[400px] md:min-h-full group">
                <img src="${artifact.images[0]}" 
                     id="modal-main-image"
                     class="absolute inset-0 w-full h-full object-cover" 
                     alt="${title}">
                
                ${artifact.images.length > 1 ? `
                <div class="absolute bottom-4 left-0 w-full flex justify-center gap-2 p-4">
                    ${artifact.images.map((img, idx) => `
                        <button onclick="document.getElementById('modal-main-image').src = '${img}'" 
                                class="w-12 h-12 border border-white/20 hover:border-primary transition-colors overflow-hidden rounded-sm bg-black">
                            <img src="${img}" class="w-full h-full object-cover">
                        </button>
                    `).join('')}
                </div>
                ` : ''}
            </div>

            <!-- Details Section -->
            <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#0a0a0a]">
                <div class="mb-2 text-primary font-serif italic text-sm tracking-wider">
                    ${category} • #${artifact.id}
                </div>
                
                <h2 class="text-3xl md:text-5xl font-gothic text-white mb-6 uppercase leading-tight">
                    ${title}
                </h2>
                
                <div class="w-20 h-px bg-gradient-to-r from-primary to-transparent mb-8"></div>
                
                <p class="text-gray-300 font-sans font-light leading-relaxed text-lg mb-8">
                    ${description}
                </p>
                
                <div class="flex flex-col gap-4 mt-auto">
                    <div class="flex items-center justify-between border-t border-white/10 pt-6 mb-6">
                        <span class="text-gray-400 uppercase tracking-widest text-xs font-bold">${trans.modal_price}</span>
                        <span class="text-2xl font-serif text-primary font-bold">${artifact.price}</span>
                    </div>
                    
                    <a href="index.html#contact" onclick="closeModal()" 
                       class="btn-shop btn-shop-primary text-center group/btn relative overflow-hidden">
                        <span class="relative z-10 flex items-center justify-center gap-2">
                            ${trans.modal_inquire}
                            <span class="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    `;

    // Show Modal
    modal.classList.remove('invisible', 'opacity-0');
    modal.classList.add('visible', 'opacity-100');
    document.body.style.overflow = 'hidden'; // Lock scroll
}

function closeModal() {
    const modal = document.getElementById('artifact-modal');
    modal.classList.remove('visible', 'opacity-100');
    modal.classList.add('invisible', 'opacity-0');
    document.body.style.overflow = ''; // Unlock scroll
    currentArtifactId = null;
}

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // Only run on artifacts page
    if (document.getElementById('all-artifacts-grid')) {
        setupFilters();
        renderArtifacts('all-artifacts-grid');

        // Setup Modal Click Outside
        const modal = document.getElementById('artifact-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });

            // ESC key support
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') closeModal();
            });
        }
    }
});
