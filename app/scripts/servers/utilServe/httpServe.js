export default angular.module('httpServe',[]).factory('httpServe',httpServe).name;
function httpServe($http,$jqLike){
	return{
		get:get,
		post:post,
		upload:upload
	}
	//get请求
	async function get(url,parmas){
		let result=await $http.get(url,$jqLike(parmas));
		return result.data;
	}
	//post请求
	async function post(url,parmas){
		let result=await $http.post(url,$jqLike(parmas));
		return result.data;
	}
	//上传文件
	async function upload(url,parmas){
		let result=await $http.post(url,parmas);
		return result.data;
	}
}
httpServe.$inject=['$http','$httpParamSerializerJQLike'];	