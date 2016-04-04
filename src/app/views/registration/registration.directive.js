(function() {
    'use strict';

    angular
        .module('todoList')
        .directive('todoRegistration', todoRegistration);

    //todoLogin.$inject = [''];
    function todoRegistration() {

        var directive = {
            bindToController: true,
            controller: 'RegistrationController',
            controllerAs: 'registrationCtrl',
            link: link,
            restrict: 'E',
            scope: {
            },
            templateUrl: 'app/views/registration/registration.html'
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    
})();