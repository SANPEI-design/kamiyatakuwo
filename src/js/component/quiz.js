import QuizExtractor from './quizextractor'
import Session from './session'

class Quiz {
  constructor(targetDOM) {  
    this.extractData()  
    this.setParameters(targetDOM)
    this.setIndex()
    this.bindEvent()
  }

  extractData() {
    this.quizExtractor = new QuizExtractor()

    this.shuffledData = this.quizExtractor.shuffledData
    this.numberList = this.quizExtractor.numberList
    // このデータはいらないかも
    // this.answerList = this.quizExtractor.answerList

  }

  setParameters(targetDOM) {
    this.answerDOMList = targetDOM.querySelectorAll('.js-choice')
  }

  setIndex() {
    this.count = Session.searchSession('count')

    if(this.count === null) {
      Session.storeSession('count', 1)
      this.count = Session.searchSession('count')
    }

    this.index = this.count - 1
  }

  bindEvent() {
    this.createElement('answer')
    this.appendQuiz()
  }

  // DOMを生成
  createElement(...element) {
    this.fragment = document.createDocumentFragment()

    // クイズDOM（枠）
    if(element.includes('answer')) {
      this.number = document.createElement('p')
      this.number.classList.add('card__number', 'text-large', 'js-number')
      this.text = document.createElement('p')
      this.text.classList.add('card__text', 'js-text')  
      this.fragment.appendChild(this.number)
      this.fragment.appendChild(this.text)
    }

    this.answerList = Object.values(this.shuffledData[this.index])

    // クイズDOM（枠）の複製＆コンテンツ生成
    this.answerFragmentList = {}
    const answerLength = 4
    
    for(let i = 0; i < answerLength; i++) {
      this.number.innerText = this.numberList[i]
      this.text.innerText = this.answerList[i]
      this.answerFragmentList[i] = document.importNode(this.fragment, true)
    }
  }

  // クイズDOMを追加
  appendQuiz() {
    this.answerDOMList.forEach((dom, index) => {
      const array = Object.values(this.answerFragmentList)
      dom.appendChild(array[index])
    })
  }
}


export default Quiz