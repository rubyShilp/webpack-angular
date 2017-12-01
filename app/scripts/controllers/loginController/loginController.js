
/**
 * @ngdoc function
 * @name app.controller:loginController
 * @description
 * # loginController
 * Controller of the security
 */
'use strict';
export default angular.module('loginController',[]).controller('loginController',loginController).name;
function loginController($scope,loginServe){
    $scope.user=new loginServe();
}
loginController.$inject=['$scope','loginServe'];