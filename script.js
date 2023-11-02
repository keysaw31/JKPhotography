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
            targetId === 'albums-section' ? 100 : 0; 

            window.scrollTo({
                top: targetElement.offsetTop + offset,
                behavior: 'smooth'
            });
        });
    });
});



