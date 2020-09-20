import Session from './session'

class Question {
  constructor(targetDOM) {
    this.extractData()  
    this.setParameters(targetDOM)
    this.setSession()
    this.bindEvent()
  }

  extractData() {
    // 1ページで2回は不要

    // this.questionList = this.quizExtractor.questionList
  }

  setParameters(targetDOM) {
    this.questionNumber = targetDOM.querySelector('.js-question-number')
    this.questionTitle = targetDOM.querySelector('.js-question-title')
  }

  setSession() {
    this.count = Session.searchSession('count')

    // // 問題数と配列のindexを揃える
    // if(this.count === null) {
    //   Session.storeSession('count', 1)
    //   this.count = Session.searchSession('count')
    // }

    this.index = this.count - 1

    // missカウント用セッションをセット
    // this.miss = Session.searchSession('miss')
    // if(this.miss === null) {
    //   Session.storeSession('miss', 0)
    // }
  }

  bindEvent() {
    // console.log(this.questionList)
    this.createElement('question')
    // this.appendQuiz()
  }

  // DOMを生成
  createElement(...element) {
    // this.fragment = document.createDocumentFragment()

    // クイズDOM（枠）
    if(element.includes('question')) {
      // this.number = document.createElement('p')
      // this.number.classList.add('card__number', 'text-large', 'js-number')
      // this.text = document.createElement('p')
      // this.text.classList.add('card__text', 'js-text')  
      // this.fragment.appendChild(this.number)
      // this.fragment.appendChild(this.text)
      // const aaa = Session.searchSession('count')
      // const bbb = Session.searchSession('index')
      const ggg = Session.searchSession('questionList')
      console.log(ggg)
      this.questionNumber.innerText = `問${this.count}`
      this.questionTitle.innerText = ggg[this.index]
    }

    // this.answerList = Object.values(this.shuffledData[this.index])

    // クイズDOM（枠）の複製＆コンテンツ生成
    // this.answerFragmentList = {}
    // const answerLength = 4
    
    // for(let i = 0; i < answerLength; i++) {
    //   this.number.innerText = this.numberList[i]
    //   this.text.innerText = this.answerList[i]
    //   this.answerFragmentList[i] = document.importNode(this.fragment, true)
    // }
  }

  // クイズDOMを追加
  appendQuiz() {
    // this.answerDOMList.forEach((dom, index) => {
    //   const array = Object.values(this.answerFragmentList)
    //   dom.appendChild(array[index])
    // })
  }
}


export default Question