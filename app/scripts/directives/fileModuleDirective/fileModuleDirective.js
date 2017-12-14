'use strict';
export default angular.module('fileDirective',[]).directive('fileModel',fileDirective).name;
function fileDirective(){
    return {
        scope: {
            fileModel: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                scope.$apply(function () {
                    scope.fileModel = changeEvent.target.files[0];
                });
            });
        }
    } 
}