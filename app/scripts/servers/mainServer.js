import httpServe from './utilServe/httpServe';
import loginServe from './loginServe/loginServe';
export default angular.module('servers',[httpServe,loginServe]).name;
