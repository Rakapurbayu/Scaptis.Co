document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');
    const searchContainer = document.querySelector('.search-container');

    searchIcon.addEventListener('click', function() {
        if (searchContainer.classList.contains('active')) {
            searchContainer.classList.remove('active');
        } else {
            searchContainer.classList.add('active');
            searchInput.focus();  // Fokus pada input pencarian
        }
    });

    document.addEventListener('click', function(event) {
        if (!searchContainer.contains(event.target) && !searchIcon.contains(event.target)) {
            searchContainer.classList.remove('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.ri-shopping-bag-2-line');
    const cartPopup = document.querySelector('.cart-popup');

    cartIcon.addEventListener('click', function() {
        if (cartPopup.classList.contains('active')) {
            cartPopup.classList.remove('active');
        } else {
            cartPopup.classList.add('active');
        }
    });

    document.addEventListener('click', function(event) {
        if (!cartPopup.contains(event.target) && !cartIcon.contains(event.target)) {
            cartPopup.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleIcon = document.querySelector('.toggle__icon');
    const navLinks = document.querySelector('.nav__links');

    toggleIcon.addEventListener('click', function () {
    toggleIcon.classList.toggle('active');
    navLinks.classList.toggle('active');
    });
});
