import Start from './component/start'
import Quiz from './component/quiz'
import Question from './component/question'
import Choice from './component/choice'
import Answer from './component/answer'
import Modal from './component/modal'
import Redo from './component/redo'
import Next from './component/next'
import Miss from './component/miss'
import Result from './component/result'
import Clear from './component/clear'
import Share from './component/share'


// 開始
const START_DOM = document.querySelector('.js-start')
if(START_DOM !== null) {
  new Start(START_DOM)
}


// クイズ選択肢
const QUIZ_DOM = document.querySelector('.js-quiz')
if(QUIZ_DOM !== null) {
  new Quiz(QUIZ_DOM)
}


// 質問文
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
const ANSWER_DOM = document.querySelector('.js-answer')
if(ANSWER_DOM !== null) {
  new Answer(ANSWER_DOM)
}


// モーダル
const MODAL_DOM = document.querySelector('.js-modal')
if(MODAL_DOM !== null) {
  new Modal(MODAL_DOM)

  MODAL_DOM.addEventListener('click', () => {
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
}


// やり直し
const REDO_DOM = document.querySelector('.js-redo')
if(REDO_DOM !== null) {
  new Redo(REDO_DOM)
}


// ページネーション
const NEXT_DOM = document.querySelector('.js-next')
if(NEXT_DOM !== null) {
  new Next(NEXT_DOM)
}


// 結果
const RESULT_DOM = document.querySelector('.js-result')
if(RESULT_DOM !== null) {
  new Result(RESULT_DOM)
}


// クリア
const CLEAR_DOM = document.querySelector('.js-clear')
if(CLEAR_DOM !== null) {
  new Clear(CLEAR_DOM)
}


// シェア
const SHARE_DOM = document.querySelector('.js-share')
if(SHARE_DOM !== null) {
  new Share(SHARE_DOM)
}