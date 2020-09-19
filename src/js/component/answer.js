import Quiz from './quiz'

class Answer extends Quiz {
  extractData() {
    super.extractData()
    this.shuffledDataLength = this.quizExtractor.shuffledDataLength
    this.choice = this.quizExtractor.choice
  }

  setParameters(targetDOM) {
    super.setParameters(targetDOM)
    this.answerTitle = targetDOM.querySelector('.js-answer-title')
    this.answerButtonArea = targetDOM.querySelector('.js-answer-button-area')
  }

  bindEvent() {
    super.bindEvent()

    if(this.choice === this.shuffledData[this.index]['correct']) {
      this.createElement('answerTitle', 'correct')
      console.log('あたり')
    } else {
      this.createElement('answerTitle', 'miss')
      console.log('はずれ')
    }

    this.appendAnswer()
    this.addClass()
    console.log('addclassの後')
  }

  // DOMを生成
  createElement(...element) {
    super.createElement(...element)

    this.button = document.createElement('button')
    this.button.setAttribute('type', 'button')
    this.button.classList.add('button')

    // 結果
    if(element.includes('answerTitle')) {
      this.answerTitleImg = document.createElement('img')

      // あたり
      if(element.includes('correct')) {
        // タイトル
        this.answerTitle.classList.add('answer__title--correct')
        this.answerTitleImg.setAttribute('src', '/img/text_correct.svg')
        this.answerTitleImg.setAttribute('alt', 'あたり')
        this.answerTitleImg.classList.add('answer__title-image--correct')

        // ボタン
        this.answerButtonArea.classList.add('button-area')
        this.button.classList.add('js-next')

        // 「次の問題」ボタンと「結果をみる」ボタンの分岐
        if(this.count < this.shuffledDataLength) {
          this.button.innerText = '次の問題'
          } else {
          this.button.innerText = '結果をみる'
          }

        this.fragment.appendChild(this.button)        
      }

      // はずれ
      else if(element.includes('miss')) {
        // タイトル
        this.answerTitle.classList.add('answer__title--miss')
        this.answerTitleImg.setAttribute('src', '/img/text_miss.svg')
        this.answerTitleImg.setAttribute('alt', 'はずれ')
        this.answerTitleImg.classList.add('answer__title-image--miss')

        // ボタン
        this.answerButtonArea.classList.add('button-area--2column')
        const buttonList = {}
        const buttonLength = 2

        for(let i = 0; i < buttonLength; i++) {
          buttonList[i] = document.importNode(this.button, true)
          
          // モーダル展開ボタン
          if(i === 0) {
            buttonList[i].classList.add('js-modal')
            buttonList[i].innerText = '正解をみる'
          }

          // やり直しボタン
          if(i === 1) {
            buttonList[i].classList.add('js-redo')
            buttonList[i].innerText = 'やり直す'
          }
        }

        const array = Object.values(buttonList)
        console.log(array)

        array.forEach(value => {
          this.fragment.appendChild(value)
        })
        // ここに到達しない
        console.log(this.fragment)
      }
    }
  }

  // 解答DOMを追加
  appendAnswer() {
    this.answerTitle.appendChild(this.answerTitleImg)
    this.answerButtonArea.appendChild(this.fragment)
  }

  // 選択された解答にマーク
  addClass() {
    console.log('addclaass中')
    this.answerDOMList.forEach((dom, index) => {
      if(this.choice === this.answerList[index]) {
        dom.classList.add('is-selected')
      } else {
        console.log('そんなのない')
        console.log(this.choice, this.answerList)
      }
    })
  }
}


export default Answer