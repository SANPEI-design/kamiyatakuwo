
import quizData from '../../_includes/data'
import Session from './session'

class QuizExtractor {
  constructor() {
    this.bindEvent()
  }

  bindEvent() {
    this.fromData()
    Session.storeSession('askedList', this.shuffledData)
  }

  get shuffledData() {
    return this._shuffledData
  }

  get numberList() {
    return this._numberList
  }

  get answerList() {
    return this._answerList
  }

  get choice() {
    return this._choice
  }

  // クイズデータから配列を生成
  fromData() {
    const [askedList, choice] = Session.searchSession()
    console.log(askedList, choice)

    this._askedList = askedList
    this._choice = choice

    // 初回にinit()でデータを作る
    if(this._askedList !== null) {
      this._shuffledData = this._askedList
      console.log('すでにある', this._shuffledData)
    } else {
      this._shuffledData = this.init()
      console.log('まだない', this._shuffledData)
    }

    console.log(this._shuffledData)
    this._answerList = Object.values(this._shuffledData)
    this._numberList = quizData['numberList']
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
}

export default QuizExtractor
