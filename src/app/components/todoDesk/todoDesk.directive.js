(function() {
    'use strict';

    angular
        .module('todoList')
        .directive('todoDesk', todoDesk);

    //Directive.$inject = ['dependency1'];
    function todoDesk() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: 'DeskController',
            controllerAs: 'deskCtrl',
            link: link,
            restrict: 'E',
            scope: {
            },
            templateUrl: "app/components/todoDesk/todo-desk.html",
            css: "app/components/todoDesk/todo-desk.css"
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    
})();