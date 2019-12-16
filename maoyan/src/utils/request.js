import axios from "axios";

const server = axios.create({
    timeout:5000,
    withCredentials:true
})

//响应拦截

server.interceptors.request.use((config)=>{
    if(config.method == 'get'){
        config.params = {...config.data}
    }

    // config.headers["content-type"] = "application/json"
},(err)=>{
    Promise.reject(err);
})

server.interceptors.response.use((res)=>{
    if(res.states == 200){
        return res.data
    }
})


export default server