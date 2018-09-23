export default {
  user_id: {
    name: '用户',
    type: 'int',
    required: true,
    required_tips: ''
  },
  product_id: {
    name: '产品',
    type: 'int',
    required: true,
    required_tips: ''
  },
  description: {
    name: '描述',
    type: 'string',
    required: true,
    required_tips: '',
    verify: '',
    verify_tips: '',
    filter: ''
  },
  avatar: {
    name: '图片',
    type: 'images',
    width: 100,
    height: 100
  },
  voice: {
    name: '录音',
    type: 'audio',
    duration: 60
  }
}
