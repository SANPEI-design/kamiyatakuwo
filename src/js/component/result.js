import Session from './session'

class Result {
  constructor(targetDOM) {
    this.setParameters(targetDOM)
    this.extractData()
    this.bindEvent()
  }

  setParameters(targetDOM) {
    this.resultTitle = targetDOM.querySelector('.js-result-title')
    this.resultRate = targetDOM.querySelector('.js-result-rate')
  }

  extractData() {
    this.allAnswerList = Session.searchSession('allAnswerList')
    this.miss = Session.searchSession('miss')
  }

  bindEvent() {
    this.createElement('result')
  }

  // 結果DOMを生成
  createElement(...element) {
    if(element.includes('result')) {
      // 正答率計算
      const resultRateNumber = Math.round((this.allAnswerList.length - this.miss) / this.allAnswerList.length * 100)
      
      const resultImg = document.createElement('img')
      resultImg.classList.add('js-result-img')

      // 正答率50%未満の場合
      if(resultRateNumber < 50) {
        resultImg.classList.add('result__title-image--best')
        resultImg.setAttribute('src', '/img/text_best.svg')
        resultImg.setAttribute('alt', 'がんばれ')  
      }
      // 正答率50%以上の場合
      else {
        resultImg.classList.add('result__title-image--great')
        resultImg.setAttribute('src', '/img/text_great.svg')
        resultImg.setAttribute('alt', 'すごい')  
      }
      this.appendElement(resultRateNumber, resultImg)
    }
  }

  // 結果DOMを追加
  appendElement(resultRateNumber, resultImg) {
    this.resultTitle.appendChild(resultImg)
    this.resultRate.innerText = resultRateNumber
  }
}


export default Result