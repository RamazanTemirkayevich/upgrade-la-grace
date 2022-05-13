window.addEventListener('DOMContentLoaded', () => {
    // first tab

    let tab = function (e) {
        let tabNav = document.querySelectorAll('.tab-block__tabs-items__item'),
            tabContent = document.querySelectorAll('.tab-block-slide'),
            tabName;
    
        tabNav.forEach(item => {
            item.addEventListener('click', selectTabNav)
        });
    
        function selectTabNav() {
            tabNav.forEach(item => {
                item.classList.remove('tab-block__tabs-items__item--active');
            });
            this.classList.add('tab-block__tabs-items__item--active');
            tabName = this.getAttribute('data-tab-name');
            selectTabContent(tabName);
        }
    
        function selectTabContent(tabName) {
            tabContent.forEach(item => {

                item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
            })
        }
    
    };
    
    
    tab();

    // second Tab 

    let tabSecond = document.querySelectorAll('.fourth-block__tabs-items__item');
    
    tabSecond.forEach(item => {
        item.addEventListener('click', selectTabNav);
    });

    function selectTabNav() {
        tabSecond.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.toggle('active');
    };

    //slide 

    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1
            const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

            const activeSlide = slides.querySelector("[data-active]")
            let newIndex = [...slides.children].indexOf(activeSlide) + offset
            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0

            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        });
    });
})