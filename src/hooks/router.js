const beforeEach = (to, from, next) => {
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
