(function() {
'use strict';

    angular
        .module('todoList')
        .controller('InsertionDialogController', InsertionDialogController);

    InsertionDialogController.$inject = ['$mdDialog'];
    function InsertionDialogController($mdDialog) {
        var vm = this;
        
        vm.hide = function() {
            $mdDialog.hide();
        };
        vm.cancel = function() {
            $mdDialog.cancel();
        };
        vm.answer = function(answer) {
             $mdDialog.hide(answer);
        };

    }
})();