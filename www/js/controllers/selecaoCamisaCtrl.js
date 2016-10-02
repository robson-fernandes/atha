app.controller('SelecaoCamisaCtrl', function($scope, $state, $ionicPopup, $localStorage, CAMISA_AMARELA, CAMISA_VERMELHA, CAMISA_AZUL) {

  /**
   * Constantes
   * @type {CAMISA|*}
   */
  $scope.CAMISA_AMARELA = CAMISA_AMARELA;
  $scope.CAMISA_VERMELHA = CAMISA_VERMELHA;
  $scope.CAMISA_AZUL = CAMISA_AZUL;

  /**
   * Seleção da Camisa
   * @param camisa
     */
  $scope.onClickSelecaoCamisa = function(camisa){

    $localStorage.camisa = camisa;

    var colorVoice = "";
    if (camisa == CAMISA_AMARELA){
      colorVoice = "camisa amarela";

      $("#camisaAmarela").addClass("glowEffect");
      $("#camisaVermelha").removeClass("glowEffect");
      $("#camisaAzul").removeClass("glowEffect");
    }
    if (camisa == CAMISA_VERMELHA){
      colorVoice = "camisa vermelha"

      $("#camisaAmarela").removeClass("glowEffect");
      $("#camisaVermelha").addClass("glowEffect");
      $("#camisaAzul").removeClass("glowEffect");
    }
    if (camisa == CAMISA_AZUL) {
      colorVoice = "camisa azul"

      $("#camisaAmarela").removeClass("glowEffect");
      $("#camisaVermelha").removeClass("glowEffect");
      $("#camisaAzul").addClass("glowEffect");
    }

    if (window.cordova) {
      TTS
        .speak({
          text: colorVoice,
          locale: 'pt-BR',
          rate: 1.1
        }, function () {
        }, function (reason) {
        });
    }
    else{
      var msg = new SpeechSynthesisUtterance(colorVoice);
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
      $state.go("estudioMaquiagem");
    }
    else{

      audioTone.play();

      var alertPopup = $ionicPopup.alert({
        title: 'Hey!',
        template: '<div style="text-align: center">Voce esqueceu de selecionar a cor da camisa</div>'
      });

    }
  }

});
