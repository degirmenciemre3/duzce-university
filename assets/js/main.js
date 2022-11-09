/**
* Template Name: Gp - v4.9.1
* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Sticky header on scroll
   */
   const selectHeader = document.querySelector('#header');
   if (selectHeader) {
     document.addEventListener('scroll', () => {
       window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
     });
   }
 
   /**
    * Navbar links active state on scroll
    */
   let navbarlinks = document.querySelectorAll('#navbar .scrollto');
 
   function navbarlinksActive() {
     navbarlinks.forEach(navbarlink => {
 
       if (!navbarlink.hash) return;
 
       let section = document.querySelector(navbarlink.hash);
       if (!section) return;
 
       let position = window.scrollY;
       if (navbarlink.hash != '#header') position += 200;
 
       if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
         navbarlink.classList.add('active');
       } else {
         navbarlink.classList.remove('active');
       }
     })
   }
   window.addEventListener('load', navbarlinksActive);
   document.addEventListener('scroll', navbarlinksActive);
 
   /**
    * Function to scroll to an element with top ofset
    */
   function scrollto(el) {
     const selectHeader = document.querySelector('#header');
     let offset = 0;
 
     if (selectHeader.classList.contains('sticked')) {
       offset = document.querySelector('#header.sticked').offsetHeight;
     } else if (selectHeader.hasAttribute('data-scrollto-offset')) {
       offset = selectHeader.offsetHeight - parseInt(selectHeader.getAttribute('data-scrollto-offset'));
     }
     window.scrollTo({
       top: document.querySelector(el).offsetTop - offset,
       behavior: 'smooth'
     });
   }
 
   /**
    * Fires the scrollto function on click to links .scrollto
    */
   let selectScrollto = document.querySelectorAll('.scrollto');
   selectScrollto.forEach(el => el.addEventListener('click', function(event) {
     if (document.querySelector(this.hash)) {
       event.preventDefault();
 
       let mobileNavActive = document.querySelector('.mobile-nav-active');
       if (mobileNavActive) {
         mobileNavActive.classList.remove('mobile-nav-active');
 
         let navbarToggle = document.querySelector('.mobile-nav-toggle');
         navbarToggle.classList.toggle('bi-list');
         navbarToggle.classList.toggle('bi-x');
       }
       scrollto(this.hash);
     }
   }));
 
   /**
    * Scroll with ofset on page load with hash links in the url
    */
   window.addEventListener('load', () => {
     if (window.location.hash) {
       if (document.querySelector(window.location.hash)) {
         scrollto(window.location.hash);
       }
     }
   });
 
   /**
    * Mobile nav toggle
    */
   const mobileNavToogle = document.querySelector('.mobile-nav-toggle');
   if (mobileNavToogle) {
     mobileNavToogle.addEventListener('click', function(event) {
       event.preventDefault();
 
       document.querySelector('body').classList.toggle('mobile-nav-active');
 
       this.classList.toggle('bi-list');
       this.classList.toggle('bi-x');
     });
   }
 
   /**
    * Toggle mobile nav dropdowns
    */
   const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');
 
   navDropdowns.forEach(el => {
     el.addEventListener('click', function(event) {
       if (document.querySelector('.mobile-nav-active')) {
         event.preventDefault();
         this.classList.toggle('active');
         this.nextElementSibling.classList.toggle('dropdown-active');
 
         let dropDownIndicator = this.querySelector('.dropdown-indicator');
         dropDownIndicator.classList.toggle('bi-chevron-up');
         dropDownIndicator.classList.toggle('bi-chevron-down');
       }
     })
   });

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  
  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }
  
  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
   new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()