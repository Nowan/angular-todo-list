(function() {
  'use strict';

  angular
    .module('todoList')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        redirectTo: 'login'
      })
      .state('login',{
          url: '/login',
          template: '<todo-login></todo-login>'
      })
      .state('registration',{
          url: '/registration',
          template: '<todo-registration></todo-registration>'
      })
      .state('profile',{
          url: '/profile/:profileID',
          template: '<todo-profile></todo-profile>'
      })
      .state('tasks',{
          url: '/profile/:profileID/tasks',
          template: '<todo-tasks></todo-tasks>'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
