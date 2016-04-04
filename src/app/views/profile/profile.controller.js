(function() {
'use strict';

    angular
        .module('todoList')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['firebaseService', '$state'];
    function ProfileController(firebaseService, $state) {
        var vm = this;
        
        vm.goToTasks = function(){ $state.go('tasks', { "profileID": firebaseService.authData.uid }); };
        vm.logOut = logOut;
        
        function logOut() { 
            firebaseService.unauth(); 
            console.log("Log out successful"); 
            $state.go('login');
        };
        
    }
})();