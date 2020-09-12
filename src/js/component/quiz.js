import quizData from '../../_includes/data'

class Quiz {
  constructor(targetDOM) {
    this.setParameters(targetDOM)
    this.bindEvent()
  }

  setParameters(targetDOM) {
    this.answerDOMList = targetDOM.querySelectorAll('.js-answer')
  }

  bindEvent() {
    this.appendElement()
    this.storeSession()
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
  createElement() {
    this.number = document.createElement('p')
    this.number.classList.add('card__number', 'text-large')
    this.text = document.createElement('p')
    this.text.classList.add('card__text')
  }

  // DOMを追加
  appendElement() {
    const shuffledData = this.init()
    console.log(shuffledData)
    const answerList = Object.values(shuffledData)
    const numberList = quizData['numberList']

    this.answerDOMList.forEach((dom, index) => {
      this.createElement()
      
      const fragment = document.createDocumentFragment()
      fragment.appendChild(this.number)
      fragment.appendChild(this.text)

      this.number.innerText = numberList[index]
      this.text.innerText = answerList[index]

      dom.appendChild(fragment)
    })
  }

  // セッションストレージに保存
  storeSession() {
    const shuffledData = this.init()
    sessionStorage.setItem('answerList', JSON.stringify(shuffledData))
  }
}


export default Quiz