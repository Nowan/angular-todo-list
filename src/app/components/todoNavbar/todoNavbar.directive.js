(function() {
    'use strict';

    angular
        .module('todoList')
        .directive('todoNavbar', todoNavbar);

    //Directive.$inject = ['dependency1'];
    function todoNavbar() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: 'MainController',
            controllerAs: 'mainCtrl',
            link: link,
            restrict: 'E',
            scope: {
            },
            templateUrl: "app/components/todoNavbar/todo-navbar.html"
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    
})();