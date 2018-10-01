<template lang='pug'>
  page
    search(:data='searchData' :checked='picked' @onchecked='handleOnPicked')
    group-list(:data='groupData' :checked='picked' style='margin-top: 56px; margin-bottom: 20px;' @onchecked='handleOnPicked')
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('ProductPicker')

export default {
  computed: {
    ...mapState(['picked', 'srcData']),
    groupData () {
      let srcData = this.srcData
      let groupData = []
      let cnPathName = ''
      srcData.forEach(data => {
        if (data.children && data.children.length) {
          data.children.forEach(childData => {
            cnPathName = data.name + '/' + childData.name
            childData.cnPathName = cnPathName
          })
        } else {
          cnPathName = data.name
          data.cnPathName = cnPathName
        }
        groupData.push(data)
      })

      return groupData
    },
    searchData () {
      let groupData = this.groupData
      let searchData = []
      groupData.forEach(data => {
        if (data.children && data.children.length) {
          searchData = searchData.concat(data.children)
        } else {
          searchData.push(data)
        }
      })
      return searchData
    }
  },
  methods: {
    ...mapMutations({ changePicked: 'CHANGE_PICKED' }),
    handleOnPicked (item) {
      let picked = this.picked
      if (picked && picked.id && item.id === picked.id) {
        this.changePicked(false)
      } else {
        this.changePicked(item)
      }
      if (this.picked) {
        this.$router && this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="scss">
@import 'style/var/_color.scss';
@import 'style/var/_size.scss';
@import 'style/var/_font.scss';
@import 'style/mixin/_size.scss';
@import 'style/mixin/_arrow.scss';
@import 'style/mixin/_clearfix.scss';
@import 'style/extend/_layout.scss';

</style>
