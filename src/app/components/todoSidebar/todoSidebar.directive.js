(function() {
    'use strict';

    angular
        .module('todoList')
        .directive('todoSidebar', todoSidebar);

    //Directive.$inject = ['dependency1'];
    function todoSidebar() {
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
            templateUrl: "app/components/todoSidebar/todo-sidebar.html"
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    
})();