import QuizExtractor from "./quizextractor"
import Session from "./session"

class Next {
  constructor(targetDOM) {
    this.extractData()
    this.trigger = targetDOM
    this.bindEvent()
  }

  extractData() {
    this.quizExtractor = new QuizExtractor()

    this.shuffledDataLength = this.quizExtractor.shuffledDataLength
  }
  
  bindEvent() {
    this.count = Session.searchSession('count')
    this.trigger.addEventListener('click', e => {
      e.preventDefault()

      if(this.count < this.shuffledDataLength) {
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