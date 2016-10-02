app.controller('InicioCtrl', function($scope, $state) {

  /**
   * Start
   */
  $scope.onClickStart = function(){

    var introVoice = "Olá! Vamos começar a personalizar a boneca!"
    if (window.cordova) {
      TTS
        .speak({
          text: introVoice,
          locale: 'pt-BR',
          rate: 1.1
        }, function () {
        }, function (reason) {
        });
    }
    else{
      var msg = new SpeechSynthesisUtterance(introVoice);
      window.speechSynthesis.speak(msg);
    }

    $state.go("selecaoTomPele");

  }

});
