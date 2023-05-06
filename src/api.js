
const url = 'https://snaithe.com'
// const url = 'http://176.10.229.252:6001'

export const LoginApi = {
    // login : url + '/admin/login',  // old
    employeLogin : url + '/employee/loginEmployee',
    register : url + '/admin/registerBusiness',
    sendOtp : url + '/admin/sendOtp',
    verifyOtp : url + '/admin/verifyOtp',
    logout : url + '/employee/logoutEmployee',
    getUserData : url + '/employee/getMyAccount'
}