(function() {
'use strict';

    angular
        .module('todoList')
        .service('firebaseService', firebaseService);

    firebaseService.$inject = ['$firebaseArray', '$firebaseAuth'];
    function firebaseService($firebaseArray, $firebaseAuth) {
        var service = this;
        
        //firebase reference
        var ref = new Firebase("https://blistering-torch-5379.firebaseio.com");
        
        // an instance of the authentication service
        var auth = $firebaseAuth(ref);
        
        // download the data into a local object
        service.tasks = $firebaseArray(ref);
        
        //methods
        service.addTask = addTask;
        service.clearAll = clearAll;
        service.clearDone = clearDone;
        service.saveTask = saveTask;
        
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
        
        function saveTask(task){
              service.tasks.$save(task);
        };
        
        }
})();