(function() {
  'use strict';

  angular
    .module('todoList')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state) {
      $rootScope.$on('$stateChangeStart', function(evt, to, params) {
        if (to.redirectTo) {
              evt.preventDefault();
              $state.go(to.redirectTo, params)
          }
      });

    $log.debug('runBlock end');
  }

})();
