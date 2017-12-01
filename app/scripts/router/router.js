import login from './../../views/login/login.html';
export default function routing($urlRouterProvider, $stateProvider,RestangularProvider){
    //Restangular拦截失败的请求，如果返回状态为 0 时，则表示session超时，跳至登陆界面。
    RestangularProvider.setErrorInterceptor(function(response, deferred, responseHandler){
        if(response.status == 302){
            window.location=response.data;
            return false;
        }
        return true;
    });
    //请求头添加TOKEN
    RestangularProvider.setDefaultHeaders({token: "x-restangular"});
    //请求拦截
    RestangularProvider.setRequestInterceptor(function(element, operation, route, url){
        return element;
    });
    //请求响应
    RestangularProvider.setResponseExtractor(function(response, operation) {
        return response;
    });
    //登录
    $urlRouterProvider.otherwise('/login');
    $stateProvider.state('login', {
        url: '/login',
        views: {
            'view': {
                template:login,
                controller:'loginController'
            }
        }
    });
}
routing.$inject = ['$urlRouterProvider','$stateProvider','RestangularProvider'];