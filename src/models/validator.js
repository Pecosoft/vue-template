export default class Validator {
  constructor(model) {
    this.model = model
  }

  toString() {
    let model = this.model
    let str = ''
    for (let field in model) {
      let fieldVal = model[field]
      str += fieldVal.name + ':'  + field + ',' + fieldVal.type + '\n'
    }
    return str
  }

  unvalidField (field, iv, mo) {
    if (mo.required && !iv) {
      return { field, tips: mo.required_tips }
    }
    if (mo.verify && !mo.verify.test(iv)) {
      return { field, tips: mo.verify_tips }
    }
    return false
  }

  unvalid (input) {
    let model = this.model
    let fields = Object.keys(model)
    let unvalidField = this.unvalidField
    let unvalids = []
    for (let field of fields) {
      let unvalidTips = unvalidField(field, input[field], model[field])
      if (unvalidTips) {
        unvalids.push(unvalidTips)
      }
    }

    return unvalids.length ? unvalids : false
  }
}
