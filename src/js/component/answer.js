class Answer {
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



    this.output = []
  }

  bindEvent() {
    this.appendElement()
    // test.forEach((current, number) => {
    //   const answers = []
    //   for(letter in current.answers) {
    //     answers.push(
    //       `${letter}${number}`
    //     )
    //   }
    //   console.log(answers)
    // })



    // const kkk = document.querySelectorAll('.card_text')
    // console.log(kkk)




    this.testfunc()

  }

  testfunc() {
    // test.forEach((currentQuestion, questionNumber) => {
    //   const answers = []

    //   for(letter in currentQuestion.answers) {
    //     answers.push(
    //       `<label>
    //         <input type="radio" name="question${questionNumber}" value="${letter}">
    //         ${letter} :
    //         ${currentQuestion.answers[letter]}
    //       </label>`
    //     )
    //   }

    //   output.push(
    //     `<div class="question"> ${currentQuestion.question} </div>
    //     <div class="answers"> ${answers.join('')} </div>`
    //   )
    // })


    // キーとバリューがめっちゃ取得できる
    test.forEach(elm => {
      Object.keys(elm).forEach(key => {
        // console.log(`key: ${key}, value: ${elm[key]}`)
        const hhh = elm.answers
        console.log(hhh.イ)
        // Object.keys(elm2).forEach(() => {
        //   console.log(elm2[key])
        // })
      })
    })
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

export default Answer