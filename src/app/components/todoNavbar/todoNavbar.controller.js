(function() {
'use strict';

    angular
        .module('todoList')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state','$mdSidenav','firebaseService'];
    function NavbarController($state,$mdSidenav,firebaseService) {
        var vm = this;
        
        vm.$state = $state;
        
        vm.toggleSidebar = buildToggler('left');
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
        
        function buildToggler(navID) {
            return function() {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }
        };
    }
})();