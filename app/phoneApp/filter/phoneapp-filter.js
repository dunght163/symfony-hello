/**
 * Created by dunght163 on 6/4/15.
 */
(function () {
    'use strict';

    angular.module('myApp.phoneApp.phoneApp-filter', [])
        .filter('reverse', function () {
            return function (input, uppercase) {
                input = input || '';
                var out = "";
                for (var i = 0; i < input.length; i++) {
                    out = input.charAt(i) + out;
                }
                // conditional based on optional argument
                if (uppercase) {
                    out = out.toUpperCase();
                }
                return out;
            };
        })

        .filter('checkMark', function () {
            return filterCheckMark;
        });

    function filterCheckMark(input) {
        return input ? '\u2713' : '\u2718'; //(\u2713 -> ✓) or false (\u2718 -> ✘)
    }
})();