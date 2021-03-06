import QuizExtractor from './quizextractor'

class Start {
  constructor(targetDOM) {
    this.trigger = targetDOM
    this.bindEvent()
  }

  bindEvent() {
    this.trigger.addEventListener('click', e => {
      e.preventDefault()

      new QuizExtractor()
      location.pathname = '/quiz.html'
    })
  }
}


export default Start