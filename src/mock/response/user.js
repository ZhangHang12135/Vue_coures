import Mock from 'mockjs'

const Random = Mock.Random
export const getUserInfo = (options) => {
  // console.log('mock拦截: ', options)
  // return {
  //   name: 'wangleba '
  // }
  const template = {
    // 'name|2-5': 'I love you -',
    // 'str|3': 'Z',
    // 'number|3-18': 0,
    // 'float|2-5.2-5': 0,
    // 'bool|1': true,
    // 'booleran|1-9': false,
    // 'obj|2': {
    //   a: '11',
    //   b: '22',
    //   c: '233'
    // },
    // 'obj|1-2': {
    //   a: '11',
    //   b: '22',
    //   c: '233'
    // },
    // 'arr1|1': [1, 2, 3, 4, 5, 6],
    // 'arr2|2': [1, 2, 3, 4, 5, 6],
    // 'arr3|+1': [1, 2, 3, 4, 5, 6],
    // 'arr4|2-4': [1, 2, 3, 4, 5, 6]
    email: Random.email(),
    email2: Mock.mock('@email'),
    cname: Random.cname(),
    date: Random.date('yyyy-mm-dd'),
    time: Random.time('hh:mm:ss a'),
    datetime: Random.datetime('yyyy-mm-dd hh:mm:ss'),
    nowtime: Random.now('minute', 'yyyy-MM-dd a hh:mm'),
    url: Random.image('500x400', '#ccaa55', '#00ff00', 'png', 'MOONMovie'),
    img_base64: Random.dataImage(),
    color: Random.color(),
    paragaph: Random.paragraph(1, 3),
    cpargaph: Random.cparagraph(1, 3),
    title: Random.title(),
    address: Random.region() + Random.province() + Random.city(),
    fruit: Random.fruit()
  }
  return Mock.mock(template)
}
export const login = () => {
  return {
    code: 200,
    data: {
      token: 'xxx'
    },
    mes: ''
  }
}
export const authorization = () => {
  return {
    code: 200,
    data: {
      token: 'xxx',
      rules: {
        page: {
          home: true,
          home_index: true,
          about: true,
          argu: true,
          count_to: true,
          menu_page: true,
          upload: true,
          form: false,
          folder_tree: true,
          table_page: true,
          render_page: true,
          split_pane: true,
          parent: true,
          child: true,
          name_view: true,
          store: true,
          main: true,
          icon_page: true
        },
        component: {
          edit_button: true,
          publish_button: false
        }
      }
    },
    mes: ''
  }
}
