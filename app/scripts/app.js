'use strict';

angular.module('medlaserApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  // Main
  .state('app', {
    url: '/',
    views: {
      'header': {
        templateUrl: 'app/templates/header.html'
      },
      'content': {
        templateUrl:'app/partials/home.html',
        controller: 'PageCtrl'
      },
      'footer': {
        templateUrl: 'app/templates/footer.html'
      }
    }
  })

  .state('app.institutional', {
    url: 'institutional',
    views: {
      'content@': {
        templateUrl: 'app/partials/institutional.html',
        controller: 'PageCtrl'
      }
    }
  })

  .state('app.ourproducts', {
    url: 'our-products',
    views: {
      'content@': {
        templateUrl: 'app/partials/ourproducts.html',
        controller: 'PageCtrl'
      }
    }
  })

  .state('app.PLDD', {
    url:'PLDD',
    views: {
      'content@': {
        templateUrl: 'app/partials/pldd.html',
        controller: 'PageCtrl'
      }
    }
  })

  .state('app.EVLA', {
    url:'EVLA',
    views: {
      'content@': {
        templateUrl: 'app/partials/evla.html',
        controller: 'PageCtrl'
      }
    }
  })

  .state('app.articles', {
    url:'articles',
    views: {
      'content@': {
        templateUrl: 'app/partials/articles.html',
        controller: 'PageCtrl'
      }
    }
  })

  .state('app.contactus', {
    url:'contact-us',
    views: {
      'content@': {
        templateUrl: 'app/partials/contactus.html',
        controller: 'PageCtrl'
      }
    }
  })

  .state('app.thanks', {
    url:'submition-successful',
    views: {
      'content@': {
        templateUrl: 'app/partials/thanks.html',
        controller: 'PageCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/');
})

.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
  $rootScope
  .$on('$stateChangeSuccess', function(event){
    if (!$window.ga) return;
    $window.ga('send', 'pageview', {
      page: $location.path()
    });
  })
}]);
