app.controller('EstudioMaquiagemCtrl', function($scope, $localStorage,
                                                PELE_PARDA,
                                                PELE_BRANCA,
                                                PELE_NEGRA,
                                                CAMISA_AMARELA,
                                                CAMISA_VERMELHA,
                                                CAMISA_AZUL) {


  $scope.$on("$ionicView.afterEnter", function(event, data){

    var corPele = null;

    switch ($localStorage.tomPele){

      case PELE_PARDA: corPele = "#ff935b"; break;
      case PELE_BRANCA: corPele = "#ffe3c7"; break;
      case PELE_NEGRA: corPele = "#ba4902"; break;
    }

    $("#dollCabeca").css("fill",corPele);
    $("#dollOrelhaDireitaExterno").css("fill",corPele);
    $("#dollOrelhaEsquerdaExterno").css("fill",corPele);


    var camisa = null;
    switch ($localStorage.camisa){

      case CAMISA_AMARELA: camisa = "#efcd00"; break;
      case CAMISA_VERMELHA: camisa = "#e52238"; break;
      case CAMISA_AZUL: camisa = "#0053d8"; break;
    }
    $("#dollCamisa").css("fill",camisa);


  });

  /**
   * Collection Acessórios do Menu
   * @type {*[]}
   */
  $scope.collectionAcessorios = [
    {id:1, nome:"Blush", image:"img/acessorios/blushOpen.png"},
    {id:2, nome:"Base", image:"img/acessorios/baseOpen.png"},
    {id:3, nome:"Pincel", image:"img/acessorios/pincelOpen.png"},
    {id:4, nome:"Base", image:"img/acessorios/baseOpen.png"},
    {id:5, nome:"Blush", image:"img/acessorios/blushOpen.png"}
  ];

  $scope.blushVisible = false;

  /**
   * Método para Ap
   * @param acessorio
   */
  $scope.onClickAcessorio = function(acessorio){

    if ($scope.blushVisible && acessorio.nome == "Blush"){
      $("#BLUSH_ROSA").animate({opacity: '1'},1000);
      $("#BLUSH_LARANJA").animate({opacity: '1'},1200);
      $("#BLUSH_VERMELHO").animate({opacity: '1'},1400);

      $scope.blushVisible = false;
    }
    else{
      $("#BLUSH_ROSA").animate({opacity: '0'},1400);
      $("#BLUSH_LARANJA").animate({opacity: '0'},1200);
      $("#BLUSH_VERMELHO").animate({opacity: '0'},1000);

      $scope.blushVisible = true;
    }

  };

  /**
   * Aplicação do Blush
   * @param color
   */
  $scope.applyBlush = function(color){
    $("#rostoLadoDireito").css("fill",color);
    $("#rostoLadoEsquerdo").css("fill",color);
  }

});
