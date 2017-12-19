import httpServe from './utilServe/httpServe';
import interceptorServer from './utilServe/interceptorServer';
import loginServe from './loginServe/loginServe';
export default angular.module('servers',[httpServe,interceptorServer,loginServe]).name;
