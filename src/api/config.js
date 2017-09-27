// API接口文档的配置数据
// 如果点击全部: : true
// 没有点击全部: clickAll(默认值): false

// 请求首页数据 '/home'
// 请求课程列表数据  '/home/course_all'
  // 如果点击全部: 传递click_all: true
  // 如果搜索某个专业: 传递name: 专业名称

import axios from 'axios'
import QS from 'qs'

// 默认参数
export  const defaultParams = {
  // 默认没有点击全部按钮
  // clickAll: false
}

// 返回接受成功参数
export const infoParams = {
  STATUS_OK: 200,
  MSG_OK: 'SUCCESS',
  MSG_NOTFIND_COURSE: '您搜索的课程不存在'
}

// 请求地址
const IP = 'http://yitihua.org/xuezhang360/routine'

// 请求函数
export function getData(getType, url, params) {
  url = IP + url
  params = QS.stringify(Object.assign({}, defaultParams, params))
  
  return axios[getType](url, params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}