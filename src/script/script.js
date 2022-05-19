window.addEventListener('DOMContentLoaded', () => {

    // sliders

    new Swiper(".seventh-block__restourant-img", {
        navigation: {
          nextEl: ".seventh-block__restourant-img-next",
          prevEl: ".seventh-block__restourant-img-prev"
        }
    });

    new Swiper(".header-main__img", {
    navigation: {
        nextEl: ".header-main__img-btn--next",
        prevEl: ".header-main__img-btn--prev"
        }
    });

    new Swiper(".wrapper-container", {
        navigation: {
          nextEl: ".wrapper-container-btnnext",
          prevEl: ".wrapper-container-btnprev"
        }
    });

    new Swiper(".wrapper-02-container", {
        navigation: {
          nextEl: ".wrapper-02-container-btnnext",
          prevEl: ".wrapper-02-container-btnprev"
        }
    });

    new Swiper(".wrapper-03-container", {
        navigation: {
          nextEl: ".wrapper-03-container-btnnext",
          prevEl: ".wrapper-03-container-btnprev"
        }
    });

    new Swiper(".wrapper-04-container", {
        navigation: {
          nextEl: ".wrapper-04-container-btnnext",
          prevEl: ".wrapper-04-container-btnprev"
        }
    });

    new Swiper(".wrapper-tab-container", {
        navigation: {
          nextEl: ".wrapper-tab-container-btnnext",
          prevEl: ".wrapper-tab-container-btnprev"
        }
    });
    // new Swiper(".fourth-block__tabs-body__img-two", {
    //     navigation: {
    //         nextEl: ".btn-02-next",
    //         prevEl: ".btn-02-next"
    //     }
    // }); 
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
    let btns = document.querySelector('.btns');

    if (slideTwo.length <= 1) {
        btns.disabled;
    };
})