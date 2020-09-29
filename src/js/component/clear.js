class Clear {
  constructor(targetDOM) {
    this.trigger = targetDOM
    this.bindEvent()
  }

  bindEvent() {
    this.trigger.addEventListener('click', e => {
      e.preventDefault()

      sessionStorage.clear()
      location.pathname = '/'
    })
  }
}


export default Clear