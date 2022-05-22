window.addEventListener('DOMContentLoaded', () => {

    // sliders

    new Swiper(".seventh-block__restourant-img", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: "fade",
        navigation: {
          nextEl: ".seventh-block__restourant-img-next",
          prevEl: ".seventh-block__restourant-img-prev"
        }
    });

    new Swiper(".header-main__img", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: "fade",
        navigation: {
            nextEl: ".header-main__img-btn--next",
            prevEl: ".header-main__img-btn--prev"
        }
    });

    new Swiper(".wrapper-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: "fade",
        navigation: {
          nextEl: ".wrapper-container-btnnext",
          prevEl: ".wrapper-container-btnprev"
        }
    });

    new Swiper(".wrapper-02-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: "fade",
        navigation: {
          nextEl: ".wrapper-02-container-btnnext",
          prevEl: ".wrapper-02-container-btnprev"
        }
    });

    new Swiper(".wrapper-03-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: "fade",
        navigation: {
          nextEl: ".wrapper-03-container-btnnext",
          prevEl: ".wrapper-03-container-btnprev"
        }
    });

    new Swiper(".wrapper-04-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: "fade",
        navigation: {
          nextEl: ".wrapper-04-container-btnnext",
          prevEl: ".wrapper-04-container-btnprev"
        }
    });

    new Swiper(".wrapper-tab-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".wrapper-tab-container-btnnext",
          prevEl: ".wrapper-tab-container-btnprev"
        }
    });

    new Swiper(".team-wrapper-tab-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".team-wrapper-tab-container-btnnext",
          prevEl: ".team-wrapper-tab-container-btnprev"
        }
    });
    
    // first tab

    document.querySelectorAll('.fourth-block__tabs-items__item').forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#', '');

            document.querySelectorAll('.fourth-block__tabs-items__item').forEach(
                (child) => child.classList.remove('active')
            );
            document.querySelectorAll('.fourth-block__tabs-body__block').forEach(
                (child) => child.classList.remove('active')
            );

            item.classList.add('active');
            document.getElementById(id).classList.add('active')
        });
    });

    document.querySelector('.fourth-block__tabs-items__item').click();

    // second tab

    document.querySelectorAll('.tab-block__tabs-items__item').forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const idsecond = e.target.getAttribute('href').replace('#', '');

            document.querySelectorAll('.tab-block__tabs-items__item').forEach(
                (child) => child.classList.remove('active')
            );
            document.querySelectorAll('.tab-block-slide').forEach(
                (child) => child.classList.remove('active')
            );

            item.classList.add('active');
            document.getElementById(idsecond).classList.add('active')
        });
    });

    document.querySelector('.tab-block__tabs-items__item').click();

    let slideTwo = document.querySelectorAll('.swiper-slide');
    let btns = document.querySelector('.wrapper-container-btnnext');
    let btnsOne = document.querySelector('.seventh-block__restourant-img-next');
    let btnsTwo = document.querySelector('.header-main__img-btn--next');
    let btnsThree = document.querySelector('.wrapper-02-container-btnnext');
    let btnsFour = document.querySelector('.wrapper-03-container-btnnext');
    let btnsFive = document.querySelector('.wrapper-04-container-btnnext');
    let btnsSix = document.querySelector('.wrapper-03-container-btnnext');
    let btnSeven = document.querySelector('.wrapper-tab-container');
    let btnEigth = document.querySelector('.team-wrapper-tab-container-btnnext');


    if (slideTwo.length <= 1) {
        btns.hidden;
        btnsOne.hidden;
        btnsTwo.hidden;
        btnsThree.hidden;   
        btnsFour.hidden; 
        btnsFive.hidden;
        btnsSix.hidden;
        btnSeven.hidden; 
        btnEigth.hidden;
    };
})