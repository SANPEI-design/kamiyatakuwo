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


    console.log(test2.question)

    // 配列ランダム取得
    const test3 = [
      'aaa',
      'bbb',
      'ccc'
    ]
    console.log(test3[Math.floor(Math.random() * test3.length)])



    // const result = this.testfunc(test2.question)
    // console.log(result)



    const result = this.testfunc2(test2.kamiyatakuwo, 3)
    console.log(result)
    console.log(test2.kamiyatakuwo)
  }

  testfunc(array) {
    const ttt = array[Math.floor(Math.random() * array.length)]
    return ttt
  }

  // ランダムに要素を取得する関数（元の配列も削除される）
  testfunc2(array, num) {
    let newArray = []

    while(newArray.length < num && array.length > 0) {
      const random = Math.floor(Math.random() * array.length)
      newArray.push(array[random])
      array.splice(random, 1)
    }

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

const test = [
  {
    question: 'かみやたくをの言葉を選びなさい',
    answers: {
      イ: 'aaa',
      ロ: 'bbb',
      ハ: 'ccc',
      ニ: 'ddd'
    },
    answerKey: 'ロ'
  },
  {
    question: 'かみやたくをの言葉を選びなさい',
    answers: {
      イ: 'zzz',
      ロ: 'xxx',
      ハ: 'vvv',
      ニ: 'nnn'
    },
    answerKey: 'ハ'
  },
]

const test2 = {
  question: [
    'かみやたくをの言葉を選びなさい',
    'かみやたくを以外の言葉を選びなさい'
  ],
  kamiyatakuwo: [
    'kamiyaaaa',
    'kamiyabbb',
    'kamiyaccc',
    'kamiyaddd',
    'kamiyaeee',
    'kamiyafff',
    'kamiyaggg',
  ],
  other: [
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