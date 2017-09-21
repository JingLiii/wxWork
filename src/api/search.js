// 搜索数据获取数据获取

import {getData} from './config'

export default (params) => {
  const objParams = {
    name: params
  }
  return getData('post', '/home/course_all', objParams)
}
