class Redo {
  constructor(targetDOM) {
    this.trigger = targetDOM
    this.bindEvent()
  }

  bindEvent() {
    this.trigger.addEventListener('click', e => {
      e.preventDefault()
      console.log('クリック')
      location.pathname = '/demo/02_quiz.html'
    })
  }
}

export default Redo