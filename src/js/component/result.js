import QuizExtractor from './quizextractor'
import Session from './session'

class Result {
  constructor(targetDOM) {  
    this.extractData()  
    this.setParameters(targetDOM)
    this.bindEvent()
  }

  extractData() {
    this.quizExtractor = new QuizExtractor()

    this.shuffledDataLength = this.quizExtractor.shuffledDataLength
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
      // 結果タイトル
      this.resultImg = document.createElement('img')
      this.resultImg.classList.add('result__title-image--best')
      this.resultImg.setAttribute('src', '/img/text_best.svg')
      this.resultImg.setAttribute('alt', 'がんばれ')

      // 正誤率
      this.resultRateNumber = '50'
    }
  }

  // 結果DOMを追加
  appendElement() {
    this.resultTitle.appendChild(this.resultImg)
    this.resultRate.innerText = this.resultRateNumber
  }
}


export default Result