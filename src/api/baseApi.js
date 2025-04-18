const baseUrl = location.hostname
console.log(baseUrl, 'baseUrl');

let baseApi
let baseApiNotAdmin
let basePcd
switch (baseUrl) {
    case '127.0.0.1':
    case 'localhost':
        // 开发环境使用代理
        baseApi = 'https://testoms.cangmishu.com/api/'
        baseApiNotAdmin = 'https://testoms.cangmishu.com/api/'
        basePcd = 'https://test-api.cangmishu.com'
        break
    default:
        baseApi = '/api/'
        baseApiNotAdmin = '/api/'
        basePcd = 'https://test-api.cangmishu.com'
        break
}
export {
    baseApiNotAdmin,
    basePcd
}
export default baseApi