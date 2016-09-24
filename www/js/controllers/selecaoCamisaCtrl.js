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
