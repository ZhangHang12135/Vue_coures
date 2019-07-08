import Mock from 'mockjs'
import { getUserInfo } from './response/user'
import { getTableData, getFileList, getFolderList } from './response/data'
Mock.mock(/\/getUserInfo/, 'post', getUserInfo)
Mock.mock(/\/getTableData/, 'post', getTableData)
Mock.mock(/\/getFileList/, 'get', getFileList)
Mock.mock(/\/getFolderList/, 'get', getFolderList)

// const Random = Mock.Random

// 延迟请求
// Mock.setup({
//   timeout: 1000
// })

// 自定义扩展
// Random.extend({
//   fruit () {
//     const fruits = ['apple', 'orange', 'lenon']
//     return this.pick(fruits)
//   }
// })

export default Mock
