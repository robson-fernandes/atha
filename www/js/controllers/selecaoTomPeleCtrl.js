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
