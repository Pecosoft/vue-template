<template lang="pug">
page
  p-group
    p-text(:disabled='loading' v-model='company' icon='company' placeholder='请输入公司名称')
    p-text(:disabled='loading' v-model='contact_name' icon='account' placeholder='请输入联系人姓名')
    p-text(:disabled='loading' v-model='contact_mobile' icon='mobile' placeholder='请输入联系人手机号')
    p-multi(icon='location')
      p-select(:disabled='loading' @click.native='handleOnClickSelectArea' v-model='province_city_area_labels' placeholder='请选择省市区')
      p-text(:disabled='loading' v-model='address' placeholder='具体位置')
    p-select(:disabled='loading' @click.native='handleOnClickSelectUserCate' v-model='user_cate_labels' icon='user_cate' placeholder='请选择用户类型')
  btn-area
    btn-primary(:loading='loading' @click.native='handleOnSubmit') 保存
  popup-picker(ref='PCAPicker' style="max-width: 100%; display: none;" cancel-text="取消" confirm-text="确认" :show.sync="showAreaPicker" :columns="3" :show-cell="false" title="选择省市区" :data="province_city_areas" v-model="province_city_area" @on-change="handleOnChangeArea")
  popup-picker(style="max-width: 100%; display: none;" cancel-text="取消" confirm-text="确认" :show.sync="showUserCatePicker" :columns="1" :show-cell="false" title="选择用户类型" :data="user_cates" v-model="user_cate" @on-change="handleOnChangeUserCate")
</template>

<script>
/* eslint-disable */
import PGroup from 'components/Form/group'
import PText from 'components/Form/text'
import PSelect from 'components/Form/select'
import PMulti from 'components/Form/multi'
import PMultiRow from 'components/Form/multirow'
import { PopupPicker } from 'vux'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    PGroup,
    PText,
    PSelect,
    PMulti,
    PMultiRow,
    PopupPicker
  },
  data () {
    return {
      loading: false,
      company: '',
      contact_name: '',
      contact_mobile: '',
      province_city_area: [],
      province_city_area_labels: [],
      address: '',
      user_cates: [ { name: '用户', value: '0' }, { name: '代理', value: '1' } ],
      user_cate: [ '0' ],
      user_cate_labels: [ { label: '用户' } ],
      showAreaPicker: false,
      showUserCatePicker: false
    }
  },
  computed: {
    ...mapState('opendata', ['province_city_areas']),
    ...mapState('user', ['user'])
  },
  methods: {
    ...mapActions('opendata', ['provinceCityArea']),
    ...mapActions('user', ['read', 'login', 'register', 'saveProfile']),
    handleOnClickSelectArea () {
      if (this.loading) return
      this.showAreaPicker = true
    },
    handleOnClickSelectUserCate () {
      if (this.loading) return
      this.showUserCatePicker = true
    },
    handleOnChangeArea (v) {
      let labels = this.$refs.PCAPicker.getNameValues(v).split(' ')
      let province_city_area_labels = [{ label: labels[0] }, { label: labels[1] }, { label: labels[2] }]
      this.province_city_area_labels = province_city_area_labels
    },
    handleOnChangeUserCate (v) {
      let user_cate_labels = [{ label: v[0] == 0 ? '用户' : '代理' }]
      console.log(user_cate_labels)
      this.user_cate_labels = user_cate_labels
    },
    handleOnSubmit () {
      if (this.loading) return
      let { company, contact_name, contact_mobile, province_city_area, address, user_cate } = this
      company = company.trim()
      contact_name = contact_name.trim()
      contact_mobile = contact_mobile.trim()
      address = address.trim()
      this.company = company
      this.contact_name = contact_name
      this.contact_mobile = contact_mobile
      this.address = address
      if (!company || !contact_name || !address) {
        return this.$vux.alert.show({
          title: '公司 联系人 地址不能留空',
          content: '请填写完整信息'
        })
      }
      if (!/^1[3578]{1}[0-9]{9}$/.test(contact_mobile)) {
        return this.$vux.alert.show({
          title: '手机号码无法识别',
          content: '请正确填写手机号码'
        })
      }
      if (!province_city_area || province_city_area.length !== 3) {
        return this.$vux.alert.show({
          title: '省市区未选择',
          content: '请选择公司所在省市区'
        })
      }
      this.loading = true
      let formData = {
        company,
        contact_name,
        contact_mobile,
        provinceid: province_city_area[0],
        cityid: province_city_area[1],
        areaid: province_city_area[2],
        address,
        user_cate: user_cate[0]
      }
      this.saveProfile(formData).then(_ => {
        this.loading = false
        this.$peco.toast.show('保存成功')
        this.read(true).then(res => {
          this.$router.go(-1)
        })
      }).catch(error => {
        this.loading = false
      })
    }
  },
  mounted () {
    this.$peco.loading.show()
    this.provinceCityArea().then(_ => {
      this.$nextTick(_ => {
        // 初始化默认数据
        this.read().then(_ => {
          let user = this.user
          let customer = user.customer || null
          let company = customer && customer.company ? customer.company : null

          if (customer) {
            this.contact_name = customer.name
            this.contact_mobile = customer.mobile
            this.user_cate[0] = String(customer.cate)
            if (this.user_cate[0] == '0') {
              this.user_cate_labels = [ { label: '用户' } ]
            } else {
              this.user_cate_labels = [ { label: '代理' } ]
            }
          } else {
            this.contact_name = user.name
            this.contact_mobile = user.mobile
          }
          if (company) {
            this.company = company.name
            if (company.provinceid && company.cityid && company.areaid) {
              this.province_city_area = [company.provinceid, company.cityid, company.areaid]
              this.address = company.address
              let province_city_area_labels = [{ label: company.province }, { label: company.city }, { label: company.area }]
              this.province_city_area_labels = province_city_area_labels
            }
          }
          this.$peco.loading.hide()
        })
      })
    })
  }
}
</script>
