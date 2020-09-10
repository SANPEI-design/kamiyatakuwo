class Quiz {
  constructor(targetDOM) {
    this.init()
    this.setParameters(targetDOM)
    this.bindEvent()
  }

  init() {
    this.createElement()
  }

  setParameters(targetDOM) {
    this.trigger = targetDOM
  }

  bindEvent() {
    this.appendElement()

    // 言葉の数
    const kamiyaWordLength = array.kamiyaWordList.length
    const othersWordLength = array.othersWordList.length

    // 残りの言葉の数が両方とも3以下だと終了（＝「結果を見る」）
    // 残りの言葉の数が片方0だと終了（＝「結果を見る」）

    // 残りの言葉の数が多い方が「ハズレの質問文」「ランダム関数の引数を3」

    // かみやたくをの言葉のランダム選択
    const result = this.selectRandom(array.kamiyaWordList, 3)
    console.log(result)

    // それ以外の言葉のランダム選択
    const result2 = this.selectRandom(array.othersWordList, 1)
    console.log(result2)

    // かみやたくをの言葉とそれ以外の言葉をシャッフルした配列を作る（キーも作る）
    const arraytest = {}
    result.forEach(value => {
      const number = result.indexOf(value)
      arraytest[`hazure${number}`] = value
    })
    result2.forEach(value => {
      arraytest['atari'] = value
    })

    // シャッフルした配列
    const shuffle = this.shuffle(arraytest)
    console.log(shuffle)





    // DOMにテキストをつっこんでいく
  }

  // ランダムに要素を取得する関数（元の配列も削除される）
  selectRandom(array, num) {
    const newArray = []

    while(newArray.length < num && array.length > 0) {
      const randomElement = Math.floor(Math.random() * array.length)
      newArray.push(array[randomElement])
      array.splice(randomElement, 1)
    }

    return newArray
  }

  // シャッフルする関数
  shuffle(array) {
    const object = Object.entries(array)
    const result = this.selectRandom(object, object.length)
    const newArray = Object.fromEntries(result)

    return newArray
  }

  createElement() {
    this.number = document.createElement('p')
    this.number.classList.add('card__number', 'text-large')
    this.text = document.createElement('p')
    this.text.classList.add('card__text')
  }

  appendElement() {
    const fragment = document.createDocumentFragment()
    fragment.appendChild(this.number)
    fragment.appendChild(this.text)
    this.trigger.appendChild(fragment)
  }
}

const array = {
  question: [
    'かみやたくをの言葉を選びなさい',
    'かみやたくを以外の言葉を選びなさい'
  ],
  kamiyaWordList: [
    'kamiyaaaa',
    'kamiyabbb',
    'kamiyaccc',
    'kamiyaddd',
    'kamiyaeee',
    'kamiyafff',
    'kamiyaggg',
  ],
  othersWordList: [
    'otheraaa',
    'otherbbb',
    'otherccc',
    'otherddd',
    'othereee',
    'otherfff',
    'otherggg',
  ]
}

export default Quiz