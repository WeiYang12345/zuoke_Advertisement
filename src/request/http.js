import Axios from 'axios';

// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

Axios.interceptors.request.use(
  // config => {
  //   if (token) { 
  //     config.headers.Authorization = token;
  //   }
  //   return config;
  // },
  // err => {
  //   return Promise.reject(err);
  // }
);
Axios.interceptors.response.use( 
 response => {  
  if (response.status === 200) {   
   return Promise.resolve(response);  
  } else {   
   return Promise.reject('error',response);  
  } 
 },
 // 服务器状态码不是200的情况 
 error => {  
   return Promise.reject('err',error);   
 }
);

export default Axios;