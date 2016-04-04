(function() {
'use strict';

    angular
        .module('todoList')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state','$mdSidenav','firebaseService', 'sidebarService'];
    function NavbarController($state,$mdSidenav,firebaseService, sidebarService) {
        var vm = this;
        
        vm.$state = $state;
        
        vm.toggleSidebar = function(){ sidebarService.toggleSidebar(); };
        vm.currentTitle = currentTitle;
        
        function currentTitle(){
            switch(vm.$state.current.name){
                case 'login':
                    return "Login";
                case 'registration':
                    return "Registration";
                case 'profile':
                    return "My profile";
                case 'tasks':
                    return "Todo List";
            }
        }
        
    }
})();