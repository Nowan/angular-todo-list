(function() {
'use strict';

    angular
        .module('todoList')
        .controller('InsertionButtonController', InsertionButtonController);

    InsertionButtonController.$inject = ['firebaseService', '$mdDialog', '$mdMedia'];
    function InsertionButtonController(firebaseService, $mdDialog, $mdMedia) {
        var vm = this;
        
        vm.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
        vm.showInsertionDialog = showInsertionDialog;
        
        function showInsertionDialog(ev){
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && vm.customFullscreen;
            
            $mdDialog.show({
                controller: 'InsertionDialogController',
                controllerAs: 'iDialogCtrl',
                templateUrl: 'app/components/insertionDialog/insertion-dialog.html',
                css: 'app/components/insertionDialog/insertion-dialog.css',
                parent: angular.element(document.body),
                //targetEvent: ev,
                clickOutsideToClose: false,
                fullscreen: useFullScreen
            })
            .then(function(task) {
                //task contains title and notes 
                if(task.title=='') return;
                firebaseService.addTask(task);
            }, function() {
                //cancel handler
            });
            /*
            vm.$watch(function() {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function(wantsFullScreen) {
                vm.customFullscreen = (wantsFullScreen === true);
            });*/
            
        };
        
        vm.inheritedArray = firebaseService.testValues;

    }
})();