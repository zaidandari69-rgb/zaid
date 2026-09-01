/*==================================================
    AL-ZAID WEB SOLUTION
    COMPLETE SCRIPT.JS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {


    /*==================================================
        MOBILE MENU
    ==================================================*/

    const menuToggle =
        document.querySelector(".menu-toggle");

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const mobileMenuClose =
        document.querySelector(".mobile-menu-close");


    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", () => {

            mobileMenu.classList.add("active");

            document.body.classList.add("menu-open");

        });

    }


    if (mobileMenuClose && mobileMenu) {

        mobileMenuClose.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            document.body.classList.remove("menu-open");

        });

    }


    /*==================================================
        MOBILE NAV LINKS
    ==================================================*/

    const mobileNavLinks =
        document.querySelectorAll(".mobile-nav a");


    mobileNavLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (mobileMenu) {

                mobileMenu.classList.remove("active");

            }

            document.body.classList.remove("menu-open");

        });

    });


    /*==================================================
        CLOSE MENU OUTSIDE CLICK
    ==================================================*/

    document.addEventListener("click", (event) => {

        if (

            mobileMenu &&

            mobileMenu.classList.contains("active") &&

            !mobileMenu.contains(event.target) &&

            menuToggle &&

            !menuToggle.contains(event.target)

        ) {

            mobileMenu.classList.remove("active");

            document.body.classList.remove("menu-open");

        }

    });


    /*==================================================
        ESC KEY CLOSE MENU
    ==================================================*/

    document.addEventListener("keydown", (event) => {

        if (

            event.key === "Escape" &&

            mobileMenu

        ) {

            mobileMenu.classList.remove("active");

            document.body.classList.remove("menu-open");

        }

    });


    /*==================================================
        BACK TO TOP
    ==================================================*/

    const backToTop =
        document.querySelector(".back-to-top");


    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                backToTop.classList.add("show");

            }

            else {

                backToTop.classList.remove("show");

            }

        });


        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /*==================================================
        HEADER SCROLL EFFECT
    ==================================================*/

    const siteHeader =
        document.querySelector(".site-header");


    if (siteHeader) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                siteHeader.classList.add("scrolled");

            }

            else {

                siteHeader.classList.remove("scrolled");

            }

        });

    }


    /*==================================================
        PORTFOLIO FILTER
    ==================================================*/

    const filterButtons =
        document.querySelectorAll(".filter-btn");


    const projectCards =
        document.querySelectorAll(".project-card");


    if (

        filterButtons.length &&

        projectCards.length

    ) {


        filterButtons.forEach((button) => {


            button.addEventListener("click", () => {


                const filterValue =
                    button.getAttribute("data-filter");


                /* REMOVE ACTIVE */

                filterButtons.forEach((btn) => {

                    btn.classList.remove("active");

                });


                /* ADD ACTIVE */

                button.classList.add("active");


                /* FILTER PROJECTS */

                projectCards.forEach((card) => {


                    const category =
                        card.getAttribute("data-category");


                    if (

                        filterValue === "all" ||

                        category === filterValue

                    ) {


                        card.style.display = "block";


                        setTimeout(() => {

                            card.classList.add("filter-show");

                        }, 10);


                    }

                    else {


                        card.classList.remove(

                            "filter-show"

                        );


                        card.style.display = "none";

                    }

                });

            });

        });

    }


    /*==================================================
        SMOOTH ANCHOR SCROLL
    ==================================================*/

    const anchorLinks =
        document.querySelectorAll('a[href^="#"]');


    anchorLinks.forEach((link) => {


        link.addEventListener("click", (event) => {


            const targetId =
                link.getAttribute("href");


            if (

                targetId === "#" ||

                targetId === ""

            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });


    /*==================================================
        SCROLL REVEAL
    ==================================================*/

    const revealElements =
        document.querySelectorAll(

            ".project-card, " +

            ".approach-point, " +

            ".portfolio-cta-content"

        );


    if (

        revealElements.length &&

        "IntersectionObserver" in window

    ) {


        const revealObserver =

            new IntersectionObserver(

                (entries, observer) => {


                    entries.forEach((entry) => {


                        if (

                            entry.isIntersecting

                        ) {


                            entry.target.classList.add(

                                "visible"

                            );


                            observer.unobserve(

                                entry.target

                            );

                        }

                    });


                },

                {

                    threshold: 0.12

                }

            );


        revealElements.forEach((element) => {

            revealObserver.observe(element);

        });

    }


    /*==================================================
        ACTIVE NAVIGATION
    ==================================================*/

    const currentPage =
        window.location.pathname

            .split("/")

            .pop();


    const navLinks =
        document.querySelectorAll(".main-nav a");


    navLinks.forEach((link) => {


        const linkPage =
            link.getAttribute("href");


        if (

            linkPage === currentPage

        ) {

            link.classList.add("active");

        }

    });


    /*==================================================
        BODY MENU STYLE
    ==================================================*/

    const menuStyle =
        document.createElement("style");


    menuStyle.textContent = `

        body.menu-open {

            overflow: hidden;

        }


        .project-card {

            transition:

                opacity .35s ease,

                transform .35s ease,

                border-color .35s ease;

        }


        .project-card.filter-show {

            animation:

                projectFilterIn

                .45s

                ease

                both;

        }


        @keyframes projectFilterIn {

            from {

                opacity: 0;

                transform: translateY(20px);

            }

            to {

                opacity: 1;

                transform: translateY(0);

            }

        }


        .project-card.visible,

        .approach-point.visible,

        .portfolio-cta-content.visible {

            opacity: 1;

        }

    `;


    document.head.appendChild(menuStyle);


});