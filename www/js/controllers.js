angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {
  /**
   *
   */
  $scope.init = function(){
    $scope.showBrush(false);
    $scope.showBatom(false);
    $scope.showSombra(false);
  };

  /**
   *
   * @param show
     */
  $scope.showBrush = function(show){
    if (show){
      $("#BLUSH_ROSA").animate({opacity: '1'},1000);
      $("#BLUSH_LARANJA").animate({opacity: '1'},1200);
      $("#BLUSH_VERMELHO").animate({opacity: '1'},1400);

    }else{
      $("#BLUSH_ROSA").animate({opacity: '0'},1400);
      $("#BLUSH_LARANJA").animate({opacity: '0'},1200);
      $("#BLUSH_VERMELHO").animate({opacity: '0'},1000);
    }

  };

  /**
   *
   * @param show Batom
   */
  $scope.showBatom = function(show){
    if (show){
      $("#BATOM_ROSA").animate({opacity: '1'},1000);
      $("#BATOM_ROXO").animate({opacity: '1'},1200);
      $("#BATOM_LARANJA").animate({opacity: '1'},1400);
      $("#BATOM_VERMELHO").animate({opacity: '1'},1600);

    }else{
      $("#BATOM_ROSA").animate({opacity: '0'},1600);
      $("#BATOM_ROXO").animate({opacity: '0'},1400);
      $("#BATOM_LARANJA").animate({opacity: '0'},1200);
      $("#BATOM_VERMELHO").animate({opacity: '0'},1000);
    }

  };

  /**
   *
   * @param show Sombra
   */
  $scope.showSombra = function(show){
    if (show){
      $("#SOMBRA_AZUL").animate({opacity: '1'},1000);
      $("#SOMBRA_VERDE").animate({opacity: '1'},1200);
      $("#SOMBRA_ROSA").animate({opacity: '1'},1400);
      $("#SOMBRA_ROXA").animate({opacity: '1'},1600);

    }else{
      $("#SOMBRA_AZUL").animate({opacity: '0'},1600);
      $("#SOMBRA_VERDE").animate({opacity: '0'},1400);
      $("#SOMBRA_ROSA").animate({opacity: '0'},1200);
      $("#SOMBRA_ROXA").animate({opacity: '0'},1000);
    }

  };


  $scope.blushVisible = true;

  $scope.blushToogle = function() {
    if ($scope.blushVisible){
      $scope.showBrush(true);
      $scope.blushVisible = false;
    }
    else{
      $scope.showBrush(false);
      $scope.blushVisible = true;
    }

  };


  $scope.batomVisible = true;

  $scope.batomToogle = function() {
    if ($scope.batomVisible){
      $scope.showBatom(true);
      $scope.batomVisible = false;
    }
    else{
      $scope.showBatom(false);
      $scope.batomVisible = true;
    }

  };



  $scope.sombraVisible = true;

  $scope.sombraToogle = function() {
    if ($scope.sombraVisible){
      $scope.showSombra(true);
      $scope.sombraVisible = false;
    }
    else{
      $scope.showSombra(false);
      $scope.sombraVisible = true;
    }

  };

  $scope.init();
});
