import Session from './session'

class Question {
  constructor(targetDOM) {
    this.setParameters(targetDOM)
    this.extractData()  
    this.bindEvent()
  }

  setParameters(targetDOM) {
    this.questionNumber = targetDOM.querySelector('.js-question-number')
    this.questionTitle = targetDOM.querySelector('.js-question-title')
  }

  extractData() {
    this.count = Session.searchSession('count')
    this.questionList = Session.searchSession('questionList')
  }

  // カウントと配列のindexを揃える
  get index() {
    return this.count - 1
  }

  bindEvent() {
    this.createElement('question')
  }

  // DOMを生成
  createElement(...element) {
    // 問題番号と問題文
    if(element.includes('question')) {
      let questionNumberText, questionTitleText

      questionNumberText = `問${this.count}`
      questionTitleText = this.questionList[this.index]

      this.appendQuestion(questionNumberText, questionTitleText)
    }
  }

  // DOMを追加
  appendQuestion(questionNumberText, questionTitleText) {
    this.questionNumber.innerText = questionNumberText
    this.questionTitle.innerText = questionTitleText
  }
}


export default Question