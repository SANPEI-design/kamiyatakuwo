import Quiz from './quiz'
import Session from './session'

class Answer extends Quiz {
  setParameters(targetDOM) {
    super.setParameters(targetDOM)
    
    this.answerTitle = targetDOM.querySelector('.js-answer-title')
    this.answerButtonArea = targetDOM.querySelector('.js-answer-button-area')
  }

  extractData() {
    super.extractData()
    
    this.choice = Session.searchSession('choice')
  }

  bindEvent() {
    super.bindEvent()

    // あたりの場合に実行
    if(this.choice === this.allAnswerList[this.index]['correct']) {
      this.createElement('answerTitle', 'correct')
    }
    // はずれの場合に実行
    else {
      this.createElement('answerTitle', 'miss')
    }

    this.addClass()
  }

  // DOMを生成
  createElement(...element) {
    super.createElement(...element)

    // 結果
    if(element.includes('answerTitle')) {
      // タイトル共通
      const answerTitleImgFragment = document.createDocumentFragment()
      const answerTitleImg = document.createElement('img')

      // ボタン共通
      const buttonAreafragment = document.createDocumentFragment()
      const button = document.createElement('button')

      button.setAttribute('type', 'button')
      button.classList.add('button')
  
      // あたりの場合
      if(element.includes('correct')) {
        // タイトル
        this.answerTitle.classList.add('answer__title--correct')
        answerTitleImg.setAttribute('src', '/img/text_correct.svg')
        answerTitleImg.setAttribute('alt', 'あたり')
        answerTitleImg.classList.add('answer__title-image--correct')

        // ボタン
        this.answerButtonArea.classList.add('button-area')
        button.classList.add('js-next')

        // 「次の問題」ボタンと「結果をみる」ボタンの分岐
        if(this.count < this.allAnswerList.length) {
          button.innerText = '次の問題'
        } else {
          button.innerText = '結果をみる'
        }

        buttonAreafragment.appendChild(button)        
      }

      // はずれの場合
      else if(element.includes('miss')) {
        // タイトル
        this.answerTitle.classList.add('answer__title--miss')
        answerTitleImg.setAttribute('src', '/img/text_miss.svg')
        answerTitleImg.setAttribute('alt', 'はずれ')
        answerTitleImg.classList.add('answer__title-image--miss')

        // ボタン
        this.answerButtonArea.classList.add('button-area--2column')

        const buttonList = {}
        const buttonLength = 2

        for(let i = 0; i < buttonLength; i++) {
          buttonList[i] = document.importNode(button, true)
          
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

        Object.values(buttonList).forEach(value => {
          buttonAreafragment.appendChild(value)
        })
      }

      answerTitleImgFragment.appendChild(answerTitleImg)

      this.appendAnswer(answerTitleImgFragment, buttonAreafragment)
    }
  }

  // 解答DOMを追加
  appendAnswer(answerTitleImgFragment, buttonAreafragment) {
    this.answerTitle.appendChild(answerTitleImgFragment)
    this.answerButtonArea.appendChild(buttonAreafragment)
  }

  // 選択された解答にマーク
  addClass() {
    this.answerDOMList.forEach((dom, index) => {
      if(this.choice === this.answerList[index]) {
        dom.classList.add('is-selected')
      }
    })
  }
}


export default Answer