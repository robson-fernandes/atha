app.controller('InicioCtrl', function($scope, $state) {

  /**
   * Start
   */
  $scope.onClickStart = function(){

    var audioTone = document.getElementById('audioTone');

      audioTone.play();
      $state.go("selecaoTomPele");

  }

});
