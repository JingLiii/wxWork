// 首页数据获取


// 请求首页数据 '/home'
// 请求课程列表数据  '/home/course_all'
  // 如果点击全部: 传递click_all: true
  // 如果搜索某个专业: 传递name: 专业名称


import {getData} from './config'

export default () => {
  return getData('post', '/home', {})
}
