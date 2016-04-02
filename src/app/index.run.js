(function() {
  'use strict';

  angular
    .module('todoList')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
