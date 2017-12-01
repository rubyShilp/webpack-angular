
export default angular.module('loginServe',[]).service('loginServe',loginServe).name;
function loginServe(httpServe){
    function login(){
        this.userName='liush@fadada.com',
        this.password='';
    }
    login.prototype={
        login:(user)=>{
            let params={userName:user.userName,password:user.password};
            httpServe.post('login',params).then(res=>{
                console.log(res);
            })
        }
    }
    return login;
}
loginServe.$inject=['httpServe']