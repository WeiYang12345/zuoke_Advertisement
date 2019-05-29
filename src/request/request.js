import axios from './http';
import QS from 'qs';
// import Md5 from 'js-md5';

let time = Math.round(new Date().getTime() / 1000);
let uid = localStorage.getItem("userId");
let token = localStorage.getItem("token");

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

export function get(src, params) {
    return new Promise((resolve, reject) => {
        axios.get(src, {
            params: params
        })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
    });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} data [请求时携带的参数]
 */

export function lang(src, params) {
    return new Promise((resolve, reject) => {
        axios.post(src, QS.stringify(params),)
            .then(res => {
                // console.log(res)
              resolve(res);
            })
            .catch(err => {
                // console.log(err)
              reject(err)
            })
    });
}
export function post(src, params,) {
    return new Promise((resolve, reject) => {
        axios.post(src, QS.stringify(params),{
            headers: {
                "token": token,
                "uid": uid, 
                "time": time
            },
        })
            .then(res => {
                // console.log(res)
                resolve(res);
            })
            .catch(err => {
                // console.log(err)
                reject(err)
            })
    });
}
