angular.module('learntospeakmandarin', ['ionic', 'ui.router', 'ngAnimate', 'learntospeakmandarin.controllers', 'learntospeakmandarin.services'])

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
})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.backButton.previousTitleText(false).text('');
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('player', {
			url: '/player',
			templateUrl: 'templates/player.html',
			controller: 'PlayerCtrl'
		})
		.state('level', {
			url: '/level/:pid',
			templateUrl: 'templates/level.html',
			controller: 'LevelCtrl'
		})
		.state('game', {
			url: '/game/:pid/:lid',
			templateUrl: 'templates/game.html',
			controller: 'GameCtrl'
		});
	$urlRouterProvider.otherwise('/player');
});
