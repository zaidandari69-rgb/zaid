/*==================================================
    MOBILE MENU TOGGLE
==================================================*/


const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");


if(menuToggle && mainNav){


    menuToggle.addEventListener("click",()=>{


        mainNav.classList.toggle("active");


        document.body.classList.toggle("menu-open");


        // Change Menu Icon

        const icon = menuToggle.querySelector("i");


        if(mainNav.classList.contains("active")){

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        }

        else{

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }


    });



    // Close Menu After Clicking Link

    document.querySelectorAll(".main-nav a")
    .forEach(link=>{


        link.addEventListener("click",()=>{


            mainNav.classList.remove("active");


            document.body.classList.remove("menu-open");


            const icon = menuToggle.querySelector("i");


            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");


        });


    });


}
/*==================================================
    BACK TO TOP BUTTON
==================================================*/


const backToTop = document.querySelector(".back-to-top");


if(backToTop){


    window.addEventListener("scroll",()=>{


        if(window.scrollY > 400){

            backToTop.classList.add("active");

        }

        else{

            backToTop.classList.remove("active");

        }


    });



    backToTop.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}
/*==================================================
    FAQ ACCORDION
==================================================*/


const faqQuestions = document.querySelectorAll(".faq-question");


faqQuestions.forEach(question => {


    question.addEventListener("click",()=>{


        const faqItem = question.parentElement;

        const answer = faqItem.querySelector(".faq-answer");

        const icon = question.querySelector("i");



        // Close Other FAQs

        document.querySelectorAll(".faq-item")
        .forEach(item=>{


            if(item !== faqItem){


                item.classList.remove("active");


                const otherAnswer = item.querySelector(".faq-answer");

                otherAnswer.style.maxHeight = null;


                const otherIcon = item.querySelector("i");


                if(otherIcon){

                    otherIcon.classList.remove("fa-minus");

                    otherIcon.classList.add("fa-plus");

                }


            }


        });



        // Open / Close Current FAQ

        faqItem.classList.toggle("active");



        if(faqItem.classList.contains("active")){


            answer.style.maxHeight = answer.scrollHeight + "px";


            icon.classList.remove("fa-plus");

            icon.classList.add("fa-minus");


        }

        else{


            answer.style.maxHeight = null;


            icon.classList.remove("fa-minus");

            icon.classList.add("fa-plus");


        }



    });


});
