
import quizData from '../../_includes/data'
import Session from './session'

class QuizExtractor {
  constructor() {
    this.bindEvent()
  }

  bindEvent() {
    const [allAnswerList, questionList] = this.init()
    Session.storeSession('allAnswerList', allAnswerList)
    Session.storeSession('questionList', questionList)
  }

  static numberList() {
    return quizData['numberList']
  }

  // クイズデータから配列を生成
  init() {
    const randomWordList = {}
    const allAnswerList = []
    const questionList = []
    let largeLength, smallLength

    // リスト数を比較して大小を格納
    let [largeList, smallList] = this.compareLength(quizData.kamiyaWordList, quizData.othersWordList)

    largeLength = largeList.length
    smallLength = smallList.length

    // 小リスト数が1以上のときに繰り返す
    while(smallLength >= 1) {
      let question
      let missList, correctList

      // リスト数を比較して大小を格納
      [largeList, smallList] = this.compareLength(largeList, smallList)

      largeLength = largeList.length
      smallLength = smallList.length

      // 比較後、大リスト数が3未満で終了
      if(largeLength < 3) break

      question = this.selectQuestion(smallList)
      questionList.push(question)

      // リストからランダムに配列作成
      missList = this.selectRandom(largeList, 3)
      correctList = this.selectRandom(smallList, 1)

      // 各配列からリスト（オブジェクト）生成
      missList.forEach((value, index) => {
        randomWordList[`miss${index}`] = value
      })
      correctList.forEach((value) => {
        randomWordList[`correct`] = value
      })

      // シャッフルしたリストで配列（＝全クイズ）作成
      allAnswerList.push(this.shuffle(randomWordList))  
    }

    return [allAnswerList, questionList]
  }

  // リスト数の比較
  compareLength(a, b) {
    let largeList, smallList

    if(a.length > b.length === true) {
      largeList = a
      smallList = b
    } else {
      largeList = b
      smallList = a
    }
    return [largeList, smallList]
  }

  // 質問文を選択
  selectQuestion(smallList) {
    let question

    // 小（＝正解出力予定）リスト ＋ かみやリストの配列を作成
    const array = smallList.concat(Object.values(quizData.kamiyaWordList))

    // 作成した配列の重複を削除（＝ユニークリスト）
    const set = new Set(array)
    const setArray = Array.from(set)

    // 小リスト ＋ かみやリストの数 ＝ ユニークリストの数なら、小リストは神谷リストではない
    if(array.length === setArray.length) {
      question = quizData.question[1]
    }
    
    // 小リスト ＋ かみやリストの数 ≠ ユニークリストの数がなら、小リストは神谷リスト
    else {
      question = quizData.question[0]
    }

    return question
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
