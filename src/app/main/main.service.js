(function() {
'use strict';

    angular
        .module('todoList')
        .service('todoService', todoService);

    //Service.$inject = ['dependency1'];
    function todoService() {
        var service = this;
        
        service.testValues = [
            "test", "test2", "test3"
        ]
        
        service.exposedFn = exposedFn;
        
        ////////////////

        function exposedFn() { 
            
        }
        }
})();