
import quizData from '../../_includes/data'
import Session from './session'

class QuizExtractor {
  constructor() {
    this.bindEvent()
  }

  bindEvent() {
    this.fromData()
    Session.storeSession('allAnswerList', this.allAnswerList)
    Session.storeSession('questionList', this.questionList)
  }

  static numberList() {
    return quizData['numberList']
  }

  get allAnswerList() {
    return this._allAnswerList
  }

  get questionList() {
    return this._questionList
  }

  // クイズデータから配列を生成
  fromData() {
    this._allAnswerList = Session.searchSession('allAnswerList')
    this._questionList = Session.searchSession('questionList')

    // 初回に init() で加工データを作る
    if(this._allAnswerList === null) {
      this.init()
      console.log('まだない', this._allAnswerList)
    } else {
      console.log('すでにある', this._allAnswerList)
    }
  }

  // リスト数の比較
  compareLength(listA, listB) {
    this.largeList
    this.smallList

    if(listA.length > listB.length === true) {
      this.largeList = listA
      this.smallList = listB

      console.log(this.largeList, listA)
    } else {
      this.largeList = listB
      this.smallList = listA

      console.log(this.largeList, listB)
    }
  }

  createQuestionList() {
    // 小さい（＝正解出力予定）リストと神谷ワードリストで配列を作る
    const array = this.smallList.concat(Object.values(quizData.kamiyaWordList))

    // 作成した配列の重複を削除
    const set = new Set(array)
    const setArray = Array.from(set)

    if(array.length === setArray.length) {
      console.log('小さい（＝正解）リストはその他リスト', this.smallList)
      this._questionList.push(quizData.question[1])
    } else {
      console.log('小さい（＝正解）リストはかみやたくをリスト', this.smallList)
      this._questionList.push(quizData.question[0])
    }
  }

  // クイズデータ処理
  init() {
    // 残りの言葉の数が多い方が「ハズレの質問文」「ランダム関数の引数を3」
    this.compareLength(quizData.kamiyaWordList, quizData.othersWordList)

    let i = 0
    let largeLength = this.largeList.length
    let smallLength = this.smallList.length

    this._allAnswerList = []
    this._questionList = []

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
      this.createQuestionList()

      const randomWordList = {}

      missList.forEach((value, index) => {
        randomWordList[`miss${index}`] = value
      })

      correctList.forEach((value) => {
        randomWordList[`correct`] = value
      })

      this._allAnswerList.push(this.shuffle(randomWordList))
      
      // 【！使ってないのであとで削除】カウント
      i++

      console.log(`配列比較は${i}回実施`)  
    }

    console.log(this._questionList)
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
