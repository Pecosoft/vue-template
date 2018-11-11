export default {
  product_id: {
    name: '产品',
    type: 'int',
    input: 'ProductPicker',
    required: true,
    required_tips: ''
  },
  description: {
    name: '描述',
    type: 'string',
    input: 'Textarea',
    rows: 10,
    required: true,
    required_tips: '',
    verify: '',
    verify_tips: '',
    filter: ''
  },
  avatar: {
    name: '图片',
    type: 'images',
    input: 'WxImagesPicker',
    width: 100,
    height: 100
  },
  voice: {
    name: '录音',
    type: 'audio',
    input: 'WxVoiceRecoder',
    duration: 60
  }
}
