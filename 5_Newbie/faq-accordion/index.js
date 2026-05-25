const faq_toggle_icon_el = document.getElementsByClassName('faq-toggle-icon');
console.log(faq_toggle_icon_el)

Array.from(faq_toggle_icon_el).forEach(el => {
    el.addEventListener("click", () => {
        console.log('clicked')
        if (el.parentNode.parentNode.querySelector('p').style.display === 'block') {
            el.src = "assets/images/icon-plus.svg"
            el.classList.add("animate__slideInDown")
            el.parentNode.parentNode.querySelector('p').style.display = 'none'
        }
        else {
            el.src = "assets/images/icon-minus.svg"
            el.parentNode.parentNode.querySelector('p').style.display = 'block'
        }


})})