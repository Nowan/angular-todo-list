(function() {
'use strict';

    angular
        .module('todoList')
        .service('todoService', todoService);

    //todoService.$inject = ['$firebaseObject'];
    function todoService() {
        var service = this;
        
        //firebase reference
        //var ref = new Firebase("https://blistering-torch-5379.firebaseio.com");
        // download the data into a local object
        //service.tasks = $firebaseObject(ref);
        
        //properties

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
        
        //methods
        service.addTask = addTask;
        service.clearAll = function(){ service.tasks.length=0; };
        service.clearDone = clearDone;
        
        function addTask(task){
            task.isCompleted = false;
            service.tasks.push(task);
        };
        
        function clearDone(){
            var comletedTasks = [];
            for(var i=service.tasks.length-1;i>=0;i--)
                if(service.tasks[i].isCompleted)
                    service.tasks.splice(i,1);
        }
        
        }
})();