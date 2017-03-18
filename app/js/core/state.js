// Application Level State
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {



  $stateProvider
    .state('app', {
      url: '/home',
      templateUrl: 'js/core/templates/home.html',
      controller: 'HomeCtrl'

    })
    .state('dash', {
      url: '/dash',
      templateUrl: 'js/core/templates/Dashboard.html',
      controller: 'DashCtrl'

    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'js/core/templates/signup.html',
      controller: 'SignCtrl'
    });

}]);
