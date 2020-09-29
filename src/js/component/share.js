class Share {
  constructor(targetDOM) {
    this.trigger = targetDOM
    this.bindEvent()
  }

  bindEvent() {
    this.trigger.addEventListener('click', () => {
      if(navigator.share !== undefined) {
        const [resultImgAlt, resultRate] = this.resultData

        navigator.share({
          url: '/',
          title: '名言クイズ「かみやたくを」',
          text: `${resultImgAlt}！正解率は${resultRate}%でした。あなたは難問解けるかな？ | 名言クイズ「かみやたくを」`
        }).catch((error) => {
          if(error.name === 'NotAllowedError') {
            alert('再読込してからお試しください')
          }
        })  
      } else {
        alert('未対応ブラウザです。\n対応ブラウザ：iOS Safari／android chrome')
      }
    })
  }

  get resultData() {
    const resultImgDOM = document.querySelector('.js-result-img')
    const resultImgAlt = resultImgDOM.getAttribute('alt')
    const resultRateDOM = document.querySelector('.js-result-rate')
    const resultRate = resultRateDOM.innerText

    return [resultImgAlt, resultRate]
  }
}


export default Share