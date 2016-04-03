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
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('login',{
          url: '/login',
          templateUrl: 'app/views/login/login.html'
      })
      .state('profile',{
          url: '/profile',
          templateUrl: 'app/views/profile/profile.html'
      })
      .state('tasks',{
          url: '/tasks',
          templateUrl: 'app/views/tasks/tasks.html'
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
