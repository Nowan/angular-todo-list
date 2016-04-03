(function() {
'use strict';

    angular
        .module('todoList')
        .service('todoService', todoService);

    todoService.$inject = ['$firebaseArray'];
    function todoService($firebaseArray) {
        var service = this;
        
        //firebase reference
        var ref = new Firebase("https://blistering-torch-5379.firebaseio.com");
        // download the data into a local object
        service.tasks = $firebaseArray(ref);
        
        //properties
        /*
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
            
        ];*/
        
        //methods
        service.addTask = addTask;
        service.clearAll = clearAll;
        service.clearDone = clearDone;
        
        function addTask(task){
            task.isCompleted = false;
            service.tasks.$add(task);
        };
        
        function clearAll(){
            for(var i=service.tasks.length-1;i>=0;i--)
                service.tasks.$remove(i);
        };
        
        function clearDone(){
            for(var i=service.tasks.length-1;i>=0;i--)
                if(service.tasks[i].isCompleted)
                    service.tasks.$remove(i);
        };
        
        }
})();