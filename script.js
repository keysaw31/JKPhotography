function toggleMenu(x) {
   x.classList.toggle("change");
   var menuDropdown = document.getElementById("menuDropdown");
   menuDropdown.style.display = (menuDropdown.style.display === "block") ? "none" : "block";
}

document.addEventListener('DOMContentLoaded', function() {
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function(e) {
           e.preventDefault();

           document.querySelector(this.getAttribute('href')).scrollIntoView({
               behavior: 'smooth'
           });
       });
   });
});

document.addEventListener('DOMContentLoaded', function() {
    var menuLinks = document.querySelectorAll('.menu-dropdown a');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            var offset = targetId === 'about-section' ? 300 : 
            targetId === 'services-section' ? 300 : 
            targetId === 'albums-section' ? 180 :
            targetId === 'contact-section' ? 280 : 0; 
            window.scrollTo({
                top: targetElement.offsetTop + offset,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var goBackLinks = document.querySelectorAll('.go-back');

    goBackLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var albumsSection = document.getElementById('albums-section');
            var offset = 100; // Adjust the value as needed

            window.scrollTo({
                top: albumsSection.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
});




