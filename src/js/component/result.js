import QuizExtractor from './quizextractor'
import Session from './session'

class Result {
  constructor(targetDOM) {  
    this.extractData()  
    this.setParameters(targetDOM)
    this.bindEvent()
  }

  extractData() {
    this.allAnswerList = Session.searchSession('allAnswerList')
    this.allAnswerListLength = this.allAnswerList.length
  }

  setParameters(targetDOM) {
    this.resultTitle = targetDOM.querySelector('.js-result-title')
    this.resultRate = targetDOM.querySelector('.js-result-rate')
  }

  bindEvent() {
    this.createElement('result')
    this.appendElement()
  }

  // 結果DOMを生成
  createElement(...element) {
    this.fragment = document.createDocumentFragment()

    if(element.includes('result')) {
      const missLength = Session.searchSession('miss')
      this.resultRateNumber = Math.round((this.allAnswerListLength - missLength) / this.allAnswerListLength * 100)
      
      this.resultImg = document.createElement('img')
      // 正答率50%未満の場合
      if(this.resultRateNumber < 50) {
        this.resultImg.classList.add('result__title-image--best')
        this.resultImg.setAttribute('src', '/img/text_best.svg')
        this.resultImg.setAttribute('alt', 'がんばれ')  
      }
      // 正答率50%以上の場合
      else {
        this.resultImg.classList.add('result__title-image--great')
        this.resultImg.setAttribute('src', '/img/text_great.svg')
        this.resultImg.setAttribute('alt', 'すごい')  
      }
    }
  }

  // 結果DOMを追加
  appendElement() {
    this.resultTitle.appendChild(this.resultImg)
    this.resultRate.innerText = this.resultRateNumber
  }
}


export default Result