// 请求课程列表
// 阅读后, 为这个课程提交阅读量
import {getData} from './config'

export default (courseId) => {
  return getData('post', '/home/read', {
    id: courseId
  })
}