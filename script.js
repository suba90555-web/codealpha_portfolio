/* ==============================
           MOBILE MENU
        ============================== */

        const menuBtn = document.getElementById("menuBtn");
        const navLinks = document.getElementById("navLinks");

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuBtn.textContent = "✕";
            } else {
                menuBtn.textContent = "☰";
            }

        });


        /* Close mobile menu after clicking */

        document.querySelectorAll(".nav-links a").forEach(function(link) {

            link.addEventListener("click", function() {

                navLinks.classList.remove("active");
                menuBtn.textContent = "☰";

            });

        });


        /* ==============================
           DARK / LIGHT MODE
        ============================== */

        const themeBtn = document.getElementById("themeBtn");

        themeBtn.addEventListener("click", function() {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                themeBtn.textContent = "☀️";

                localStorage.setItem("theme", "dark");

            } else {

                themeBtn.textContent = "🌙";

                localStorage.setItem("theme", "light");

            }

        });


        /* Remember theme */

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {

            document.body.classList.add("dark-mode");
            themeBtn.textContent = "☀️";

        }


        /* ==============================
           SCROLL REVEAL ANIMATION
        ============================== */

        const revealElements =
            document.querySelectorAll(".reveal");

        function revealOnScroll() {

            revealElements.forEach(function(element) {

                const windowHeight =
                    window.innerHeight;

                const elementTop =
                    element.getBoundingClientRect().top;

                const revealPoint = 120;

                if (elementTop <
                    windowHeight - revealPoint) {

                    element.classList.add("active");

                }

            });

        }

        window.addEventListener("scroll", revealOnScroll);

        revealOnScroll();


        /* ==============================
           CONTACT FORM
        ============================== */

        const contactForm =
            document.getElementById("contactForm");

        contactForm.addEventListener("submit", function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            alert(
                "Thank you, " +
                name +
                "! Your message has been received."
            );

            contactForm.reset();

        });


        /* ==============================
           ACTIVE NAVIGATION
        ============================== */

        const sections =
            document.querySelectorAll("section");

        const navItems =
            document.querySelectorAll(".nav-links a");

        window.addEventListener("scroll", function() {

            let current = "";

            sections.forEach(function(section) {

                const sectionTop =
                    section.offsetTop - 120;

                const sectionHeight =
                    section.clientHeight;

                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionTop + sectionHeight
                ) {

                    current = section.getAttribute("id");

                }

            });

            navItems.forEach(function(link) {

                link.style.color = "";

                if (
                    link.getAttribute("href") === "#" + current
                ) {

                    link.style.color = "var(--primary)";

                }

            });

        });
