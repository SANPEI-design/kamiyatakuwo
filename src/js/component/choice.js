class Choice {
  constructor(targetDOM) {
    this.trigger = targetDOM
    this.bindEvent()
  }

  bindEvent() {
    this.storeSession()
    location.pathname = '/demo/03_answer.html'
  }

  init() {
  }

  // セッションストレージに保存
  storeSession() {
    const choiceText = this.trigger.querySelector('.js-text').innerText
    sessionStorage.setItem('choice', choiceText)
  }
}


export default Choice