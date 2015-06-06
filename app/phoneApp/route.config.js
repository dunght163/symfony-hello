/**
 * Created by dunght163 on 6/5/15.
 */
(function () {
    'use strict';

    angular.module('myApp.phoneApp.route-config', [
        'ngRoute',
        'myApp.phoneApp.phoneApp-controllers'
    ])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/phoneApp', {
                    templateUrl: '/app/phoneApp/templates/phone-list.html',
                    controller: 'phone-list-controller'
                })
                .when('/phoneApp/:phoneId', {
                    templateUrl: '/app/phoneApp/templates/phone-detail.html',
                    controller: 'phone-detail-controller'
                })
                .otherwise({
                    redirectTo: '/phoneApp'
                });
        }]);


})();