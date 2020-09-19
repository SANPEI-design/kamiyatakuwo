import Quiz from './component/quiz'
import Choice from './component/choice'
import Answer from './component/answer'
import Modal from './component/modal'
import Redo from './component/redo'
import Next from './component/next'

// 必要な機能
/*
クイズを生成する機能
  【済】DOM
  配列
  関数
回答判定機能
戻る機能
正解率を計算する機能
結果を生成する機能
【済】モーダル機能
 */


// クイズ画面
const QUIZ_DOMS = document.querySelectorAll('.js-quiz')
if(QUIZ_DOMS.length > 0) {
  QUIZ_DOMS.forEach(dom => {
    new Quiz(dom)
  })
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

    // モーダル内の次の問題
    dom.addEventListener('click', () => {
      const NEXT_DOM = document.querySelector('.js-next')
      if(NEXT_DOM !== null) {
        new Next(NEXT_DOM)
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

// 次の問題
const NEXT_DOMS = document.querySelectorAll('.js-next')
if(NEXT_DOMS.length > 0) {
  NEXT_DOMS.forEach(dom => {
    new Next(dom)
  })
}