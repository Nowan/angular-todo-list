(function() {
'use strict';

    angular
        .module('todoList')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['firebaseService', '$mdDialog', '$timeout', '$mdSidenav', '$log', '$state'];
    function SidebarController(firebaseService, $mdDialog, $timeout, $mdSidenav, $log, $state) {
        var vm = this;
        
        vm.clearAll = function(){ firebaseService.clearAll(); };
        vm.clearDone = function(){ firebaseService.clearDone(); };
        vm.showAlert = showAlert;
        vm.toggleLeft = buildToggler('left');
        vm.$state = $state;
        
        function showAlert(ev){
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Alert')
                    .textContent('Not implemented yet')
                    .ariaLabel('Alert')
                    .ok('OK')
                    .hasBackdrop(false)
                    //.targetEvent(ev)
            );
        };
        
        function buildToggler(navID) {
            return function() {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }
        }
    }
})();