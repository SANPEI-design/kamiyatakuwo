import Session from "./session"

class Next {
  constructor(targetDOM) {
    this.trigger = targetDOM
    this.extractData()
    this.bindEvent()
  }

  extractData() {
    this.allAnswerList = Session.searchSession('allAnswerList')
    this.count = Session.searchSession('count')
  }
  
  bindEvent() {
    this.trigger.addEventListener('click', e => {
      e.preventDefault()

      // クイズ画面へ遷移
      if(this.count < this.allAnswerList.length) {
        location.pathname = '/quiz.html'
        this.increaseCount()
        Session.storeSession('count', this.count)
        }
        // 結果画面へ遷移
        else {
        location.pathname = '/result.html'
      }
    })
  }

  increaseCount() {
    this.count++
  }
}

export default Next