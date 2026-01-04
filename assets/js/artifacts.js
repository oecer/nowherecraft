const artifactsData = [
    {
        id: "2365",
        title: "Cognac Gator Bifold",
        category: "Wallet",
        images: ["assets/images/prducts/1000022365.jpg"],
        tags: "Genuine Leather • Handcrafted",
        price: "$TBD",
        description: "A classic bifold wallet featuring a rich cognac finish with alligator texture embossing. Hand-stitched for durability and designed to age beautifully with use."
    },
    {
        id: "2724",
        title: "Midnight Distressed Cardholder",
        category: "Cardholder",
        images: [
            "assets/images/prducts/1000022724.jpg",
            "assets/images/prducts/1000022724 2.jpg"
        ],
        tags: "Genuine Leather • Handcrafted",
        price: "$TBD",
        description: "Minimalist cardholder in a deep midnight blue with a distressed finish. Perfect for those who prefer to carry light while making a bold statement."
    },
    {
        id: "2725",
        title: "Gator Texture Trio",
        category: "Bundle",
        images: ["assets/images/prducts/1000022725.jpg"],
        tags: "Genuine Leather • Handcrafted",
        price: "$TBD",
        description: "A curated collection of three essential items featuring our signature alligator texture. Includes a wallet, cardholder, and key fob."
    },
    {
        id: "2726",
        title: "Abyssal Blue Gator Wallet",
        category: "Wallet",
        images: ["assets/images/prducts/1000022726.jpg"],
        tags: "Genuine Leather • Handcrafted",
        price: "$TBD",
        description: "Deep blue hues merge with rugged textures in this standard bifold. The 'Abyssal' series represents the depth of our craftsmanship."
    },
    {
        id: "2727",
        title: "Stacked Gator Collection",
        category: "Bundle",
        images: ["assets/images/prducts/1000022727.jpg"],
        tags: "Genuine Leather • Handcrafted",
        price: "$TBD",
        description: "The ultimate collector's set. Multiple hues of our gator-textured leather, stacked and ready for any occasion."
    },
    {
        id: "2728",
        title: "Obsidian Keyholder Wallet",
        category: "Keyholder",
        images: ["assets/images/prducts/1000022728.jpg"],
        tags: "Genuine Leather • Handcrafted",
        price: "$TBD",
        description: "Functional elegance. This hybrid wallet secures your keys and cash in one sleek, obsidian-black package."
    },
    {
        id: "2729",
        title: "Rustic Keyholder Wallet",
        category: "Keyholder",
        images: ["assets/images/prducts/1000022729.jpg"],
        tags: "Genuine Leather • Handcrafted",
        price: "$TBD",
        description: "Earth tones and rugged durability define this keyholder wallet. Ideal for the adventurer who values utility and style."
    },
    {
        id: "2806",
        title: "Minimalist Fan Collection",
        category: "Bundle",
        images: ["assets/images/prducts/1000022806.jpg"],
        tags: "Genuine Leather • Handcrafted",
        price: "$TBD",
        description: "A selection of our slimmest profiles. This collection is dedicated to the minimalists who refuse to compromise on quality."
    },
    {
        id: "2807",
        title: "Heritage Snap Cardholder",
        category: "Cardholder",
        images: [
            "assets/images/prducts/1000022807.jpg",
            "assets/images/prducts/1000022807 2.jpg"
        ],
        tags: "Genuine Leather • Handcrafted",
        price: "$TBD",
        description: "Secure snap closure meets classic design. The Heritage cardholder keeps your essentials safe with a satisfying click."
    },
    {
        id: "2808",
        title: "Snap Cardholder Spectrum",
        category: "Cardholder",
        images: ["assets/images/prducts/1000022808.jpg"],
        tags: "Genuine Leather • Handcrafted",
        price: "$TBD",
        description: "Why choose one? The Spectrum edition showcases the variety of finishes available for our popular snap cardholder model."
    },
    {
        id: "2809",
        title: "Stacked Snap Wallets",
        category: "Bundle",
        images: ["assets/images/prducts/1000022809.jpg"],
        tags: "Genuine Leather • Handcrafted",
        price: "$TBD",
        description: "A heavy-duty collection of our snap wallets. Built to last a lifetime, these are the cornerstones of the Nowhere Craft lineup."
    },
    {
        id: "2832",
        title: "Shadow Black Bifold",
        category: "Wallet",
        images: [
            "assets/images/prducts/1000022832.jpg",
            "assets/images/prducts/1000022833.jpg",
            "assets/images/prducts/1000022834.jpg",
            "assets/images/prducts/1000022835.jpg",
            "assets/images/prducts/1000022836.jpg"
        ],
        tags: "Genuine Leather • Handcrafted",
        price: "$TBD",
        description: "Our flagship bifold in pure Shadow Black. Features multiple card slots, a bill compartment, and the unmistakable scent of premium leather."
    }
];

let currentCategory = 'All';
let searchQuery = '';

function createArtifactCard(artifact) {
    const card = document.createElement('button');
    card.className = 'artifact-card group text-left relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-sm';
    card.setAttribute('aria-label', `View details for ${artifact.title}`);
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
                 alt="${artifact.title} - Alternate View"
                 class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 z-10" />
        `;
    }

    // Badge for multi-image items
    const galleryBadge = images.length > 1
        ? `<div class="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 bg-black/50 backdrop-blur-sm p-1 rounded-full border border-white/10">
             <span class="material-symbols-outlined text-white/70 text-sm block">filter_none</span>
           </div>`
        : '';

    card.innerHTML = `
        <div class="relative w-full aspect-[4/5] overflow-hidden bg-[#020202] border-ornate shadow-2xl">
            <img src="${mainImage}" 
                 loading="lazy"
                 alt="${artifact.title}"
                 class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
            
            ${hoverImageHtml}
            ${galleryBadge}
            
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 pointer-events-none"></div>
            
            <div class="artifact-details">
                <div class="artifact-details-icon-wrap">
                    <span class="material-symbols-outlined text-primary text-sm">visibility</span>
                </div>
                <h3 class="artifact-title">${artifact.title}</h3>
                <p class="artifact-tags">${artifact.category}</p>
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
        filteredItems = filteredItems.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.tags.toLowerCase().includes(query)
        );
    }

    // Update Count
    const countEl = document.getElementById('artifact-count');
    if (countEl) countEl.textContent = filteredItems.length;

    // Render
    container.innerHTML = '';

    if (filteredItems.length === 0) {
        container.innerHTML = `
            <div class="col-span-full py-20 text-center opacity-50">
                <span class="material-symbols-outlined text-4xl mb-4">search_off</span>
                <p class="font-serif italic text-xl">No artifacts found in the archives.</p>
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

// --- Filter Logic ---

function setupFilters() {
    const filterContainer = document.getElementById('artifact-filters');
    if (!filterContainer) return;

    // Get unique categories
    const categories = ['All', ...new Set(artifactsData.map(item => item.category))];

    filterContainer.innerHTML = categories.map(cat => `
        <button onclick="setCategory('${cat}')" 
                class="filter-btn ${cat === currentCategory ? 'active' : ''}">
            ${cat}
        </button>
    `).join('');

    // Search Listener
    const searchInput = document.getElementById('artifact-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderArtifacts('all-artifacts-grid');
        });
    }
}

function setCategory(category) {
    currentCategory = category;

    // Update active button state
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.textContent.trim() === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

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

    // Populate Modal
    content.innerHTML = `
        <div class="flex flex-col md:flex-row h-full">
            <!-- Image Section -->
            <div class="w-full md:w-1/2 bg-[#050505] relative min-h-[400px] md:min-h-full group">
                <img src="${artifact.images[0]}" 
                     id="modal-main-image"
                     class="absolute inset-0 w-full h-full object-cover" 
                     alt="${artifact.title}">
                
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
                    ${artifact.category} • #${artifact.id}
                </div>
                
                <h2 class="text-3xl md:text-5xl font-gothic text-white mb-6 uppercase leading-tight">
                    ${artifact.title}
                </h2>
                
                <div class="w-20 h-px bg-gradient-to-r from-primary to-transparent mb-8"></div>
                
                <p class="text-gray-300 font-sans font-light leading-relaxed text-lg mb-8">
                    ${artifact.description}
                </p>
                
                <div class="flex flex-col gap-4 mt-auto">
                    <div class="flex items-center justify-between border-t border-white/10 pt-6 mb-6">
                        <span class="text-gray-400 uppercase tracking-widest text-xs font-bold">Price</span>
                        <span class="text-2xl font-serif text-primary font-bold">${artifact.price}</span>
                    </div>
                    
                    <a href="index.html#contact" onclick="closeModal()" 
                       class="btn-shop btn-shop-primary text-center group/btn relative overflow-hidden">
                        <span class="relative z-10 flex items-center justify-center gap-2">
                            Inquire for Purchase
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
