import localStorage from 'utils/localStorage'
import auth from '@/services/auth'

const beforeEach = (to, from, next) => {
  auth.set(to.query)
  const _to = to.path
  const _from = from.path
  const h = localStorage.get(_to)
  if ((h && h.history) || (_from && _from.indexOf(_to) === 0)) {
    document.getElementById('app').className = 'transition-reverse'
    h.history = false
    localStorage.set(_to, h)
  } else {
    localStorage.set(_from, {
      history: true
    })
    document.getElementById('app').className = ''
  }
  next()
}

const afterEach = (to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
}

export {
  beforeEach,
  afterEach
}
