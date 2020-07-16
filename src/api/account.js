import service from "../utils/request";

// 登录接口
export function login(data) {
    return service.request({
        url: "/wintercamplogin?client=ds",
        method: "post",
        data: data,//请求类型为post时;
        //params:data//请求类型为get时;
    })
}
//获取销售点
export function getSalepoint(data){
    return service.request({
        url:"/WinterCamp/getSPPoints?client=ds",
        method:"post",
        data:data,
    })
}