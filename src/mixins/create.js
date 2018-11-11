import Validator from '@/models/validator'
import Maker from '@/models/maker'
import * as resources from '@/services/resources'
import Rest from '@/services/rest'

export default {
  props: ['title', 'btnText', 'model', 'resourceName', 'storeModule'],
  data () {
    return {
      loading: false,
      validator: null,
      formData: null,
      rest: null
    }
  },
  created () {
    this.validator = new Validator(this.model)
    let resourceName = this.resourceName
    if (resourceName) {
      let resource = resources[resourceName]
      if (resource) this.rest = new Rest(resource)
    }
    let storeModule = this.storeModule
    let formValid = false
    if (storeModule) {
      let module = this.$store.state[storeModule]
      if (module) {
        let form = this.$store.state[storeModule][this.formName || 'form']
        if (form) {
          formValid = true
          this.formData = Object.assign({}, form)
        }
      }
    }
    if (!formValid) {
      this.$set(this, 'formData', new Maker(this.model).make())
    }
  },
  methods: {
    reset () {
      let storeModule = this.storeModule
      if (storeModule) {
        this.$store.commit(storeModule + '/CHANGE', new Maker(this.model).make())
      }
    },
    handleOnModelInput (e) {
      let storeModule = this.storeModule
      if (storeModule) {
        this.$store.commit(storeModule + '/CHANGE', e)
      }
    },
    verify () {
      return this.validator.unvalid(this.formData)
    },
    async submit () {
      if (!this.rest) {
        if (!this.resourceName) {
          console.error('未配置资源')
          return Promise.reject(new Error('未配置资源'))
        }
        console.error('找不到这个资源:%s', this.resourceName)
        return Promise.reject(new Error('找不到这个资源:' + this.resourceName))
      }

      let verify = this.verify()
      if (this.verify()) {
        return Promise.reject(verify)
      }

      this.loading = true
      this.formData.user_id = this.$store.state.user.user.user_id
      let res = await this.rest.create(this.formData)
      this.loading = false
      return res
    }
  }
}
