(function() {
'use strict';

    angular
        .module('todoList')
        .controller('InsertionButtonController', InsertionButtonController);

    InsertionButtonController.$inject = ['todoService', '$mdDialog', '$mdMedia'];
    function InsertionButtonController(todoService, $mdDialog, $mdMedia) {
        var vm = this;
        
        vm.status = '  ';
        vm.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
        vm.showInsertionDialog = showInsertionDialog;
        
        function showInsertionDialog(ev){
            $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
            
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