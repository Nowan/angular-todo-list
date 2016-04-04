(function() {
'use strict';

    angular
        .module('todoList')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['firebaseService', '$state'];
    function ProfileController(firebaseService, $state) {
        var vm = this;
        
        vm.showTasksView = showTasksView;
        vm.logOut = logOut;
        
        function showTasksView(){
            console.log("Go to tasks"); 
            $state.go('tasks', { "profileID": firebaseService.authData.uid });
        };
        
        function logOut() { 
            firebaseService.unauth(); 
            console.log("Log out successful"); 
            $state.go('login');
        };
        
    }
})();