(function() {
'use strict';

    angular
        .module('todoList')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['todoService'];
    function SidebarController(todoService) {
        var vm = this;
        
        vm.clearAll = function(){ todoService.clearAll(); };
        vm.clearDone = function(){ todoService.clearDone(); };
        vm.addTask = function() {
                var task = {};
                task.title = "test";
                task.notes = "notes";
                task.isCompleted = false;
                //task contains title and notes 
                //add task to the array
                todoService.addTask(task);
            };
    }
})();