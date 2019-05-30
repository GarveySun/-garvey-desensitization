const expect = require('chai').expect;
const fieldName = require('../src/name.js')

const types = [1,2,3]
// 测试case
const cases = [
  {
    name: '两字名',
    in: '张三',
    out: ['张*', '*三', '张*']
  },
  {
    name: '三字名',
    in: '张三丰',
    out: ['张**', '*三丰', '张*丰']
  }
]

describe('fieldName', function () {

  cases.forEach(ca=>{
    types.forEach(type=>{
      it(ca.name+' 类型'+type,function(){
        expect(fieldName(ca.in, type)).to.equal(ca.out[type-1])
      })
    })
  })


})
