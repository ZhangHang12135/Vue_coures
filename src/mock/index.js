import Mock from 'mockjs'
import { getUserInfo } from './response/user'
Mock.mock(/\/getUserInfo/, 'post', getUserInfo)

const Random = Mock.Random

Mock.setup({
  timeout: 1000
})

Random.extend({
  fruit () {
    const fruits = ['apple', 'orange', 'lenon']
    return this.pick(fruits)
  }
})

export default Mock
