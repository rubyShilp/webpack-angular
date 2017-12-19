export default angular.module('interceptorServer',[]).factory('interceptorServer',interceptorServer).name;
function interceptorServer($q){
	return {
        request:request,//请求拦截
        requestError:requestError,//拦截错误请求
        response:response,//拦截成功响应
        responseError:responseError//拦截失败响应
    }
    //请求拦截
    function request(config){
        if(typeof(config.data)==='object'){
            config.headers={'Content-Type':'multipart/form-data'};
        }else{
            config.headers={'Content-Type':'application/x-www-form-urlencoded'};
        }
        return config ||  $q.when(config);
    }
    //拦截错误请求
    function requestError(rejection){
        return $q.reject(rejection);
    }
    //拦截成功响应
    function response(response){
        if(response.data.result==='fail'){
            alert(response.data.msg);
        }
        return response || $q.when(reponse);
    }
    //拦截失败响应
    function responseError(rejection){
        if(rejection.status===404){
            alert(404);
        }else if(rejection.status===500){
            alert(500);
        }
        return $q.reject(rejection);
    }
}
interceptorServer.$inject=['$q'];	