class Session {
  static storeSession(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  }

  static searchSession(key) {
    const result = JSON.parse(sessionStorage.getItem(key))
    return result
  }
}

export default Session