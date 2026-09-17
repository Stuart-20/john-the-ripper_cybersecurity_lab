document.addEventListener("DOMContentLoaded", () => {

    // 1. Smooth scrolling for navigation links

    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // 2. Highlight the active navigation section

    const sections = document.querySelectorAll("main section[id]");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    navLinks.forEach((link) => {
                        link.classList.remove("active");
                    });

                    const activeLink = document.querySelector(
                        `.nav-links a[href="#${entry.target.id}"]`
                    );

                    if (activeLink) {
                        activeLink.classList.add("active");
                    }
                }
            });
        },
        {
            rootMargin: "-30% 0px -60% 0px",
            threshold: 0
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

    // 3. Reveal elements when scrolling

    const revealElements = document.querySelectorAll(
        ".overview-card, .objective-card, .process-step, .command-card, .lesson-card, .evidence-card"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }
            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });


    // 4. Add current year automatically

    const footerYear = document.querySelector(".footer-year");

    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    // 5. Console message

    console.log(
        "%c🔐 John the Ripper Cybersecurity Lab",
        "color: #00ff88; font-size: 18px; font-weight: bold;"
    );

    console.log(
        "%cPassword auditing project loaded successfully.",
        "color: #9aa7b3; font-size: 14px;"
    );

});