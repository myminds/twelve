export const isLogin=()=>{
   let token= localStorage.getItem("token")
    return token?true:false
}

export const isLogout=(loggedout)=>{
    localStorage.removeItem("token");
    loggedout()
 }