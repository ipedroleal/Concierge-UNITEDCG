export function createModal (id, array) {
    const modalContainer = document.createElement('div')
    const modalClose = document.createElement('p')
    const modalImg = document.createElement('img')
    const modalTitle = document.createElement('h3')
    const modalAuthor = document.createElement('p')
    const modalDesc = document.createElement('p')
    const modalPrice = document.createElement('p')

    const productFound = array.find(product => product.id === Number(id))

    modalContainer.classList.add('modal__container')

    modalClose.classList.add('modal__close')
    modalClose.innerText = 'x'

    modalImg.classList.add('modal__img')
    modalImg.src = productFound.img

    modalTitle.classList.add('modal__title')
    modalTitle.innerText = productFound.name

    modalAuthor.classList.add('modal__author')
    modalAuthor.innerText = productFound.author

    modalDesc.classList.add('modal__desc')
    modalDesc.innerText = productFound.description

    modalPrice.classList.add('modal__price')
    modalPrice.innerText = productFound.value

    modalContainer.append(modalClose, modalImg, modalTitle, modalAuthor, modalDesc, modalPrice)

    return modalContainer
}

export function closeModal() {
    const modal = document.querySelector('.modal__controller')
    const closeButton = document.querySelector('.modal__close')

    closeButton.addEventListener('click', () => {
        modal.close()
    })
}