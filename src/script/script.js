window.addEventListener('DOMContentLoaded', () => {
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

    // test slider

    //slide 

    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : +1
            const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

            const activeSlide = slides.querySelector("[data-active]")
            let newIndex = [...slides.children].indexOf(activeSlide) + offset
            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0
            if (slides <= offset) button.classList.add('hide') 

            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        });
    });

    
})