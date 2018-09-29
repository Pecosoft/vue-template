<template lang='pug'>
  page
    search(:data='searchData' :checked-id='checkedId')
    group-list(:data='groupData' :checked-id='checkedId' style='margin-top: 66px')
</template>

<script>
// import picker from '@/mixins/picker'

export default {
  // mixins: [picker]
  data () {
    return {
      checkedId: 5,
      groupData: [
        {
          id: 1,
          name: 'A',
          children: [
            {
              id: 5,
              name: 'aasdf'
            },
            {
              id: 12,
              name: 'sdfasdf'
            }
          ]
        },
        {
          id: 2,
          name: 'B',
          children: [
            {
              id: 21,
              name: 'aassssdf'
            }
          ]
        }
      ],
      searchData: [
        { id: 1, name: '张三' },
        { id: 2, name: '李四' },
        { id: 3, name: '王老五' },
        { id: 4, name: '刘老二' },
        { id: 5, name: '马老大' },
        { id: 6, name: '马老二' },
        { id: 7, name: '马老三' }
      ]
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
