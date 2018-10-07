import feedback from './feedback'

export default {
  product_id: {
    name: '产品',
    type: 'int',
    input: 'ProductPicker',
    required: true,
    required_tips: ''
  },
  machine_sn: {
    name: '机台编号',
    type: 'string',
    input: 'Text',
    required: true,
    required_tips: ''
  },
  ...feedback
}
