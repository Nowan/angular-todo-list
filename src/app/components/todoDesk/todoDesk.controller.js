(function() {
'use strict';

    angular
        .module('todoList')
        .controller('DeskController', DeskController);

    DeskController.$inject = ['todoService'];
    function DeskController(todoService) {
        var vm = this;
        
        vm.tasks = todoService.tasks;
        vm.completeTask = function(task){
            task.isCompleted = !task.isCompleted;
            todoService.saveTask(task);
        };
    }
})();