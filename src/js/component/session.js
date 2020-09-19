class Session {
  static storeSession(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  }

  static searchSession(key) {
    // const askedList = JSON.parse(sessionStorage.getItem('askedList'))
    // console.log(askedList)

    // const choice = JSON.parse(sessionStorage.getItem('choice'))
    // console.log(choice)

    // const count = JSON.parse(sessionStorage.getItem('count'))

    const result = JSON.parse(sessionStorage.getItem(key))
    return result
    // return [askedList, choice, count]
  }
}

export default Session