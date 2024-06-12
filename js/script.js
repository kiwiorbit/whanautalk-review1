// side bar start  
// function openNav() {
//     "use strict";
//     const sidepanel = document.getElementById("mySidepanel");
//     if (sidepanel) {
//         sidepanel.style.left = "0";
//     } else {
//         console.error("Error: Side panel element not found!");
//     }
// }

// function closeNav() {
//     "use strict";
//     const sidepanel = document.getElementById("mySidepanel");
//     if (sidepanel) {
//         sidepanel.style.left = "-320px";
//     } else {
//         console.error("Error: Side panel element not found!");
//     }
// }


function toggleNav(open) {
    "use strict";
    const sidepanel = document.getElementById("mySidepanel");
    if (sidepanel) {
        sidepanel.style.left = open ? "0" : "-320px";
    } else {
        console.error("Error: Side panel element not found!");
    }
}

function openNav() {
    toggleNav(true);
}

function closeNav() {
    toggleNav(false);
}



// function toggleCollapse(elementId) {
//     var element = document.getElementById(elementId);
//     var button = document.querySelector('.collapse_btn a');

//     // Toggle the 'show' class
//     element.classList.toggle('show');

//     // Toggle aria-expanded attribute
//     var isExpanded = button.getAttribute('aria-expanded') === 'true';
//     button.setAttribute('aria-expanded', !isExpanded);
// }

function toggleCollapse(elementId) {
    "use strict";
    const element = document.getElementById(elementId);
    const button = document.querySelector('.collapse_btn a');

    if (element && button) {
        // Toggle the 'show' class
        element.classList.toggle('show');

        // Toggle aria-expanded attribute
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!isExpanded));
    } else {
        console.error("Error: Element or button not found!");
    }
}


// search-bar
// function open_search_bar() {
//     "use strict";
//     const sidepanel = document.getElementById("search-bar");
//     if (sidepanel) {
//         sidepanel.style.height = "100vh";
//         sidepanel.style.borderRadius = "0";
//     } else {
//         console.error("Error: Side panel element not found!");
//     }
// }

// function close_search_bar() {
//     "use strict";
//     const sidepanel = document.getElementById("search-bar");
//     if (sidepanel) {
//         sidepanel.style.height = "0";
//         sidepanel.style.borderTopLeftRadius = "100%";
//         sidepanel.style.borderTopRightRadius = "100%";
//     } else {
//         console.error("Error: Side panel element not found!");
//     }
// }

function toggleSearchBar(open) {
    "use strict";
    const sidepanel = document.getElementById("search-bar");
    if (sidepanel) {
        if (open) {
            sidepanel.style.height = "100vh";
            sidepanel.style.borderRadius = "0";
        } else {
            sidepanel.style.height = "0";
            sidepanel.style.borderTopLeftRadius = "100%";
            sidepanel.style.borderTopRightRadius = "100%";
        }
    } else {
        console.error("Error: Side panel element not found!");
    }
}

function openSearchBar() {
    toggleSearchBar(true);
}

function closeSearchBar() {
    toggleSearchBar(false);
}


// right-sidebar
// function open_right_side() {
//     "use strict";
//     const sidepanel = document.getElementById("right_side");
//     if (sidepanel) {
//         sidepanel.style.right = "0";
//     } else {
//         console.error("Error: Side panel element not found!");
//     }
// }

// function close_right_side() {
//     "use strict";
//     const sidepanel = document.getElementById("right_side");
//     if (sidepanel) {
//         sidepanel.style.right = "-355px";
//     } else {
//         console.error("Error: Side panel element not found!");
//     }
// }

document.addEventListener("DOMContentLoaded", () => {
    const sidepanel = document.getElementById("mySidepanel");
    const navbarToggler = document.querySelector(".navbar-toggler");

    // Function to toggle sidebar
    function toggleSidebar() {
        if (sidepanel.style.left === "0px") {
            sidepanel.style.left = "-320px";
        } else {
            sidepanel.style.left = "0";
        }
    }

    // Event listener for the navbar toggler
    navbarToggler.addEventListener("click", toggleSidebar);

    // Variables to handle swipe gestures
    let touchStartX = 0;
    let touchEndX = 0;

    // Function to handle touch start
    function handleTouchStart(event) {
        touchStartX = event.changedTouches[0].screenX;
    }

    // Function to handle touch end
    function handleTouchEnd(event) {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipeGesture();
    }

    // Function to handle swipe gesture
    function handleSwipeGesture() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left to close the sidebar
            sidepanel.style.left = "-320px";
        } else if (touchEndX > touchStartX + 50) {
            // Swipe right to open the sidebar
            sidepanel.style.left = "0";
        }
    }

    // Attach touch event listeners to the sidebar
    sidepanel.addEventListener("touchstart", handleTouchStart, false);
    sidepanel.addEventListener("touchend", handleTouchEnd, false);
});




function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

function scrollToTop() {
    const scrollToTopBtn = document.documentElement || document.body;
    scrollToTopBtn.scrollIntoView({
        behavior: "smooth"
    });
}


// portfolio gallary tab
function open_img(evt, cityName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content and mark the corresponding tab link as active
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("active");
}






// button back to top 
// window.onscroll = function () {
//     scrollFunction()
// };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("backToTop").style.display = "block";
//     } else {
//         document.getElementById("backToTop").style.display = "none";
//     }
// }

// function scrollToTop() {
//     const scrollToTopBtn = document.documentElement || document.body;
//     scrollToTopBtn.scrollIntoView({
//         behavior: "smooth"
//     });
// }

// Function to smoothly scroll to the top
function scrollToTop() {
    const scrollDuration = 1000; // Duration in milliseconds (1000ms = 1s)
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    const scrollInterval = setInterval(() => {
        if (window.scrollY != 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}

// Show/hide the back-to-top button based on scroll position
function toggleBackToTopButton() {
    const backToTopButton = document.getElementById("backToTop");
    const shouldShow = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
    backToTopButton.style.display = shouldShow ? "block" : "none";
}

// Set up the scroll event listener
window.onscroll = function () {
    toggleBackToTopButton();
};




// faq section
// document.addEventListener("DOMContentLoaded", function () {
//     let accordionButtons = document.querySelectorAll('.accordion-button');
//     let acoimg = document.querySelectorAll('.accordion-button img');

//     accordionButtons.forEach(function (button, index) {
//         button.addEventListener('click', function () {
//             let collapse = this.parentElement.nextElementSibling;

//             // Close all other accordion items
//             accordionButtons.forEach(function (otherButton, otherIndex) {
//                 if (otherButton !== button) {
//                     var otherCollapse = otherButton.parentElement.nextElementSibling;
//                     otherCollapse.style.maxHeight = null;
//                     // Reset the image source and rotation for other accordion items
//                     acoimg[otherIndex].src = './images/chevron-down-solid.svg';
//                     acoimg[otherIndex].style.transform = 'rotate(0deg)';
//                     otherButton.style.backgroundColor = '#fff';
//                 }
//             });

//             // Toggle the clicked accordion item
//             if (collapse.style.maxHeight) {
//                 collapse.style.maxHeight = null;
//                 // Reset the image source, rotation, and background color when collapsing
//                 acoimg[index].src = './images/chevron-down-solid.svg';
//                 acoimg[index].style.transform = 'rotate(90deg)';
//                 button.style.backgroundColor = '';
//             } else {
//                 collapse.style.maxHeight = collapse.scrollHeight + "px";
//                 // Change the image source, set rotation, and background color when expanding
//                 acoimg[index].src = 'Images/icon/menus.png';
//                 acoimg[index].style.transform = 'rotate(180deg)';
//                 button.style.backgroundColor = '#c1b0d5';
//             }
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    const accordionButtons = document.querySelectorAll('.accordion-button');
    const accordionImages = document.querySelectorAll('.accordion-button img');

    accordionButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const collapse = button.parentElement.nextElementSibling;

            // Close all other accordion items
            accordionButtons.forEach((otherButton, otherIndex) => {
                if (otherButton !== button) {
                    const otherCollapse = otherButton.parentElement.nextElementSibling;
                    otherCollapse.style.maxHeight = null;
                    accordionImages[otherIndex].src = './images/chevron-down-solid.svg';
                    accordionImages[otherIndex].style.transform = 'rotate(0deg)';
                    otherButton.style.backgroundColor = '#fff';
                }
            });

            // Toggle the clicked accordion item
            if (collapse.style.maxHeight) {
                collapse.style.maxHeight = null;
                accordionImages[index].src = './images/chevron-down-solid.svg';
                accordionImages[index].style.transform = 'rotate(0deg)';
                button.style.backgroundColor = '';
            } else {
                collapse.style.maxHeight = collapse.scrollHeight + "px";
                accordionImages[index].src = './images/minus-solid.svg';
                accordionImages[index].style.transform = 'rotate(180deg)';
                button.style.backgroundColor = '#65b8f7';
            }
        });
    });
});






// footer validation start
// const fom = document.getElementById('contact-form');
// const footerMessage = document.getElementById('footer-message');

// fom.addEventListener('submit', (event) => {
//     event.preventDefault();
//     footerMessage.innerHTML = '~ Submitted! Thank you';
//     footerMessage.style.display = 'flex';
//     fom.reset();
//     setTimeout(() => {
//         footerMessage.style.display = 'none';
//     }, 3000);
// });
// footer validation end

// Footer validation start
document.addEventListener("DOMContentLoaded", function() {
    "use strict";
    
    const form = document.getElementById('contact-form');
    const footerMessage = document.getElementById('footer-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        footerMessage.textContent = '~ Submitted! Thank you';
        footerMessage.style.display = 'flex';
        form.reset();
        
        setTimeout(() => {
            footerMessage.style.display = 'none';
        }, 3000);
    });
});
// Footer validation end





// // responsive Logoipsum Slider
// $('.sliderlogo').slick({
//     arrows: false,
//     dots: false,
//     infinite: false,
//     autoplay: false,
//     speed: 300,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: false,
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         },
//     ]
// });


// // responsive team Slider
// $('.team-slider').slick({
//     arrows: false,
//     dots: true,
//     infinite: false,
//     autoplay: true,
//     speed: 2000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true,
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });

