import Session from "./session"

class Miss {
  constructor(targetDOM) {
    this.trigger = targetDOM
    this.extractData()
    this.bindEvent()
  }

  extractData() {
    this.miss = Session.searchSession('miss')
  }

  bindEvent() {
    this.trigger.addEventListener('click', e => {
      e.preventDefault()

      this.increaseCount()
      Session.storeSession('miss', this.miss)
    })
  }

  increaseCount() {
    this.miss++
  }
}

export default Miss