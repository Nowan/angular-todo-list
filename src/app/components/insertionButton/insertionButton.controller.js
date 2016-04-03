(function() {
'use strict';

    angular
        .module('todoList')
        .controller('InsertionButtonController', InsertionButtonController);

    InsertionButtonController.$inject = ['todoService', '$mdDialog', '$mdMedia'];
    function InsertionButtonController(todoService, $mdDialog, $mdMedia) {
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
                //add task to the array
                if(task.title=='') return;
                todoService.addTask(task);
            }, function() {
                //cancel handler
            });
                vm.$watch(function() {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function(wantsFullScreen) {
                vm.customFullscreen = (wantsFullScreen === true);
            });
            
        };
        
        
        
        vm.inheritedArray = todoService.testValues;
        /*
        $scope.showAdvanced = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
         */


    }
})();