angular.module('directive-Lecture').directive('testDir',function () {
    return{
        templateUrl: './testDir.html',
        restrict:'E',
        scope:{
             name: '=myName'
        }

    }
});
