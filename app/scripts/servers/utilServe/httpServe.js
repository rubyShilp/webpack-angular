export default angular.module('httpServe',[]).factory('httpServe',httpServe).name;
function httpServe(Restangular){
	return{
		get:get,
		post:post,
		upload:upload
	}
	//get请求
	function get(url,parmas){
		return Restangular.one(url).get(parmas)
	}
	//post请求
	function post(url,parmas){
		return Restangular.all(url).post(parmas);
	}
	function upload(url,parmas){
		return Restangular.all(url,{'Content-Type':'multipart/form-data'}).post(parmas);
	}
}
httpServe.$inject=['Restangular'];	