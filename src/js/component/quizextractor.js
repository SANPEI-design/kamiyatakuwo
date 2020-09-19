
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

  get shuffledDataLength() {
    return this._shuffledData.length
  }

  get numberList() {
    return this._numberList
  }

  get choice() {
    return this._choice
  }

  // クイズデータから配列を生成
  fromData() {
    this._askedList = Session.searchSession('askedList')
    this._choice = Session.searchSession('choice')

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

  // リスト数の比較
  compareLength(listA, listB) {
    this.largeList
    this.smallList

    if(listA.length > listB.length === true) {
      this.largeList = listA
      this.smallList = listB
    } else {
      this.largeList = listB
      this.smallList = listA
    }
  }

  // クイズデータ処理
  init() {
    // 残りの言葉の数が多い方が「ハズレの質問文」「ランダム関数の引数を3」
    this.compareLength(quizData.kamiyaWordList, quizData.othersWordList)

    let i = 0
    let largeLength = this.largeList.length
    let smallLength = this.smallList.length

    const allAnswerList = []

    // 残りの言葉の数が両方とも3以下だと終了（＝「結果を見る」）

    // 多いリストが3以上のときに繰り返す
    while(largeLength >= 3) {
      largeLength = this.largeList.length
      smallLength = this.smallList.length
      console.log('while', largeLength, this.largeList)

      // 少ないリストが0だと終了
      if(smallLength === 0) break

      const missList = this.selectRandom(this.largeList, 3)
      const correctList = this.selectRandom(this.smallList, 1)
      this.compareLength(this.largeList, this.smallList)

      const randomWordList = {}

      missList.forEach((value, index) => {
        randomWordList[`miss${index}`] = value
      })

      correctList.forEach((value) => {
        randomWordList[`correct`] = value
      })

      allAnswerList.push(this.shuffle(randomWordList))
      
      // 【！使ってないのであとで削除】カウント
      i++

      console.log(`配列比較は${i}回実施`)  
    }
    
    console.log(allAnswerList)

    return allAnswerList


    // ランダムなワードを作る
    // const missList = this.selectRandom(this.largeList, 3)
    // const correctList = this.selectRandom(this.smallList, 1)

    // const randomWordmap = new Map()

    // missList.map((value, index) => {
    //   randomWordmap.set(`miss${index}`, value)
    // })

    // correctList.map((value) => {
    //   randomWordmap.set(`correct`, value)
    // })

    // // シャッフルした配列
    // return this.shuffle(Object.fromEntries(randomWordmap))
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
  shuffle(object) {
    const target = Object.entries(object)
    const shuffledArray = this.selectRandom(target, target.length)
    const newObject = Object.fromEntries(shuffledArray)

    return newObject
  }
}

export default QuizExtractor
