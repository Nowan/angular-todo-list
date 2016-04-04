(function() {
    'use strict';

    angular
        .module('todoList')
        .directive('todoTasks', todoTasks);

    //todoTasks.$inject = ['dependency1'];
    function todoTasks() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'E',
            scope: {
            },
            templateUrl: 'app/views/tasks/tasks.html'
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    
})();