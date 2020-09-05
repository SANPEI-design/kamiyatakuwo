class Modal {
  constructor(targetDOM) {
    this.init()
    this.setParameters(targetDOM)
    this.bindEvent()
  }

  init() {
    this.createElement()
  }

  setParameters(targetDOM) {
    this.html = document.querySelector('html')
    this.body = document.querySelector('body')
    this.trigger = targetDOM
  }

  bindEvent() {
    this.trigger.addEventListener('click', e => {
      e.preventDefault()
      this.appendElement()
    })

    this.modal.addEventListener('click', e => {
      e.preventDefault()
      this.removeElement()
    })

    this.modalContent.addEventListener('click', e => {
      e.stopPropagation()
    })
  }

  createElement() {
    this.modal = document.createElement('div')
    this.modal.classList.add('modal')
    this.modalContent = document.createElement('div')
    this.modalContent.classList.add('modal__content')
    this.modalTitle = document.createElement('p')
    this.modalTitle.classList.add('modal__title', 'text-large')
    this.modalTitle.textContent = '正解'
    this.modalNumber = document.createElement('p')
    this.modalNumber.classList.add('modal__number')
    this.modalText = document.createElement('p')
    this.modalText.classList.add('modal__text')
    this.modalButtonArea = document.createElement('div')
    this.modalButtonArea.classList.add('modal__button-area', 'button-area')
    this.modalButton = document.createElement('button')
    this.modalButton.classList.add('button')
    this.modalButton.setAttribute('type', 'button')
    this.modalButton.textContent = '次の問題'
  }

  appendElement() {
    this.modal.appendChild(this.modalContent)
    this.modalContent.appendChild(this.modalTitle)
    this.modalContent.appendChild(this.modalNumber)
    this.modalContent.appendChild(this.modalText)
    this.modalContent.appendChild(this.modalButtonArea)
    this.modalButtonArea.appendChild(this.modalButton)
    this.body.insertBefore(this.modal, this.body.firstChild)    
  }

  removeElement() {
    this.modal.remove()
  }
}

export default Modal