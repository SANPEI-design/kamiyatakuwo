import QuizExtractor from './quizextractor'
import Session from './session'

class Modal {
  constructor(targetDOM) {
    this.trigger = targetDOM
    this.extractData()
    this.bindEvent()
  }

  extractData() {
    this.allAnswerList = Session.searchSession('allAnswerList')
    this.count = Session.searchSession('count')
    this.numberList = QuizExtractor.numberList()
  }

  get index() {
    return this.count - 1
  }

  bindEvent() {
    let modal, modalContent
    [modal, modalContent] = this.createElement(modal, modalContent)

    this.trigger.addEventListener('click', e => {
      e.preventDefault()
      this.appendElement(modal)
    })

    modal.addEventListener('click', e => {
      e.preventDefault()
      this.removeElement(modal)
    })

    modalContent.addEventListener('click', e => {
      e.stopPropagation()
    })
  }

  createElement(modal, modalContent) {
    let modalTitle, modalNumber, modalText, modalButtonArea, modalButton

    // モーダル全体
    modal = document.createElement('div')
    modal.classList.add('modal')

    // モーダルコンテンツ
    modalContent = document.createElement('div')
    modalContent.classList.add('modal__content')

    // モーダルタイトル
    modalTitle = document.createElement('p')
    modalTitle.classList.add('modal__title', 'text-large')
    modalTitle.innerText = '正解'

    // 正解ナンバー枠
    modalNumber = document.createElement('p')
    modalNumber.classList.add('modal__number')

    // 正解枠
    modalText = document.createElement('p')
    modalText.classList.add('modal__text')

    // モーダルボタンエリア
    modalButtonArea = document.createElement('div')
    modalButtonArea.classList.add('modal__button-area', 'button-area')

    // モーダルボタン枠
    modalButton = document.createElement('button')
    modalButton.setAttribute('type', 'button')
    modalButton.classList.add('button')
    modalButton.classList.add('js-next', 'js-miss')

    // 「次の問題」ボタンと「結果をみる」ボタンの分岐
    if(this.count < this.allAnswerList.length) {
      modalButton.innerText = '次の問題'
    } else {
      modalButton.innerText = '結果をみる'
    }

    // 正解表示
    Object.keys(this.allAnswerList[this.index]).forEach((value, index) => {
      if(value === 'correct') {
        const answerKeyNumber = this.numberList[index]
        const answerKeyText = this.allAnswerList[this.index][value]

        modalNumber.innerText = answerKeyNumber
        modalText.innerText = answerKeyText
      }
    })

    modal.appendChild(modalContent)
    modalContent.appendChild(modalTitle)
    modalContent.appendChild(modalNumber)
    modalContent.appendChild(modalText)
    modalContent.appendChild(modalButtonArea)
    modalButtonArea.appendChild(modalButton)

    return [modal, modalContent]
  }

  appendElement(modal) {
    const body = document.body
    body.insertBefore(modal, body.firstChild)    
  }

  removeElement(modal) {
    modal.remove()
  }
}

export default Modal