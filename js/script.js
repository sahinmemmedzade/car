const icon = document.getElementsByClassName("iconmenu")[0];
const littlemenu = document.getElementsByClassName("littlemenu")[0];

icon.addEventListener("click", () => {
    if (littlemenu.style.display === "block") {
        littlemenu.style.display = "none";
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
        icon.style.transform = "rotate(0deg)"; 
    } else {
        littlemenu.style.display = "block";
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
        icon.style.transform = "rotate(90deg)"; 
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.querySelector(".icons .fa-solid.fa-magnifying-glass");
    const searchBox = document.querySelector(".search");

    searchIcon.addEventListener("click", function() {
        searchBox.classList.toggle("active");
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const closeIcon = document.querySelector('.close-icon');
    const searchBox = document.querySelector('.search');

    const isSearchActive = localStorage.getItem('searchActive');
    if (isSearchActive === 'true') {
        searchBox.classList.add('active');
    }

    searchIcon.addEventListener('click', function() {
        searchBox.classList.add('active');
        localStorage.setItem('searchActive', 'true');
    });

    closeIcon.addEventListener('click', function() {
        searchBox.classList.remove('active');
        localStorage.setItem('searchActive', 'false');
    });
    
    window.addEventListener('beforeunload', function() {
        if (searchBox.classList.contains('active')) {
            localStorage.setItem('searchActive', 'true');
        }
    });
});
