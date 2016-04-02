(function() {
'use strict';

    angular
        .module('todoList')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['todoService', '$mdDialog'];
    function SidebarController(todoService, $mdDialog) {
        var vm = this;
        
        vm.clearAll = function(){ todoService.clearAll(); };
        vm.clearDone = function(){ todoService.clearDone(); };
        vm.showAlert = showAlert;
        
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
    }
})();