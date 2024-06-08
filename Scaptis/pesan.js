document.addEventListener("DOMContentLoaded", function() {
    // Select elements from HTML
    let musthaveGrid = document.querySelector('.musthave__grid'); // Container for product cards
    let musthaveNav = document.querySelector('.musthave__nav'); // Navigation links for categories

    let products = [
        {
            id: 1,
            name: 'Basic long sleeve T-shirt',
            image: 'knit.jpeg',
            price: 159000,
            category: 'man'
        },
        {
            id: 2,
            name: 'Ribbed T-shirt with buttons',
            image: 'oversize.jpeg',
            price: 130000,
            category: 'man'
        },
        {
            id: 3,
            name: 'Jacket with side strips',
            image: 'jacket.jpeg',
            price: 329000,
            category: 'man'
        },
        {
            id: 4,
            name: 'High-heel tubular sandals',
            image: 'polo.jpeg',
            price: 69000,
            category: 'man'
        },
        {
            id: 5,
            name: 'Coral fabric belt bag',
            image: 'wmlong.jpeg',
            price: 89000,
            category: 'women'
        },
        {
            id: 6,
            name: 'Piggy skater slogan T-shirt',
            image: 'wmtshirt.jpeg',
            price: 59000,
            category: 'women'
        },
        {
            id: 7,
            name: 'White platform boots',
            image: 'wmknit.jpeg',
            price: 59000,
            category: 'women'
        },
        {
            id: 8,
            name: 'Sweater vest with sleeves',
            image: 'wmbag.jpeg',
            price: 259000,
            category: 'bag'
        },
        {
            id: 9,
            name: 'Coral fabric belt bag',
            image: 'kidsjacket.jpeg',
            price: 129000,
            category: 'kids'
        },
        {
            id: 10,
            name: 'Piggy skater slogan T-shirt',
            image: 'kidsoversize.jpeg',
            price: 59000,
            category: 'kids'
        },
        {
            id: 11,
            name: 'White platform boots',
            image: 'kidswmtshirt.jpeg',
            price: 49000,
            category: 'kids'
        }
    ];

    // Function to initialize the app and populate products
    function initApp() {
        products.forEach(product => {
            let card = createMustHaveCard(product);
            musthaveGrid.appendChild(card);
        });

        // Populate navigation links for categories
        populateCategories();
    }

    // Function to create a must have card based on product data
    function createMustHaveCard(product) {
        let card = document.createElement('div');
        card.classList.add('musthave__card');
        card.setAttribute('data-category', product.category);

        card.innerHTML = `
            <img src="assets/${product.image}" alt="${product.name}" />
            <h4>${product.name}</h4>
            <p><del>${formatRupiah(45000)}</del> ${formatRupiah(product.price)}</p>
        `;

        return card;
    }

    // Function to populate category navigation links
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

    // Function to filter products based on selected category
    function filterProducts(event) {
        event.preventDefault();
        let category = event.target.getAttribute('href').slice(1); // Get category from href

        // Show/hide product cards based on selected category
        let cards = document.querySelectorAll('.musthave__card');
        cards.forEach(card => {
            let cardCategory = card.getAttribute('data-category');
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Function to format price to Indonesian Rupiah (IDR)
    function formatRupiah(price) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    }

    // Call the initApp function to initialize the application
    initApp();
});
