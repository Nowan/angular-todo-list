(function() {
'use strict';

    angular
        .module('todoList')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['todoService', '$mdDialog', '$timeout', '$mdSidenav', '$log'];
    function SidebarController(todoService, $mdDialog, $timeout, $mdSidenav, $log) {
        var vm = this;
        
        vm.clearAll = function(){ todoService.clearAll(); };
        vm.clearDone = function(){ todoService.clearDone(); };
        vm.showAlert = showAlert;
        vm.toggleLeft = buildToggler('left');
        
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