import Start from './component/start'
import Quiz from './component/quiz'
import Question from './component/question'
import Choice from './component/choice'
import Answer from './component/answer'
import Modal from './component/modal'
import Redo from './component/redo'
import Next from './component/next'
import Result from './component/result'
import Miss from './component/miss'


// 開始
const START_DOM = document.querySelector('.js-start')
if(START_DOM !== null) {
  new Start(START_DOM)
}

// クイズ選択
const QUIZ_DOMS = document.querySelectorAll('.js-quiz')
if(QUIZ_DOMS.length > 0) {
  QUIZ_DOMS.forEach(dom => {
    new Quiz(dom)
  })
}

const QUESTION_DOM = document.querySelector('.js-question')
if(QUESTION_DOM !== null) {
  new Question(QUESTION_DOM)
}


// 解答選択
const CHOICE_DOMS = document.querySelectorAll('.js-choice-answer')
if(CHOICE_DOMS.length > 0) {
  CHOICE_DOMS.forEach(dom => {
    new Choice(dom)
  })
}


// 回答画面
const ANSWER_DOMS = document.querySelectorAll('.js-answer')
if(ANSWER_DOMS.length > 0) {
  ANSWER_DOMS.forEach(dom => {
    new Answer(dom)
  })
}


// モーダル
const MODAL_DOMS = document.querySelectorAll('.js-modal')
if(MODAL_DOMS.length > 0) {
  MODAL_DOMS.forEach(dom => {
    new Modal(dom)

    dom.addEventListener('click', () => {
      const NEXT_DOM = document.querySelector('.js-next')
      const MISS_DOM = document.querySelector('.js-miss')

      // ページネーション
      if(NEXT_DOM !== null) {
        new Next(NEXT_DOM)
      }

      // ミスのトリガー
      if(MISS_DOM !== null) {
        new Miss(MISS_DOM)
      }
    }, {
      once: true
    })
  })
}


// やり直し
const REDO_DOMS = document.querySelectorAll('.js-redo')
if(REDO_DOMS.length > 0) {
  REDO_DOMS.forEach(dom => {
    new Redo(dom)
  })
}


// ページネーション
const NEXT_DOMS = document.querySelectorAll('.js-next')
if(NEXT_DOMS.length > 0) {
  NEXT_DOMS.forEach(dom => {
    new Next(dom)
  })
}


// 結果
const RESULT_DOMS = document.querySelectorAll('.js-result')
if(RESULT_DOMS.length > 0) {
  RESULT_DOMS.forEach(dom => {
    new Result(dom)
  })
}