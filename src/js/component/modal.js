import quizData from '../../_includes/data'
import Session from './session'

class Modal {
  constructor(targetDOM) {
    this.trigger = targetDOM
    this.body = document.querySelector('body')
    this.bindEvent()
  }

  bindEvent() {
    this.createElement()

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
    const [askedList] = Session.searchSession()
    const numberList = quizData['numberList']

    this.modal = document.createElement('div')
    this.modal.classList.add('modal')
    this.modalContent = document.createElement('div')
    this.modalContent.classList.add('modal__content')
    this.modalTitle = document.createElement('p')
    this.modalTitle.classList.add('modal__title', 'text-large')
    this.modalTitle.innerText = '正解'
    this.modalNumber = document.createElement('p')
    this.modalNumber.classList.add('modal__number')
    this.modalText = document.createElement('p')
    this.modalText.classList.add('modal__text')
    this.modalButtonArea = document.createElement('div')
    this.modalButtonArea.classList.add('modal__button-area', 'button-area')
    this.modalButton = document.createElement('button')
    this.modalButton.classList.add('button')
    this.modalButton.setAttribute('type', 'button')
    this.modalButton.innerText = '次の問題'

    Object.keys(askedList).forEach((value, index) => {
      if(value === 'correct') {
        const answerKeyNumber = numberList[index]
        const answerKeyText = askedList[value]
        this.modalNumber.innerText = answerKeyNumber
        this.modalText.innerText = answerKeyText
      }
    })

    this.modal.appendChild(this.modalContent)
    this.modalContent.appendChild(this.modalTitle)
    this.modalContent.appendChild(this.modalNumber)
    this.modalContent.appendChild(this.modalText)
    this.modalContent.appendChild(this.modalButtonArea)
    this.modalButtonArea.appendChild(this.modalButton)
  }

  appendElement() {
    this.body.insertBefore(this.modal, this.body.firstChild)    
  }

  removeElement() {
    this.modal.remove()
  }
}

export default Modal