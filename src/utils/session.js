// const tokenAdmin = "adminToken";

export function setToken(value){
    sessionStorage.setItem('adminToken',value)
}
export function getToken(value){
   return sessionStorage.getItem('adminToken',value)
}