import QuizExtractor from "./quizextractor"
import Session from "./session"

class Next {
  constructor(targetDOM) {
    this.extractData()
    this.trigger = targetDOM
    this.bindEvent()
  }

  extractData() {
    this.allAnswerList = Session.searchSession('allAnswerList')
    this.allAnswerListLength = this.allAnswerList.length
  }
  
  bindEvent() {
    this.count = Session.searchSession('count')
    this.trigger.addEventListener('click', e => {
      e.preventDefault()

      if(this.count < this.allAnswerListLength) {
        location.pathname = '/demo/02_quiz.html'
        this.increaseCount()
        Session.storeSession('count', this.count)
        }

        // 結果画面へ遷移
        else {
        location.pathname = '/demo/04_result.html'
      }
    })
  }

  increaseCount() {
    this.count++
  }
}

export default Next