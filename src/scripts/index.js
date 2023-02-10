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


// CARDS

function createCard (array) {
    const containerCard = document.createElement('li')
    const containerImgs = document.createElement('div')
    const productImg = document.createElement('img')
    const infoBtn = document.createElement('img')
    const containerInfos = document.createElement('div')
    const productName = document.createElement('h3')
    const productPrice = document.createElement('p')

    containerCard.classList.add('product__card')

    containerImgs.classList.add('product__containerImgs')

    productImg.classList.add('product__img')
    productImg.src = array.img

    infoBtn.classList.add('product__infoBtn')
    infoBtn.src = './src/assets/moreinfo.svg'

    containerInfos.classList.add('product__infos')

    productName.classList.add('product__name')
    productName.innerText = array.name

    productPrice.classList.add('product__price')
    productPrice.innerText = array.value

    containerCard.append(containerImgs, containerInfos)
    containerImgs.append(productImg, infoBtn)
    containerInfos.append(productName, productPrice)

    return containerCard
}

function renderProducts (products) {
    const listBooks = document.querySelector('.products__mostWanted')

    products.forEach(product => {
        const cardProduct = createCard(product)

        listBooks.appendChild(cardProduct)
    });
}

renderProducts(products)

