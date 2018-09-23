import Validator from '@/models/validator'
import Maker from '@/models/maker'

export default {
  data () {
    return {
      validator: null,
      form: null
    }
  },
  created () {
    this.validator = new Validator(this.model)
    this.$set(this, 'form', new Maker(this.model).make())
  },
  methods: {
    verify () {
      return this.validator.unvalid(this.form)
    },
    async submit () {
      let res = await this.createApi(this.form)
      return res
    }
  }
}
