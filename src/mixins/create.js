import validator from '@/models/validator'
import maker from '@/models/maker'

export default {
  data () {
    return {
      validator: null
      form: null
    }
  },
  created() {
    this.validator = new validator(this.model)
    this.$set(this, 'form', new maker(this.model).make())
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
