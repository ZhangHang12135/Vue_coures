// 业务有关的
import Cookies from 'js-cookie'
import clonedeep from 'clonedeep'
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
// export const expandSpecifiedFolder = (folderTree, id) => {
//   return folderTree.map(item => {
//     if (item.type === 'folder') {
//       if (item.id === id) {
//         item.expand = true
//       } else {
//         if (item.children && item.children.length) {
//           item.children = expandSpecifiedFolder(item.children, id)
//           if (item.children.some(child => {
//             return child.expand === true
//           })) {
//             item.expand = true
//           } else {
//             item.expand = false
//           }
//         }
//       }
//     }
//     return item
//   })
// }
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
