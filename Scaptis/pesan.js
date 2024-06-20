document.addEventListener("DOMContentLoaded", function() {
    let musthaveGrid = document.querySelector('.musthave__grid'); // Container for product cards
    let musthaveNav = document.querySelector('.musthave__nav'); // Navigation links for categories

    let products = [
        {
            id: 1,
            name: 'Magin Olive 32 Knit Sweater',
            image: 'knit.jpeg',
            price: 159000,
            category: 'man'
        },
        {
            id: 2,
            name: 'Moutley White Oversize',
            image: 'oversize.jpeg',
            price: 130000,
            category: 'man'
        },
        {
            id: 3,
            name: 'FMC Parka Jacket Green Kaiju',
            image: 'jacket.jpeg',
            price: 329000,
            category: 'man'
        },
        {
            id: 4,
            name: '3SCDN Polo Fracture',
            image: 'polo.jpeg',
            price: 69000,
            category: 'man'
        },
        {
            id: 5,
            name: 'Coral Dulouvere Long Sleeve',
            image: 'wmlong.jpeg',
            price: 89000,
            category: 'women'
        },
        {
            id: 6,
            name: 'Midnight Oversize',
            image: 'wmtshirt.jpeg',
            price: 59000,
            category: 'women'
        },
        {
            id: 7,
            name: 'Lounder Woman Knit',
            image: 'wmknit.jpeg',
            price: 59000,
            category: 'women'
        },
        {
            id: 8,
            name: 'Greenlight Women 2 in 1 Bags',
            image: 'wmbag.jpeg',
            price: 259000,
            category: 'bag'
        },
        {
            id: 9,
            name: 'SSST Zipper Kids',
            image: 'kidsjacket.jpeg',
            price: 129000,
            category: 'kids'
        },
        {
            id: 10,
            name: '3SCND Baseball Kids',
            image: 'kidsoversize.jpeg',
            price: 59000,
            category: 'kids'
        },
        {
            id: 11,
            name: 'Best Friends Girl T-Shirt',
            image: 'kidswmtshirt.jpeg',
            price: 49000,
            category: 'kids'
        }
    ];

    function initApp() {
        products.forEach(product => {
            let card = createMustHaveCard(product);
            musthaveGrid.appendChild(card);
        });

        populateCategories();
    }

    function createMustHaveCard(product) {
        let link = document.createElement('a');
        link.href = `product.html?id=${product.id}`; // Link ke halaman detail produk
        link.classList.add('card-link'); // Optional: Add a class for styling purposes

        let card = document.createElement('div');
        card.classList.add('musthave__card');
        card.setAttribute('data-category', product.category);

        // Menyusun HTML card dengan harga terformat
        card.innerHTML = `
            <img src="assets/${product.image}" alt="${product.name}" />
            <div class="musthave__content">
                <h4>${product.name}</h4>
                <p class="price">${formatRupiah(product.price)}</p>
            </div>
        `;

        link.appendChild(card);

        return link; // Mengembalikan link, bukan card
    }

    function populateCategories() {
        let categories = ['all', 'man', 'women', 'bag', 'kids'];

        categories.forEach(category => {
            let link = document.createElement('a');
            link.href = `#${category}`;
            link.textContent = category.toUpperCase();
            link.addEventListener('click', filterProducts);
            musthaveNav.appendChild(link);
        });
    }

    function filterProducts(event) {
        event.preventDefault();
        let category = event.target.getAttribute('href').slice(1); // Mendapatkan kategori dari href

        let cards = document.querySelectorAll('.musthave__card');
        cards.forEach(card => {
            let cardCategory = card.getAttribute('data-category');

            // Tampilkan atau sembunyikan card berdasarkan kategori yang dipilih
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
                musthaveGrid.insertBefore(card, musthaveGrid.firstChild); // Pindahkan card ke awal kontainer
            } else {
                card.style.display = 'none';
            }
        });
    }

    function formatRupiah(price) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    }

    initApp(); // Panggil fungsi inisialisasi untuk memulai aplikasi
});
