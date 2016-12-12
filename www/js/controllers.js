angular.module('learntospeakmandarin.controllers', [])

.controller('PlayerCtrl', function($scope, $state, Player) {
	$scope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
		if (toState.name == 'player') {
			$scope.formData = {};
			$scope.players = Player.all();
			// DEBUG $scope.players['2'].levels = ['4', '5'];
			// DEBUG Player.update($scope.players);
			$scope.initPlayers();
		}
	});
	
	$scope.initPlayers = function() {
		$scope.dplayers = [];
		for(var pid in $scope.players) {
			$scope.dplayers.push({ pid: pid, name: $scope.players[pid].name, score: $scope.players[pid].score });
		}
		$scope.dplayers.sort(function(a,b) { return b.score - a.score; });
	}
	
	$scope.newPlayer = function() {
		if ($scope.formData.playerName.trim().length > 0) {
			var pid = Object.keys($scope.players).length;
			$scope.players[pid] = {
				'name': $scope.formData.playerName,
				'score' : 0,
				'score2' : 0,
				'levels' : [],
			}
			Player.update($scope.players);
			$state.go('level', {'pid': pid});
		}
	}

	$scope.delPlayer = function(pid) {
		delete $scope.players[pid];
		Player.update();
		$scope.initPlayers();
	}
})

.controller('LevelCtrl', function($scope, $state, $stateParams, $ionicLoading, Player, Level) {
	$scope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
		if (toState.name == 'level') {
			$scope.showScore = true;
			$scope.players = Player.all();
			$scope.levels = Level.all();
			$scope.pid = $stateParams.pid;
			$scope.player = $scope.players[$scope.pid];
			$scope.dlevels = [];
			for(var lid in $scope.levels) {
				$scope.dlevels.push({ lid: lid, name: '<i class="ion-grid"></i>&nbsp;' + $scope.levels[lid].name, 
					items: $scope.levels[lid].items});
			}
			$scope.dlevels.sort(function(a,b) { return parseInt(a.lid) - parseInt(b.lid); });
			for (var i=0; i<$scope.player.levels.length; i++) {
				var level = $scope.dlevels.find(function(a) { return a.lid == $scope.player.levels[i]; });
				level.name += '&nbsp;<span class="item-note">☑</span>';
				level.done = 'level-box-done';
			}
			if ($scope.player.score < $scope.player.score2) {
				$scope.showScore = false;
				$scope.sbclass = 'scoreboard scoreboard-in';
				$scope.updateScore();
			}
		}
	});

	$scope.updateScore = function() {
		$ionicLoading.hide().then(function() {
			$ionicLoading.show({
				template: '<div id="scoreboard" class="' + $scope.sbclass + '">' + $scope.player.score + '✩</div>',
				noBackdrop: true,
			});
			if ($scope.sbclass.indexOf('scoreboard-out') >= 0) {
				setTimeout(function() {
					$ionicLoading.hide();
					$scope.showScore = true;
				}, 1000);
			} else if ($scope.player.score < $scope.player.score2) {
				var timeout = 100;
				if ($scope.sbclass.indexOf('scoreboard-in') >= 0) {
					timeout = 1000;
					setTimeout(Level.rattle, 1000);
				}
				$scope.sbclass = 'scoreboard';
				$scope.player.score++;
				setTimeout($scope.updateScore, timeout);
			} else {
				$scope.sbclass = 'scoreboard scoreboard-out';
				Player.update($scope.players);
				setTimeout($scope.updateScore, 100);
			};
		});
	}
})

.controller('GameCtrl', function($scope, $state, $stateParams, $ionicModal, $ionicHistory, Player, Level, Game) {
	$scope.players = Player.all();
	$scope.levels = Level.all();
	$scope.player = $scope.players[$stateParams.pid];
	$scope.lid = $stateParams.lid;
	$scope.levelName =$scope.levels[$scope.lid].name;
	$scope.questionNum = 0;
	$scope.answered = 0;
	$scope.numQuestions = $scope.levels[$scope.lid].items.length;

	// DEBUG $scope.recognizer = new Object();
	$scope.recognizer = new SpeechRecognition();
	$scope.recognizer.lang = 'zh';

	$scope.recognizer.onresult = function(event) {
		if (event.results.length > 0) {
			$scope.recogText = event.results[0][0].transcript;
			$scope.diffText = Game.compareText($scope.questionText, $scope.recogText);
			if ($scope.diffText.indexOf('class="wrong"') == -1) {
				$scope.showRecording = false;
				$scope.showRecordBtn = false;
				$scope.showRecogText = true;
				$scope.showPlsWait = false;
				$scope.showNextButton = true;
				$scope.answered += 1;
				if ($scope.questionNum >= $scope.levels[$scope.lid].items.length) {
					Game.cheer();
					$scope.nextButtonClass = 'button button-energized';
					$scope.nextButtonDiv = 'level-done';
					$scope.nextButton = 'You have earned ' + ($scope.answered) + '✩';
				} else {
					Game.clap();
				}
			} else {
				$scope.showRecording = false;
				$scope.recogButton = 'Click to try again';
				$scope.showRecording = false;
				$scope.showRecordBtn = true;
				$scope.showRecogText = true;
				$scope.showPlsWait = false;
				$scope.showNextButton = false;
			}
			$scope.$apply();
		}
	};

	$scope.recognizer.onerror = function(event) {
		$scope.recogButton = 'Click to try again';
		$scope.showRecording = false;
		$scope.showRecordBtn = true;
		$scope.showRecogText = false;
		$scope.showPlsWait = false;
		$scope.showNextButton = false;
		$scope.$apply();
	}

	$scope.startRecognition = function() {
		console.log('startRecog');
		$scope.showRecording = true;
		$scope.showRecordBtn = false;
		$scope.showRecogText = false;
		$scope.showPlsWait = false;
		$scope.showNextButton = false;
		$scope.recognizer.start();
		/* DEBUG setTimeout(function() {
			$scope.showRecording = false;
			$scope.showRecordBtn = false;
			$scope.showRecogText = true;
			$scope.showPlsWait = false;
			$scope.showNextButton = true;
			$scope.nextButtonClass = 'button button-energized';
			$scope.nextButton = 'You have earned ' + ($scope.answered) + '✩';
			$scope.answered = 10;
			$scope.$apply();
		}, 1000); */
	}

	$scope.stopRecognition = function() {
		console.log('stopRecog');
		if ($scope.showRecording) {
			$scope.recognizer.stop();
			$scope.showRecording = false;
			$scope.showPlsWait = true;
		}
	}

	$scope.cancelRecognition = function() {
		console.log('cancelRecog');
		if ($scope.showRecording) {
			$scope.recognizer.abort();
			$scope.recogButton = 'Click to try again';
			$scope.showRecording = false;
			$scope.showRecordBtn = true;
			$scope.showRecogText = false;
			$scope.showPlsWait = false;
			$scope.showNextButton = false;
		}
	}

	$scope.initQuestion = function() {
		$scope.showRecording = false;
		$scope.showRecordBtn = true;
		$scope.showRecogText = false;
		$scope.showPlsWait = false;
		$scope.showNextButton = false;
		$scope.speakingNow = false; 
		$scope.recogText = '';
		$scope.recogButton = 'Click to speak';
		$scope.nextButton = 'Good job!';
		$scope.nextButtonClass = 'button button-balanced';
		$scope.nextButtonDiv = '';
	}
	
	$scope.navPrev = function() {
		$scope.initQuestion();
		if ($scope.questionNum > 1) {
			$scope.questionNum -= 1;
			$scope.questionText = $scope.levels[$scope.lid].items[$scope.questionNum-1];
		}
	}
	
	$scope.navNext = function() {
		$scope.initQuestion();
		if ($scope.questionNum < $scope.levels[$scope.lid].items.length) {
			$scope.questionNum += 1;
			$scope.questionText = $scope.levels[$scope.lid].items[$scope.questionNum-1];
		}
	}

	$scope.nextQuestion = function() {
		$scope.initQuestion();
		if ($scope.questionNum >= $scope.levels[$scope.lid].items.length) {
			$scope.player.score2 += $scope.answered;
			if ($scope.player.levels.findIndex(function(value) { return value == $scope.lid }) == -1) $scope.player.levels.push($scope.lid);
			Player.update($scope.players);
			$ionicHistory.goBack();
		} else {
			$scope.questionNum += 1;
			$scope.questionText = $scope.levels[$scope.lid].items[$scope.questionNum-1];
		}
	}

	$scope.speakText = function() {
		var speakText = $scope.questionText.replace(/<br\/>/g, '');
		$scope.speakingNow = true; 
		setTimeout(function() { 
			console.log('timeout');
			$scope.speakingNow = false;
			$scope.$apply();
		}, 5000);
		TTS.speak({
			text: speakText,
			locale: 'zh-CN',
			rate: 0.7,
		}, function() {
		}, function(reason) {
			console.log('Error: ' + reason);
		});
   }
	
	$scope.nextQuestion();
})
