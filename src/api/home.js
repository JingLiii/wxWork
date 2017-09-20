// 首页数据获取

import axios from 'axios'
import {IP, defaultParams} from './config'

const url =  IP + '/home'
let params = Object.assign({}, defaultParams, {
  info: '无参数'
})

// import Mock from 'mockjs'
// Mock.mock(url, 'post', {
//   data: {
//     info: 'We are success'
//   }
// })


export default function () {
  return axios.post(url, params)
}