(function() {
    'use strict';

    angular.module('todoList')
        .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('indigo')
            .warnPalette('red');
        });

})();