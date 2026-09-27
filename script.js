```javascript
// Animasi sederhana ketika halaman dibuka

document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        ".about-card, .project-card, .skill"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }

            });

        },
        {
            threshold: 0.1
        }
    );


    elements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "0.7s ease";

        observer.observe(element);

    });

});
```
