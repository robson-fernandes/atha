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

    var audioRobo = document.getElementById('audioRobo');
    audioRobo.play();
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
