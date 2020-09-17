class Session {
  static storeSession(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  }

  static searchSession() {
    const askedList = JSON.parse(sessionStorage.getItem('askedList'))
    console.log(askedList)

    const choice = JSON.parse(sessionStorage.getItem('choice'))
    console.log(choice)

    return [askedList, choice]
  }
}

export default Session