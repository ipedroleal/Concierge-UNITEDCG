import { products } from "./database.js"
import { renderProducts } from "./render.js"

// HEADER - MENU

function openMenu () {
    const menuMobile = document.querySelector('#menuBtn')

    menuMobile.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav__menu')
        navMenu.classList.toggle('active')
    })
}

function openSearch () {
    const menuSearch = document.querySelector('#searchBtn')

    menuSearch.addEventListener('click', () => {
        const navSearch = document.querySelector('.nav__search')
        navSearch.classList.toggle('active')
    })
}
openMenu()
openSearch()


// BANNER

function bannnerRotation () {
    const time = 3000
    let currentImageIndex = 0
    const images = document.querySelectorAll('.banners__container img')
    const maxImages = images.length

    function nextImage() {
        images[currentImageIndex].classList.remove('selected')

        currentImageIndex++

        if(currentImageIndex >= maxImages) {
            currentImageIndex = 0
        }

        images[currentImageIndex].classList.add('selected')
    }

    function start() {
        setInterval(() => {
            nextImage()
        }, time)
    }

    window.addEventListener('load', start())
}
bannnerRotation()

renderProducts(products)