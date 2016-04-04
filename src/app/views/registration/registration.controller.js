(function() {
'use strict';

    angular
        .module('todoList')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['$scope','firebaseService','$state'];
    function RegistrationController($scope, firebaseService,$state) {
        var vm = this;
        
        vm.email = null;
        vm.password = null;
        vm.error = null;
        
        vm.createUser = function(){
            var callbackFunction = function(error){
                if(error){ vm.error = error; return };
                
                //if registration successful - login with user data
                var loginCallbackFunction = function(){
                    if(firebaseService.isLoggedIn()){
                        $state.go('profile',{ "profileID": firebaseService.authData.uid });
                    }
                };
                
                firebaseService.authWithPassword(vm.email, vm.password, loginCallbackFunction); 
            };
            firebaseService.createUser(vm.email,vm.password,callbackFunction);
        };
    }
})();