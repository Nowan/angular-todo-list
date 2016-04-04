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
            controller: 'NavbarController',
            controllerAs: 'navbarCtrl',
            link: link,
            restrict: 'E',
            scope: {
            },
            templateUrl: "app/components/todoNavbar/todo-navbar.html",
            css: "app/components/todoNavbar/todo-navbar.css"
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    
})();