import { closeModal, createModal } from "./modal.js";


export function renderProducts (products) {
    const listBooks = document.querySelector('.books__list')
    const listAcessories = document.querySelector('.acessories__list')
    const listClothing = document.querySelector('.clothing__list')

    products.forEach(product => {
        const cardProduct = createCard(product)

        if(product.type == 'book') {
            listBooks.appendChild(cardProduct)
        } else if (product.type == 'acessories') {
            listAcessories.appendChild(cardProduct)
        } else if (product.type == 'clothing') {
            listClothing.appendChild(cardProduct)
        }
    });

    renderModal(products)
}

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
    infoBtn.dataset.id = array.id

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

export function renderModal(array) {
    const modal = document.querySelector('.modal__controller')
    const buttons = document.querySelectorAll('.product__infoBtn')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const modalContent = createModal(button.dataset.id, array)

            modal.innerHTML = ''

            modal.appendChild(modalContent)

            modal.showModal()

            closeModal()
        })
    })
}