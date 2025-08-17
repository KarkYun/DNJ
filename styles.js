// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const searchForm = document.querySelector('.search-form');
    const closeSearch = document.getElementById('close-search');
    const searchBox = document.getElementById('search-box');
    
    // Mobile menu functionality
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar');

    // Toggle mobile menu
    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
        
        // Change icon from bars to times when menu is open
        if (navbar.classList.contains('active')) {
            menuBtn.classList.remove('fa-bars');
            menuBtn.classList.add('fa-times');
        } else {
            menuBtn.classList.remove('fa-times');
            menuBtn.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
            menuBtn.classList.remove('fa-times');
            menuBtn.classList.add('fa-bars');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
            navbar.classList.remove('active');
            menuBtn.classList.remove('fa-times');
            menuBtn.classList.add('fa-bars');
        }
    });

    // Open search form when search icon is clicked
    searchBtn.addEventListener('click', function() {
        searchForm.classList.add('active');
        searchBox.focus(); // Focus on the search input
        
        // Close mobile menu if it's open
        navbar.classList.remove('active');
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
    });

    // Close search form when close icon is clicked
    closeSearch.addEventListener('click', function() {
        searchForm.classList.remove('active');
        searchBox.value = ''; // Clear the search input
    });

    // Close search form when clicking outside of it
    document.addEventListener('click', function(e) {
        if (!searchForm.contains(e.target) && !searchBtn.contains(e.target)) {
            searchForm.classList.remove('active');
        }
    });

    // Close search form when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchForm.classList.remove('active');
            searchBox.value = ''; // Clear the search input
            
            // Also close mobile menu
            navbar.classList.remove('active');
            menuBtn.classList.remove('fa-times');
            menuBtn.classList.add('fa-bars');
        }
    });

    // // Handle search form submission (you can customize this)
    // const searchFormElement = searchForm.querySelector('form');
    // searchFormElement.addEventListener('submit', function(e) {
    //     e.preventDefault(); // Prevent default form submission
    //     const searchQuery = searchBox.value.trim();
        
    //     if (searchQuery) {
    //         // Add your search logic here
    //         console.log('Searching for:', searchQuery);
    //         // For now, just close the search form
    //         searchForm.classList.remove('active');
    //         // You can add actual search functionality here
    //     }
    // });
});

// Search bar
