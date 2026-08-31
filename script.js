/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", function () {

    const loader =
        document.getElementById("loader");

    setTimeout(function () {

        loader.classList.add("hide");

    }, 1000);

});



/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursor =
    document.querySelector(".cursor");

const follower =
    document.querySelector(".cursor-follower");


if (cursor && follower && window.innerWidth > 600) {

    let mouseX = 0;
    let mouseY = 0;

    let followerX = 0;
    let followerY = 0;


    document.addEventListener("mousemove", function (event) {

        mouseX = event.clientX;
        mouseY = event.clientY;

        cursor.style.left =
            mouseX + "px";

        cursor.style.top =
            mouseY + "px";

    });


    function animateCursor() {

        followerX +=
            (mouseX - followerX) * .15;

        followerY +=
            (mouseY - followerY) * .15;

        follower.style.left =
            followerX + "px";

        follower.style.top =
            followerY + "px";

        requestAnimationFrame(animateCursor);

    }


    animateCursor();


    const interactiveElements =
        document.querySelectorAll(
            "a, button, .certificate-card, .project-card, .skill-card"
        );


    interactiveElements.forEach(function (element) {

        element.addEventListener("mouseenter", function () {

            follower.style.width = "45px";

            follower.style.height = "45px";

        });


        element.addEventListener("mouseleave", function () {

            follower.style.width = "32px";

            follower.style.height = "32px";

        });

    });

}



/* =========================================================
   NAVBAR SCROLL
========================================================= */

const navbar =
    document.getElementById("navbar");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");


menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("menu-open");

});


const mobileLinks =
    document.querySelectorAll(".nav-links a");


mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("menu-open");

    });

});



/* =========================================================
   SCROLL REVEAL
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".reveal"
    );


const scrollObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                } else {

                    /*
                     * Removing show means the animation
                     * happens again when scrolling back.
                     */

                    entry.target.classList.remove("show");

                }

            });

        },

        {
            threshold: 0.15,

            rootMargin:
                "0px 0px -70px 0px"
        }

    );


animatedElements.forEach(function (element) {

    scrollObserver.observe(element);

});



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 280;


        if (
            window.scrollY >=
            sectionTop
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();



/* =========================================================
   CERTIFICATE OPEN
========================================================= */

function openCertificate(file) {

    window.open(
        file,
        "_blank",
        "noopener,noreferrer"
    );

}



/* =========================================================
   CONTACT ORB
========================================================= */

const orbButton =
    document.getElementById("orbButton");


const contactOrb =
    document.querySelector(".contact-orb");


if (orbButton && contactOrb) {

    orbButton.addEventListener(
        "click",
        function () {

            contactOrb.classList.toggle(
                "active"
            );

        }
    );

}



/* =========================================================
   CHATBOT
========================================================= */

const aiChatButton =
    document.getElementById("aiChatButton");


const aiChat =
    document.getElementById("aiChat");


const closeChat =
    document.getElementById("closeChat");


if (aiChatButton) {

    aiChatButton.addEventListener(
        "click",
        function () {

            aiChat.classList.toggle(
                "open"
            );

        }
    );

}


if (closeChat) {

    closeChat.addEventListener(
        "click",
        function () {

            aiChat.classList.remove(
                "open"
            );

        }
    );

}



/* =========================================================
   CHATBOT NAVIGATION
========================================================= */

const chatOptions =
    document.querySelectorAll(
        ".chat-options button"
    );


chatOptions.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const target =
                button.dataset.target;


            const targetSection =
                document.getElementById(
                    target
                );


            if (targetSection) {

                aiChat.classList.remove(
                    "open"
                );


                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});



/* =========================================================
   CLOSE CHAT WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            aiChat &&
            aiChat.classList.contains("open") &&
            !aiChat.contains(event.target) &&
            !aiChatButton.contains(event.target)
        ) {

            aiChat.classList.remove(
                "open"
            );

        }

    }
);



/* =========================================================
   HERO PARALLAX
========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");


if (heroVisual && window.innerWidth > 850) {

    window.addEventListener(
        "mousemove",
        function (event) {

            const x =
                (event.clientX /
                    window.innerWidth -
                    .5) * 12;


            const y =
                (event.clientY /
                    window.innerHeight -
                    .5) * 12;


            heroVisual.style.transform =
                `translateY(-46%) translate(${x}px, ${y}px)`;

        }
    );

}



/* =========================================================
   SMOOTH ANCHOR LINKS
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                link.getAttribute("href");


            if (
                targetId === "#" ||
                targetId.length <= 1
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});



/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

document.querySelectorAll(
    "img"
).forEach(function (image) {

    image.addEventListener(
        "error",
        function () {

            console.warn(
                "Image could not be loaded:",
                image.src
            );

        }
    );

});



/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%cPortfolio loaded successfully.",
    "color:#e6aab5;font-size:16px;font-weight:bold;"
);

console.log(
    "%cExploring the world of AI.",
    "color:#75584c;font-size:12px;"
);