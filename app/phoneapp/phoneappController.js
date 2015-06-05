/**
 * Created by dunght163 on 6/1/15.
 */
'use strict';

angular.module('myApp.phoneapp', [
    'ngRoute',
    'phoneappControllers',
    'phoneappFilter'
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/phoneapp', {
                templateUrl: 'phoneapp/templates/phone-list.html',
                controller: 'phoneListController'
            })
            .when('/phoneapp/:phoneId', {
                templateUrl: 'phoneapp/templates/phone-detail.html',
                controller: 'phoneDetailController'
            })
            .otherwise({
                redirectTo: '/phoneapp'
            });
    }]);

var phoneappControllers = angular.module('phoneappControllers', []);


//
var phoneappFilter = angular.module('phoneappFilter', [])
    .filter('checkmark', filterCheckmark);

function filterCheckmark(input) {
    return input ? '*YES*' : '*NO*'; //or use: (\u2713 -> ✓) or false (\u2718 -> ✘)
}
//


phoneappControllers.controller('phoneListController', ['$scope', '$http', phoneListController]);

phoneappControllers.controller('phoneDetailController', ['$scope', '$routeParams', '$http', phoneDetailController]);

function phoneListController($scope, $http) {
    $scope.maxResult = 5;

    $http.get('phoneapp/data/phones/phones.json').success(function (data) {
        $scope.phones = data.slice(0, $scope.maxResult);
    });

    $scope.orderProp = 'name';

    $scope.author = 'dunght163';
};

function phoneDetailController($scope, $routeParams, $http) {
    $scope.phoneId = $routeParams.phoneId;

    $http.get('phoneapp/data/phones/' + $routeParams.phoneId + '.json').success(function (data) {
        $scope.phone = data;
    });
};