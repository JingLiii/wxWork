export function toArray(obj) {
  if (!obj.length) return
  const length = obj.length
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push(obj[i])
  }
  return arr
}