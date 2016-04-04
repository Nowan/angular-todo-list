(function() {
'use strict';

    angular
        .module('todoList')
        .service('sidebarService', sidebarService);

    //sidebarService.$inject = ['dependency1'];
    function sidebarService() {
        var service = this;
        
        service.toggleSidebar = null; // function is initialized inside the SidebarController
        
        }
})();