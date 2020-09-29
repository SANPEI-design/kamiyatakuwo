import Session from "./session"

class Choice {
  constructor(targetDOM) {
    this.trigger = targetDOM
    this.bindEvent()
  }

  bindEvent() {
    this.trigger.addEventListener('click', e => {
      e.preventDefault()

      const choiceText = this.trigger.querySelector('.js-text').innerText
      
      Session.storeSession('choice', choiceText)
      location.pathname = '/answer.html'      
    })
  }
}


export default Choice