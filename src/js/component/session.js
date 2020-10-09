class Session {
  constructor() {
    this.bindEvent()
  }

  bindEvent() {
    const path = location.pathname
    const top = '/'
    const allAnswerList = Session.searchSession('allAnswerList')

    if(allAnswerList === null) {
      sessionStorage.clear()

      if(path !== top) {
        location.replace(top)
      }
    }
  }

  static storeSession(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  }

  static searchSession(key) {
    const result = JSON.parse(sessionStorage.getItem(key))
    return result
  }
}

export default Session