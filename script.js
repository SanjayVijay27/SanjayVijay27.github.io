document.addEventListener('DOMContentLoaded', () => {

    // Accordion Functionality
    const items = document.querySelectorAll('.content-box');

    items.forEach(item => {
        const header = item.querySelector('.header');

        header.addEventListener('click', () => {
            // Toggle current
            const isActive = item.classList.contains('active');

            if (isActive) {
                item.classList.remove('active');
                header.setAttribute('aria-expanded', 'false');
            } else {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
            }
        });

        // Accessibility: Allow Enter/Space to toggle
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth Scrolling for Nav Links (Optional fallback if CSS smooth-scroll fails)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Image Modal Logic
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeSpan = document.querySelector(".close");

    // Add click event to all images inside project-media
    document.querySelectorAll('.project-media img').forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    if (closeSpan) {
        closeSpan.onclick = function () {
            modal.style.display = "none";
        }
    }

    // Close on click outside the image
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

});
