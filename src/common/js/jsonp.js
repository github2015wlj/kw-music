import originJsonp from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
//encodeURIComponent:
//encodeURIComponent不会编码的字符: ~!*()’
//encodeURIComponent方法在编码单个URIComponent（指请求参数）应当是最常用的。需要注意到是字符’也是URI中的合法字符，所以也不会被编码转换。
//var url = 'http://www.css88.com/?s=前端; 
// encodeURIComponent
//results.push('encodeURIComponent: ' + encodeURIComponent(url)); 
 
/*
results结果：
"encodeURIComponent: http%3A%2F%2Fwww.css88.com%2F%3Fs%3D%E5%89%8D%E7%AB%AF" 
*/