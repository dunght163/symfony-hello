/**
 * Created by dunght163 on 6/1/15.
 */
'use strict';

angular.module('myApp.phoneapp', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/phoneapp', {
            templateUrl: 'phoneapp/phoneapp.html',
            controller: 'phoneappController'
        });
    }])

    .controller('phoneappController', phoneappController);

function phoneappController($scope, $http) {
    $scope.maxResult = 5;

    $http.get('phoneapp/phones.json').success(function(data){
        $scope.phones = data.slice(0, $scope.maxResult);
    });

    $scope.orderProp = 'name';

    $scope.author = 'dunght163';
};