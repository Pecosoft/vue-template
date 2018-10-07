export default {
  user_id: {
    name: '用户',
    type: 'int',
    input: false,
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
  contact: {
    name: '联系方式',
    type: 'string',
    input: 'Text',
    required: true,
    verify: '',
    verify_tips: ''
  }
}
