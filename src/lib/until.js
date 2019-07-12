// 业务有关的
import Cookies from 'js-cookie'
import clonedeep from 'clonedeep'
import { doCustomTimes, objEqual } from './tools'

export const setTitle = (title = 'admin') => {
  window.document.title = title
}
export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
}
export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}
// 将文件列表放入文件夹列表中
export const putFileInFolder = (folderList, fileList) => {
  const folderListCloned = clonedeep(folderList)
  const fileListCloned = clonedeep(fileList)
  return folderListCloned.map(folderItem => {
    const floderId = folderItem.id
    let index = fileListCloned.length
    while (--index >= 0) {
      const fileItem = fileListCloned[index]
      if (fileItem.folder_id === floderId) {
        const file = fileListCloned.splice(index, 1)[0]
        file.title = file.name
        file.type = 'file'
        if (folderItem.children) folderItem.children.push(file)
        else folderItem.children = [file]
      }
    }
    folderItem.type = 'folder'
    return folderItem
  })
}
// 将文件夹放入文件夹中
export const transferFolderToTree = folderList => {
  if (!folderList.length) return []
  const folderListCloned = clonedeep(folderList)
  const handle = id => {
    let arr = []
    folderListCloned.forEach(folder => {
      if (folder.folder_id === id) {
        const children = handle(folder.id)
        if (folder.children) folder.children = [].concat(folder.children, children)
        else folder.children = children
        folder.title = folder.name
        arr.push(folder)
      }
    })
    return arr
  }
  return handle(0)
}

// 展开指定目录
export const expandSpecifiedFolder = (vm, folderTree, id) => {
  return folderTree.map(item => {
    if (item.type === 'folder') {
      if (item.id === id) {
        // item.expand = true
        vm.$set(item, 'expand', true)
      } else {
        if (item.children && item.children.length) {
          item.children = expandSpecifiedFolder(vm, item.children, id)
          if (item.children.some(child => {
            return child.expand === true
          })) {
            // item.expand = true
            vm.$set(item, 'expand', true)
          } else {
            vm.$set(item, 'expand', false)
          }
        }
      }
    }
    return item
  })
}

// 因后端ajax无法无法触发download,必须模拟from表单才能下载
export const downloadFile = ({ url, params }) => {
  // console.log(url, params)
  const form = document.createElement('form')
  form.setAttribute('action', url)
  form.setAttribute('method', 'post')
  for (const key in params) {
    const input = document.createElement('input')
    input.setAttribute('type', 'hidden')
    input.setAttribute('name', key)
    input.setAttribute('value', params[key])
    form.appendChild(input)
  }
  document.body.appendChild(form)
  form.submit()
  form.remove()
}

const routeEqual = (route1, route2) => {
  const params1 = route1.params || {}
  const params2 = route2.params || {}
  const query1 = route1.query || {}
  const query2 = route2.query || {}
  return route1.name === route2.name && objEqual(params1, params2) && objEqual(query1, query2)
}

export const routeHasExist = (tabList, routeItem) => {
  let len = tabList.length
  let res = false
  doCustomTimes(len, (index) => {
    if (routeEqual(tabList[index], routeItem)) res = true
  })
  return res
}

const getKeyValueArr = obj => {
  let arr = []
  //  entries 将对象变成二维数组
  // sort 确定顺序一致
  Object.entries(obj).sort((a, b) => {
    return a[0] - b[0]
  }).forEach(([ _key, _val ]) => {
    arr.push(_key, _val)
  })
  return arr
}
export const getTabNameByRoute = route => {
  const { name, params, query } = route
  let res = name
  if (params && Object.keys(params).length) res += ':' + getKeyValueArr(params).join('_')
  if (query && Object.keys(query).lenth) res += '&' + getKeyValueArr(query).join('_')
  return res
}

const getObjBySolitStr = (id, splitStr) => {
  let splitArr = id.split(splitStr)
  let str = splitArr[splitArr.length - 1]
  let keyValArr = str.split('_')
  let res = {}
  let i = 0
  let len = keyValArr.length
  while (i < len) {
    res[keyValArr[i]] = keyValArr[i + 1]
    i += 2
  }
  return res
}

export const getRouteById = id => {
  let res = {}
  if (id.includes('&')) {
    res.query = getObjBySolitStr(id, '&')
    id = id.split('&')[0]
  }
  if (id.includes(':')) {
    res.params = getObjBySolitStr(id, ':')
    id = id.split(':')[0]
  }
  res.name = id
  return res
}
