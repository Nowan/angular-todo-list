(function() {
    'use strict';

    angular.module('todoList')
        .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue', {
                'default': '600', // by default use shade 400 from the pink palette for primary intentions
                'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
                'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
                'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
            })
            .accentPalette('indigo')
            .warnPalette('pink');
        });

})();