(function() {
    'use strict';

    angular
        .module('todoList')
        .directive('todoDeskItem', todoDeskItem);

    //Directive.$inject = ['dependency1'];
    function todoDeskItem() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'E',
            scope: {
            },
            templateUrl: "app/components/todoDesk/todoDeskItem/todo-desk-item.html",
            css: "app/components/todoDesk/todoDeskItem/todo-desk-item.css"
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    
})();