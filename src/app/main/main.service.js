(function() {
'use strict';

    angular
        .module('todoList')
        .service('todoService', todoService);

    //Service.$inject = ['dependency1'];
    function todoService() {
        var service = this;
        
        //array of all services
        service.tasks = [];
        
        service.addTask = addTask;
        
        //adds task to the base
        function addTask(task){
            task.isCompleted = false;
            service.tasks.push(task);
        };
        
        }
})();