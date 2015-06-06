/**
 * Created by dunght163 on 6/4/15.
 */
(function () {
    'use strict';

    angular.module('myApp.phoneApp.phoneApp-filter', [])
        .filter('checkmark', filterCheckmark);

    function filterCheckmark(input) {
        return input ? '*YES*' : '*NO*'; //or use: (\u2713 -> ✓) or false (\u2718 -> ✘)
    }
})();