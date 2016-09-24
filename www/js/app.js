/**
 * Configuração do Módulo Principal e Rotas
 */
angular.module('starter', ['ionic', 'starter.controllers','ksSwiper','ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('selecaoTomPele', {
      url: '/selecaoTomPele',
      templateUrl: 'templates/selecaoTomPeleView.html',
      controller: 'SelecaoTomPeleCtrl'
    })
    .state('selecaoCabelo', {
      url: '/selecaoCabelo',
      templateUrl: 'templates/selecaoCabeloView.html',
      controller: 'SelecaoCabeloCtrl'
    })
    .state('selecaoCamisa', {
      url: '/selecaoCamisa',
      templateUrl: 'templates/selecaoCamisaView.html',
      controller: 'SelecaoCamisaCtrl'
    })
    .state('estudioMaquiagem', {
      url: '/estudioMaquiagem',
      templateUrl: 'templates/estudioMaquiagemView.html',
      controller: 'EstudioMaquiagemCtrl'
    })
    .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl'
    })
    .state('conclusao', {
      url: '/conclusao',
      templateUrl: 'templates/conclusaoView.html',
      controller: 'ConclusaoCtrl'
    });

  $urlRouterProvider.otherwise('/selecaoTomPele');

});

var app = angular.module('starter.controllers', [])
