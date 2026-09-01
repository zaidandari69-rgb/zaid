/*==================================================
    AL-ZAID WEB SOLUTION
    COMPLETE SCRIPT.JS
==================================================*/


document.addEventListener("DOMContentLoaded", () => {


    /*==================================================
        ELEMENT SELECTORS
    ==================================================*/

    const mobileMenuBtn =
        document.querySelector(".mobile-menu-btn");

    const mainNav =
        document.querySelector(".main-nav");

    const navLinks =
        document.querySelectorAll(".nav-link");

    const backToTop =
        document.querySelector(".back-to-top");

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const portfolioItems =
        document.querySelectorAll(".portfolio-item");

    const siteHeader =
        document.querySelector(".site-header");


    /*==================================================
        MOBILE MENU
    ==================================================*/

    if (mobileMenuBtn && mainNav) {


        mobileMenuBtn.addEventListener("click", () => {


            const isOpen =
                mainNav.classList.toggle("active");


            mobileMenuBtn.setAttribute(
                "aria-expanded",
                isOpen
            );


            mobileMenuBtn.setAttribute(
                "aria-label",
                isOpen
                    ? "Close Menu"
                    : "Open Menu"
            );


            const icon =
                mobileMenuBtn.querySelector("i");


            if (icon) {

                icon.classList.toggle(
                    "fa-bars",
                    !isOpen
                );

                icon.classList.toggle(
                    "fa-xmark",
                    isOpen
                );

            }

        });


        /* CLOSE MENU AFTER CLICK */

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("active");

                mobileMenuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                mobileMenuBtn.setAttribute(
                    "aria-label",
                    "Open Menu"
                );


                const icon =
                    mobileMenuBtn.querySelector("i");


                if (icon) {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            });

        });


        /* CLOSE MENU OUTSIDE */

        document.addEventListener(
            "click",
            (event) => {


                if (

                    !mainNav.contains(event.target)

                    &&

                    !mobileMenuBtn.contains(
                        event.target
                    )

                ) {

                    mainNav.classList.remove(
                        "active"
                    );


                    mobileMenuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    mobileMenuBtn.setAttribute(
                        "aria-label",
                        "Open Menu"
                    );


                    const icon =
                        mobileMenuBtn.querySelector(
                            "i"
                        );


                    if (icon) {

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }

                }

            }

        );

    }


    /*==================================================
        PORTFOLIO FILTER
    ==================================================*/

    if (

        filterButtons.length > 0

        &&

        portfolioItems.length > 0

    ) {


        filterButtons.forEach((button) => {


            button.addEventListener(
                "click",
                () => {


                    filterButtons.forEach(
                        (btn) => {

                            btn.classList.remove(
                                "active"
                            );

                        }

                    );


                    button.classList.add(
                        "active"
                    );


                    const filter =
                        button.dataset.filter;


                    portfolioItems.forEach(
                        (item) => {


                            const category =
                                item.dataset.category;


                            if (

                                filter === "all"

                                ||

                                category === filter

                            ) {

                                item.style.display =
                                    "block";


                                item.style.animation =
                                    "fadeUp .5s ease both";

                            }

                            else {

                                item.style.display =
                                    "none";

                            }

                        }

                    );

                }

            );

        });

    }


    /*==================================================
        BACK TO TOP BUTTON
    ==================================================*/

    if (backToTop) {


        window.addEventListener(
            "scroll",
            () => {


                if (window.scrollY > 500) {

                    backToTop.classList.add(
                        "show"
                    );

                }

                else {

                    backToTop.classList.remove(
                        "show"
                    );

                }

            }

        );


        backToTop.addEventListener(
            "click",
            () => {


                window.scrollTo({

                    top:0,

                    behavior:"smooth"

                });

            }

        );

    }


    /*==================================================
        HEADER SCROLL EFFECT
    ==================================================*/

    if (siteHeader) {


        window.addEventListener(
            "scroll",
            () => {


                if (window.scrollY > 30) {

                    siteHeader.classList.add(
                        "scrolled"
                    );

                }

                else {

                    siteHeader.classList.remove(
                        "scrolled"
                    );

                }

            }

        );

    }


    /*==================================================
        ACTIVE NAVIGATION ON SCROLL
    ==================================================*/

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    if (

        sections.length > 0

        &&

        navLinks.length > 0

    ) {


        window.addEventListener(
            "scroll",
            () => {


                let currentSection = "";


                sections.forEach(
                    (section) => {


                        const sectionTop =
                            section.offsetTop;


                        const sectionHeight =
                            section.offsetHeight;


                        if (

                            window.scrollY >=
                            sectionTop - 180

                            &&

                            window.scrollY <
                            sectionTop +
                            sectionHeight - 180

                        ) {

                            currentSection =
                                section.getAttribute(
                                    "id"
                                );

                        }

                    }

                );


                navLinks.forEach(
                    (link) => {


                        link.classList.remove(
                            "active"
                        );


                        const linkTarget =
                            link.getAttribute(
                                "href"
                            );


                        if (

                            linkTarget ===
                            `#${currentSection}`

                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    }

                );

            }

        );

    }


    /*==================================================
        SMOOTH SCROLL FOR ANCHOR LINKS
    ==================================================*/

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach(
        (link) => {


            link.addEventListener(
                "click",
                (event) => {


                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (

                        !targetId

                        ||

                        targetId === "#"

                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {


                        event.preventDefault();


                        const headerHeight =
                            siteHeader
                                ? siteHeader.offsetHeight
                                : 0;


                        const targetPosition =
                            target.offsetTop -
                            headerHeight;


                        window.scrollTo({

                            top:
                                targetPosition,

                            behavior:
                                "smooth"

                        });

                    }

                }

            );

        }

    );


    /*==================================================
        SCROLL REVEAL ANIMATION
    ==================================================*/

    const revealElements =
        document.querySelectorAll(

            ".service-card, " +

            ".portfolio-item, " +

            ".why-feature-card, " +

            ".process-card, " +

            ".testimonial-card, " +

            ".contact-item, " +

            ".about-feature"

        );


    if (

        revealElements.length > 0

        &&

        "IntersectionObserver"
        in window

    ) {


        const revealObserver =
            new IntersectionObserver(

                (entries, observer) => {


                    entries.forEach(
                        (entry) => {


                            if (
                                entry.isIntersecting
                            ) {


                                entry.target.style.opacity =
                                    "1";


                                entry.target.style.transform =
                                    "translateY(0)";


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }

                    );

                },

                {

                    threshold:0.12

                }

            );


        revealElements.forEach(
            (element) => {


                element.style.opacity =
                    "0";


                element.style.transform =
                    "translateY(25px)";


                element.style.transition =

                    "opacity .7s ease, " +

                    "transform .7s ease";


                revealObserver.observe(
                    element
                );

            }

        );

    }


    /*==================================================
        CURRENT YEAR AUTO UPDATE
    ==================================================*/

    const footerYear =
        document.querySelector(
            ".footer-bottom p"
        );


    if (footerYear) {


        const currentYear =
            new Date().getFullYear();


        footerYear.innerHTML =
            footerYear.innerHTML.replace(
                /©\s*\d{4}/,
                `© ${currentYear}`
            );

    }


    /*==================================================
        ESC KEY CLOSES MOBILE MENU
    ==================================================*/

    document.addEventListener(
        "keydown",
        (event) => {


            if (

                event.key === "Escape"

                &&

                mainNav

                &&

                mainNav.classList.contains(
                    "active"
                )

            ) {


                mainNav.classList.remove(
                    "active"
                );


                if (mobileMenuBtn) {

                    mobileMenuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    mobileMenuBtn.setAttribute(
                        "aria-label",
                        "Open Menu"
                    );

                }


                const icon =
                    mobileMenuBtn
                        ?.querySelector("i");


                if (icon) {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            }

        }

    );


});
