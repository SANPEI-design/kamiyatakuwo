import Quiz from './component/quiz'
import Choice from './component/choice'
import Modal from './component/modal'

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

const QUIZ_DOMS = document.querySelectorAll('.js-quiz')
if(QUIZ_DOMS.length > 0) {
  QUIZ_DOMS.forEach(dom => {
    new Quiz(dom)
  })

  // 解答のクリックイベント
  const CHOICE_DOMS = document.querySelectorAll('.js-choice-answer')
  if(CHOICE_DOMS.length > 0) {
    CHOICE_DOMS.forEach(dom => {
      dom.addEventListener('click', e => {
        e.preventDefault()
        new Choice(dom)
      })
    })
  }
}


// クイズ
// const CHOICE_DOMS = document.querySelectorAll('.js-answer')
// if(CHOICE_DOMS.length > 0) {
//   CHOICE_DOMS.forEach(dom => {
//     new Answer(dom)
//   })
// }


// モーダル
const MODAL_DOMS = document.querySelectorAll('.js-modal')
if(MODAL_DOMS.length > 0) {
  MODAL_DOMS.forEach(dom => {
    new Modal(dom)
  })
}