app.controller('SelecaoCabeloCtrl', function($scope, $state, $ionicPopup, $localStorage,
                                             CABELO_ENCARACOLADO, CABELO_CASTANHO, CABELO_PRETO, CABELO_RUIVO) {

  /**
   * Constantes
   * @type {CABELO|*}
   */
  $scope.CABELO_ENCARACOLADO = CABELO_ENCARACOLADO;
  $scope.CABELO_CASTANHO = CABELO_CASTANHO;
  $scope.CABELO_PRETO = CABELO_PRETO;
  $scope.CABELO_RUIVO = CABELO_RUIVO;


  /**
   * Seleção do Cabelo
   * @param acessorio
     */
  $scope.onClickSelecaoCabelo = function(cabelo){

    $localStorage.cabelo = cabelo;


    var hairVoice = "";
    if (cabelo == CABELO_ENCARACOLADO) {
      hairVoice = "cabelo encaracolado"

      $("#cabeloEncaracolado").addClass("glowEffect");
      $("#cabeloCastanho").removeClass("glowEffect");
      $("#cabeloPreto").removeClass("glowEffect");
      $("#cabeloRuivo").removeClass("glowEffect");

    }
    if (cabelo == CABELO_CASTANHO) {
      hairVoice = "cabelo castanho"

      $("#cabeloEncaracolado").removeClass("glowEffect");
      $("#cabeloCastanho").addClass("glowEffect");
      $("#cabeloPreto").removeClass("glowEffect");
      $("#cabeloRuivo").removeClass("glowEffect");
    }
    if (cabelo == CABELO_PRETO) {
      hairVoice = "cabelo preto"


      $("#cabeloEncaracolado").removeClass("glowEffect");
      $("#cabeloCastanho").removeClass("glowEffect");
      $("#cabeloPreto").addClass("glowEffect");
      $("#cabeloRuivo").removeClass("glowEffect");

    }
    if (cabelo == CABELO_RUIVO) {
      hairVoice = "cabelo ruivo"

      $("#cabeloEncaracolado").removeClass("glowEffect");
      $("#cabeloCastanho").removeClass("glowEffect");
      $("#cabeloPreto").removeClass("glowEffect");
      $("#cabeloRuivo").addClass("glowEffect");
    }

    if (window.cordova) {
      TTS
        .speak({
          text: hairVoice,
          locale: 'pt-BR',
          rate: 1.1
        }, function () {
        }, function (reason) {
        });
    }
    else{
      var msg = new SpeechSynthesisUtterance(hairVoice);
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
      $state.go("selecaoCamisa");
    }
    else{

      audioTone.play();

      var alertPopup = $ionicPopup.alert({
        title: 'Hey!',
        template: '<div style="text-align: center">Voce esqueceu de marcar o cabelo</div>'
      });

    }
  }

});
