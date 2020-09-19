import Session from "./session"

class Miss {
  constructor(targetDOM) {
    this.trigger = targetDOM
    this.bindEvent()
  }

  bindEvent() {
    this.trigger.addEventListener('click', e => {
      e.preventDefault()

      this.miss = Session.searchSession('miss')
      this.increaseCount()
      Session.storeSession('miss', this.miss)
    })
  }

  increaseCount() {
    this.miss++
  }
}

export default Miss