(function() {
    'use strict';

    angular
        .module('todoList')
        .directive('todoLogin', todoLogin);

    //todoLogin.$inject = [''];
    function todoLogin() {

        var directive = {
            bindToController: true,
            controller: 'LoginController',
            controllerAs: 'loginCtrl',
            link: link,
            restrict: 'E',
            scope: {
            },
            templateUrl: 'app/views/login/login.html'
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    
})();