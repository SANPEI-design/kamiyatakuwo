import quizData from '../../_includes/data'

class Quiz {
  constructor(targetDOM) {
    this.setParameters(targetDOM)
    this.bindEvent()
  }

  setParameters(targetDOM) {
    this.answerDOMList = targetDOM.querySelectorAll('.js-choice')
    this.answerTitle = targetDOM.querySelector('.js-answer-title')
    this.answerButtonArea = targetDOM.querySelector('.js-answer-button-area')
  }

  bindEvent() {
    // this.appendElement()
    this.storeSession()
    this.searchSession()
  }

  // クイズデータ処理
  init() {

    // 言葉の数
    const kamiyaWordLength = quizData.kamiyaWordList.length
    const othersWordLength = quizData.othersWordList.length

    // 残りの言葉の数が両方とも3以下だと終了（＝「結果を見る」）
    // 残りの言葉の数が片方0だと終了（＝「結果を見る」）

    // 残りの言葉の数が多い方が「ハズレの質問文」「ランダム関数の引数を3」

    // かみやたくをの言葉のランダム選択
    const randomKamiyaWordList = this.selectRandom(quizData.kamiyaWordList, 3)
    console.log(randomKamiyaWordList)

    // それ以外の言葉のランダム選択
    const randomOthersWordList = this.selectRandom(quizData.othersWordList, 1)
    console.log(randomOthersWordList)

    // かみやたくをの言葉とそれ以外の言葉をシャッフルした配列を作る（キーも作る）
    const randomWordList = {}
    randomKamiyaWordList.forEach(value => {
      const number = randomKamiyaWordList.indexOf(value)
      randomWordList[`miss${number}`] = value
    })
    randomOthersWordList.forEach(value => {
      randomWordList['correct'] = value
    })

    // シャッフルした配列
    return this.shuffle(randomWordList)
  }

  // ランダムに要素を取得（元の配列も削除される）
  selectRandom(array, num) {
    const newArray = []

    while(newArray.length < num && array.length > 0) {
      const randomNumber = Math.floor(Math.random() * array.length)
      newArray.push(array[randomNumber])
      array.splice(randomNumber, 1)
    }

    return newArray
  }

  // シャッフル
  shuffle(array) {
    const object = Object.entries(array)
    const shuffledObject = this.selectRandom(object, object.length)
    const newArray = Object.fromEntries(shuffledObject)

    return newArray
  }

  // DOMを生成
  createElement(...element) {
    this.fragment = document.createDocumentFragment()
    this.button = document.createElement('button')
    this.button.setAttribute('type', 'button')
    this.button.classList.add('button')

    // 解答リスト
    if(element.includes('answer')) {
      this.number = document.createElement('p')
      this.number.classList.add('card__number', 'text-large', 'js-number')
      this.text = document.createElement('p')
      this.text.classList.add('card__text', 'js-text')  
      this.fragment.appendChild(this.number)
      this.fragment.appendChild(this.text)
    }

    // 結果
    if(element.includes('answerTitle')) {
      this.answerTitleImg = document.createElement('img')
      this.fragment.appendChild(this.button)

      // あたり
      if(element.includes('correct')) {
        // タイトル
        this.answerTitle.classList.add('answer__title--correct')
        this.answerTitleImg.setAttribute('src', '/img/text_correct.svg')
        this.answerTitleImg.setAttribute('alt', 'あたり')
        this.answerTitleImg.classList.add('answer__title-image--correct')

        // ボタン
        this.answerButtonArea.classList.add('button-area')
        this.button.innerText = '次の問題'
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
        const buttonClone = this.button.cloneNode()

        // モーダル展開ボタン
        this.button.innerText = '正解をみる'
        this.button.classList.add('js-modal')

        // やり直しボタン
        buttonClone.innerText = 'やり直す'        
        this.fragment.appendChild(buttonClone)
      }
    }
  }

  // DOMを追加
  appendElement() {
    let shuffledData

    // 初回はnull
    const [askedList, choice] = this.searchSession()
    console.log(askedList, choice)

    // ストレージにすでにデータがある（＝結果画面以降）場合上書き
    if(askedList !== null) {
      shuffledData = askedList
      console.log('すでにある', shuffledData)
    } else {
      shuffledData = this.init()
      console.log('まだない', shuffledData)
    }

    console.log(shuffledData)
    const answerList = Object.values(shuffledData)
    const numberList = quizData['numberList']

    // クイズデータから解答リスト生成
    this.answerDOMList.forEach((dom, index) => {
      this.createElement('answer')
      
      this.number.innerText = numberList[index]
      this.text.innerText = answerList[index]

      dom.appendChild(this.fragment)

      // ストレージに解答データがある（＝結果画面以降）場合、その解答にマーク
      if(choice === null) return false
      if(choice === answerList[index]) {
        dom.classList.add('is-selected')
      }
    })

    // 正誤判定
    if(choice !== null) {
      if(choice === shuffledData['correct']) {
        this.createElement('answerTitle', 'correct')
        console.log('あたり')
      } else {
        this.createElement('answerTitle', 'miss')
        console.log('はずれ')
      }

      // 正誤DOM追加
      this.answerTitle.appendChild(this.answerTitleImg)
      this.answerButtonArea.appendChild(this.fragment)
    }

    return shuffledData
  }

  // セッションストレージに保存
  storeSession() {
    const shuffledData = this.appendElement()
    sessionStorage.setItem('askedList', JSON.stringify(shuffledData))
  }

  // セッションストレージを検索
  searchSession() {
    const askedList = JSON.parse(sessionStorage.getItem('askedList'))
    console.log(askedList)

    const choice = sessionStorage.getItem('choice')
    console.log(choice)

    return [askedList, choice]
  }
}


export default Quiz