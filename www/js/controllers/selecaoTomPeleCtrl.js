app.controller('SelecaoTomPeleCtrl', function($scope, $state, $ionicPopup, $localStorage, PELE_PARDA, PELE_BRANCA, PELE_NEGRA) {

  /**
   * Constantes
   * @type {PELE|*}
   */
  $scope.PELE_PARDA = PELE_PARDA;
  $scope.PELE_BRANCA = PELE_BRANCA;
  $scope.PELE_NEGRA = PELE_NEGRA;

  /**
   * Seleção do Tom da Pele
   * @param tom
     */
  $scope.onClickSelecaoTomPele = function(tom){

    $localStorage.tomPele = tom;

    var skinVoice = "";
    if (tom == PELE_PARDA){
      skinVoice = "pele parda";

      $("#peleParda").addClass("glowEffect");
      $("#peleBranca").removeClass("glowEffect");
      $("#peleNegra").removeClass("glowEffect");
    }
    if (tom == PELE_BRANCA){
      skinVoice = "pele branca"

      $("#peleParda").removeClass("glowEffect");
      $("#peleBranca").addClass("glowEffect");
      $("#peleNegra").removeClass("glowEffect");
    }
    if (tom == PELE_NEGRA){
      skinVoice = "pele negra"

      $("#peleParda").removeClass("glowEffect");
      $("#peleBranca").removeClass("glowEffect");
      $("#peleNegra").addClass("glowEffect");
    }

    if (window.cordova) {
      TTS
        .speak({
          text: skinVoice,
          locale: 'pt-BR',
          rate: 1.1
        }, function () {
        }, function (reason) {
        });
    }
    else{
      var msg = new SpeechSynthesisUtterance(skinVoice);
      window.speechSynthesis.speak(msg);
    }

  }

  /**
   * Avançar
   */
  $scope.onClickAvancar = function(){

    var audioTone = document.getElementById('audioTone');

    if ($localStorage.tomPele){

      audioTone.play();
      $state.go("selecaoCabelo");
    }
    else{

      audioTone.play();

      var alertPopup = $ionicPopup.alert({
        title: 'Hey!',
        template: '<div style="text-align: center">Voce esqueceu de marcar o tom da pele</div>'
      });

    }
  }

});
