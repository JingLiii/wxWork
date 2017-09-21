// 首页数据获取

import {getData} from './config'

export default () => {
  return getData('post', './home', {})
}