export default class Maker {
  constructor(model) {
    this.model = model
  }

  make (_generator) {
    let model = this.model
    let fields = Object.keys(model)
    let modelData = {}
    let generator = typeof _generator === 'function' ? _generator : type => {
      switch (type) {
        case 'int':
          return 0
        case 'string':
          return ''
        default:
          return null
      }
    }
    for (let field of fields) {
      modelData[field] = generator(model[field].type)
    }
    return modelData
  }
}
