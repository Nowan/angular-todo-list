(function() {
    'use strict';

    angular
        .module('todoList')
        .directive('todoProfile', todoProfile);

    //Directive.$inject = ['dependency1'];
    function todoProfile() {
        var directive = {
            bindToController: true,
            controller: 'ProfileController',
            controllerAs: 'profileCtrl',
            link: link,
            restrict: 'E',
            scope: {
            },
            templateUrl: 'app/views/profile/profile.html'
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    
})();