import QuizExtractor from './quizextractor'
import Session from './session'

class Quiz {
  constructor(targetDOM) {  
    this.setParameters(targetDOM)
    this.extractData()
    this.setSession()
    this.bindEvent()
  }

  setParameters(targetDOM) {
    this.answerDOMList = targetDOM.querySelectorAll('.js-choice')
  }

  extractData() {
    this.allAnswerList = Session.searchSession('allAnswerList')
    this.numberList = QuizExtractor.numberList()
    this.count = Session.searchSession('count')
    this.miss = Session.searchSession('miss')
  }

  // カウントと配列のindexを揃える
  get index() {
    return this.count - 1
  }

  get answerList() {
    return Object.values(this.allAnswerList[this.index])
  }

  setSession() {
    // 問題数カウント用セッションをセット
    if(this.count === null) {
      Session.storeSession('count', 1)
      this.count = Session.searchSession('count')
    }

    // missカウント用セッションをセット
    if(this.miss === null) {
      Session.storeSession('miss', 0)
    }
  }

  bindEvent() {
    this.createElement('quiz')
  }

  // DOMを生成
  createElement(...element) {
    if(element.includes('quiz')) {
      const answerFragment = document.createDocumentFragment()
      const number = document.createElement('p')
      const text = document.createElement('p')
      const answerFragmentList = {}
      const answerLength = 4

      // クイズDOM（枠）
      number.classList.add('card__number', 'text-large', 'js-number')
      text.classList.add('card__text', 'js-text')  
      answerFragment.appendChild(number)
      answerFragment.appendChild(text)

      // クイズDOM（枠）の複製＆コンテンツ生成      
      for(let i = 0; i < answerLength; i++) {
        number.innerText = this.numberList[i]
        text.innerText = this.answerList[i]
        answerFragmentList[i] = document.importNode(answerFragment, true)
      }
      
      this.appendQuiz(answerFragmentList)
    }
  }

  // DOMを追加
  appendQuiz(answerFragmentList) {
    this.answerDOMList.forEach((dom, index) => {
      const answerFragment = Object.values(answerFragmentList)
      dom.appendChild(answerFragment[index])
    })
  }
}


export default Quiz