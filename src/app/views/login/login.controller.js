(function() {
'use strict';

    angular
        .module('todoList')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope','firebaseService','$state'];
    function LoginController($scope, firebaseService, $state) {
        var vm = this;
        
        //params
        vm.email = null;
        vm.password = null;
        vm.authData = null;
        vm.error = null;
        
        //methods
        vm.authWithPassword = authWithPassword;
        
        //methods declarations
        function authWithPassword(){ 
            var callbackFunction = function(){
                if(firebaseService.isLoggedIn()){
                    $state.go('profile',{ "profileID": firebaseService.authData.uid });
                }
            };
            
            firebaseService.authWithPassword(vm.email, vm.password, callbackFunction); 
        };

    }
})();