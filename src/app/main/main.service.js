(function() {
'use strict';

    angular
        .module('todoList')
        .service('todoService', todoService);

    //Service.$inject = ['dependency1'];
    function todoService() {
        var service = this;
        
        //array of all services
        service.tasks = [
            {
                title: "task 1 title",
                notes: "some notes",
                isCompleted: false
            },
            {
                title: "task 2 title",
                notes: "some notes",
                isCompleted: false
            },
            {
                title: "task 3 title",
                notes: "some notes",
                isCompleted: true
            }
            
        ];
        
        service.addTask = addTask;
        
        //adds task to the base
        function addTask(task){
            task.isCompleted = false;
            service.tasks.push(task);
        };
        
        }
})();