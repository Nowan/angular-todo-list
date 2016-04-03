(function() {
'use strict';

    angular
        .module('todoList')
        .controller('DeskController', DeskController);

    DeskController.$inject = ['firebaseService'];
    function DeskController(firebaseService) {
        var vm = this;
        
        vm.tasks = firebaseService.tasks;
        vm.completeTask = function(task){
            task.isCompleted = !task.isCompleted;
            firebaseService.saveTask(task);
        };
    }
})();