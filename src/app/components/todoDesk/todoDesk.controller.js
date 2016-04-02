(function() {
'use strict';

    angular
        .module('todoList')
        .controller('DeskController', DeskController);

    DeskController.$inject = ['todoService'];
    function DeskController(todoService) {
        var vm = this;
        
        vm.tasks = todoService.tasks;
    }
})();