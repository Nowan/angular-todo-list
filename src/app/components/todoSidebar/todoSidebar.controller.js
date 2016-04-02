(function() {
'use strict';

    angular
        .module('todoList')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['todoService'];
    function SidebarController(todoService) {
        var vm = this;
        
        vm.sidebarItems = [
            {
                title: 'Clear All',
                iconPath: 'assets/icons/ic_delete_black_48px.svg'
            },
            {
                title: 'Clear Done',
                iconPath: 'assets/icons/ic_clear_black_48px.svg'
            },
            {
                title: 'Settings',
                iconPath: 'assets/icons/ic_settings_black_48px.svg'
            },
            {
                title: 'About',
                iconPath: 'assets/icons/ic_about_black_48px.svg'
            }
        ];

    }
})();