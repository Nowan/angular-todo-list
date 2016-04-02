(function() {
'use strict';

    angular
        .module('todoList')
        .controller('InsertionDialogController', InsertionDialogController);

    InsertionDialogController.$inject = ['$mdDialog'];
    function InsertionDialogController($mdDialog) {
        var vm = this;
        
        vm.title = '';
        vm.notes = '';
        
        vm.hide = function() {
            $mdDialog.hide();
        };
        vm.cancel = function() {
            vm.title = '';
            vm.notes = '';
            $mdDialog.cancel();
        };
        vm.answer = function() {
            var answer = {};
            answer.title = vm.title;
            answer.notes = vm.notes;
            $mdDialog.hide(answer);
            vm.title = '';
            vm.notes = '';
        };

    }
})();