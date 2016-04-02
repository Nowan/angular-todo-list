(function() {
  'use strict';

  angular
    .module('todoList')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    
    vm.text="Hello World!";
  }
})();
