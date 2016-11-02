app.controller('EstudioMaquiagemCtrl', function($scope, $localStorage, $timeout, $ionicLoading,
                                                PELE_PARDA,
                                                PELE_BRANCA,
                                                PELE_NEGRA,
                                                CAMISA_AMARELA,
                                                CAMISA_VERMELHA,
                                                CAMISA_AZUL,

                                                CABELO_ENCARACOLADO,
                                                CABELO_CASTANHO,
                                                CABELO_PRETO,
                                                CABELO_RUIVO) {


  $scope.cabeloBoneca = "";

  $scope.$on("$ionicView.afterEnter", function(event, data){


    var camisa = null;
    switch ($localStorage.camisa){

      case CAMISA_AMARELA: camisa = "#efcd00"; break;
      case CAMISA_VERMELHA: camisa = "#e52238"; break;
      case CAMISA_AZUL: camisa = "#0053d8"; break;
    }
    $("#dollCamisa").css("fill",camisa);


    var colorSpinner = camisa;
    $ionicLoading.show({
      template: '<ion-spinner style="stroke: '+colorSpinner+'"></ion-spinner>',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });


    var corPele = null;

    switch ($localStorage.tomPele){

      case PELE_PARDA: corPele = "#ff935b"; break;
      case PELE_BRANCA: corPele = "#ffe3c7"; break;
      case PELE_NEGRA: corPele = "#ba4902"; break;
    }

    $("#dollCabeca").css("fill",corPele);
    $("#dollBracoEsquerdo").css("fill",corPele);
    $("#dollBracoDireito").css("fill",corPele);
    $("#dollPescoco").css("fill",corPele);

    $("#bochechaEsquerda").css("fill",corPele);
    $("#bochechaDireita").css("fill",corPele);

    $("#dollOrelhaDireitaExterno").css("fill",corPele);
    $("#dollOrelhaEsquerdaExterno").css("fill",corPele);


    /**
     * Cabelo
     */
    if ($localStorage.cabelo == CABELO_ENCARACOLADO) {

      $("#cabeloBoneca")
        .removeClass("cabeloCastanho")
        .removeClass("cabeloPreto")
        .removeClass("cabeloRuivo")
        .addClass("cabeloEncaracolado");

      $scope.cabeloBoneca = "img/cabelo/encaracolado.png";

    }
    if ($localStorage.cabelo == CABELO_CASTANHO) {

      $("#cabeloBoneca")
         .removeClass("cabeloEncaracolado")
        .removeClass("cabeloPreto")
        .removeClass("cabeloRuivo")
        .addClass("cabeloCastanho");

      $scope.cabeloBoneca = "img/cabelo/castanho.png";
    }
    if ($localStorage.cabelo == CABELO_PRETO) {


      $("#cabeloBoneca")
        .removeClass("cabeloEncaracolado")
        .removeClass("cabeloCastanho")
        .removeClass("cabeloRuivo")
        .addClass("cabeloPreto");

      $scope.cabeloBoneca = "img/cabelo/preto.png";

    }
    if ($localStorage.cabelo == CABELO_RUIVO) {

      $("#cabeloBoneca")
        .removeClass("cabeloEncaracolado")
        .removeClass("cabeloCastanho")
        .removeClass("cabeloPreto")
        .addClass("cabeloRuivo");

      $scope.cabeloBoneca = "img/cabelo/ruivo.png";
    }

    $scope.$apply();

    $timeout(function () {
      $ionicLoading.hide();
    }, 1500);

    $scope.configDragAndDrop();

  });

  $scope.createDragedElement = function(element){

    x = 0, y = 0;
    interact(element)
      .draggable({
        snap: {
          targets: [
            interact.createSnapGrid({ x: 30, y: 30 })
          ],
          range: Infinity,
          relativePoints: [ { x: 0, y: 0 } ]
        },
        inertia: true,
        restrict: {
          restriction: element.parentNode,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
          endOnly: true
        }
      })
      .on('dragmove', function (event) {
        x += event.dx;
        y += event.dy;

        event.target.style.webkitTransform =
          event.target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';
      });
  },

  $scope.configDragAndDrop = function(){

    var dragPincel = document.getElementById('dragPincel');
    var dragBatom = document.getElementById('dragBatom');

    $scope.createDragedElement(dragPincel);
    $scope.createDragedElement(dragBatom);

    /**
     * Drag Zone - Blush
     */
    interact('.dropzoneBlush').dropzone({

      ondragenter: function (event) {
        var draggableElement = event.relatedTarget,
          dropzoneElement = event.target;

        $(draggableElement).removeClass("blushGlowPink").removeClass("blushGlowOrange").removeClass("blushGlowRed");

        var classEffect = $($(dropzoneElement)[0].outerHTML).data("effect");
        $scope.colorBlush = $($(dropzoneElement)[0].outerHTML).data("color");

        $(draggableElement).addClass(classEffect);

      },
      ondragleave: function (event) { console.log("Drag Leave"); },
      ondrop: function (event) { console.log("Drag Drop"); }
    });

    /**
     * Drag Zone - Batom
     */
    interact('.dropzoneBatom').dropzone({

      ondragenter: function (event) {
        var draggableElement = event.relatedTarget,
          dropzoneElement = event.target;

        $(draggableElement).removeClass("batomGlowPink").removeClass("batomGlowOrange").removeClass("batomGlowRed").removeClass("batomGlowPurple");

        var classEffect = $($(dropzoneElement)[0].outerHTML).data("effect");
        $scope.colorBatom = $($(dropzoneElement)[0].outerHTML).data("color");

        $(draggableElement).addClass(classEffect);

      },
      ondragleave: function (event) { console.log("Drag Leave"); },
      ondrop: function (event) { console.log("Drag Drop"); }
    });


    $scope.colorBlush = "";
    $scope.colorBatom = "";

    /**
     * Drag Zone - Bochecha Esquerda
     */
    interact('.dropzoneBochechaEsquerda').dropzone({

      accept:"#dragPincel",

      ondragenter: function (event) {

        if ( $scope.colorBlush != ""){
          $("#bochechaEsquerda").css("fill", $scope.colorBlush);
          $("#bochechaEsquerda").css("opacity", 0.13);
        }


      },
      ondragleave: function (event) {  },
      ondrop: function (event) { }
    });


    /**
     * Drag Zone - Bochecha Direita
     */
    interact('.dropzoneBochechaDireita').dropzone({

      accept:"#dragPincel",
      ondragenter: function (event) {

        if ( $scope.colorBlush != "") {
          $("#bochechaDireita").css("fill", $scope.colorBlush);
          $("#bochechaDireita").css("opacity", 0.13);
        }

      },
      ondragleave: function (event) {  },
      ondrop: function (event) { }
    });



    /**
     * Drag Zone - Labio Cima
     */
    interact('.dropzoneLabio').dropzone({

      accept:"#dragBatom",
      ondragenter: function (event) {

        if ( $scope.colorBatom != "") {
          $("#labioCima").css("fill", $scope.colorBatom);
          $("#labioBaixo").css("fill", $scope.colorBatom);
        }

      },
      ondragleave: function (event) {  },
      ondrop: function (event) { }
    });


    /**
     * Drag Zone - Labio Baixo
     */
    /*
    interact('.dropzoneLabioBaixo').dropzone({
      ondragenter: function (event) {

        if ( $scope.colorBatom != "") {
          $("#labioBaixo").css("fill", $scope.colorBatom);
        }

      },
      ondragleave: function (event) {  },
      ondrop: function (event) { }
    });*/

  }



  /**
   * Collection Acessórios do Menu
   * @type {*[]}
   */
  $scope.collectionAcessorios = [
    {id:1, nome:"Blush", image:"img/acessorios/blushOpen.png"},
    {id:2, nome:"Batom", image:"img/acessorios/batomOpen.png"},
    {id:3, nome:"Pincel", image:"img/acessorios/pincelOpen.png"},
    {id:4, nome:"Base", image:"img/acessorios/baseOpen.png"},
    {id:5, nome:"Blush", image:"img/acessorios/blushOpen.png"}
  ];

  $scope.blushVisible = true;
  $scope.batomVisible = true;

  /**
   * Método para Ap
   * @param acessorio
   */
  $scope.onClickAcessorio = function(acessorio){

    if ($scope.blushVisible && acessorio.nome == "Blush"){
      $("#BLUSH_ROSA").animate({opacity: '1'},1000);
      $("#BLUSH_LARANJA").animate({opacity: '1'},1200);
      $("#BLUSH_VERMELHO").animate({opacity: '1'},1400);
      $("#PINCEL").animate({opacity: '1'},1400);
      $scope.blushVisible = false;

    }
    else  if ($scope.batomVisible && acessorio.nome == "Batom"){

      $("#BATOM_ROSA").animate({opacity: '1'},1000);
      $("#BATOM_LARANJA").animate({opacity: '1'},1100);
      $("#BATOM_VERMELHO").animate({opacity: '1'},1200);
      $("#BATOM_ROXO").animate({opacity: '1'},1300);
      $("#BATOM").animate({opacity: '1'},1400);
      $scope.batomVisible = false;

    }
    else{

      $("#BLUSH_ROSA").animate({opacity: '0'},1400);
      $("#BLUSH_LARANJA").animate({opacity: '0'},1200);
      $("#BLUSH_VERMELHO").animate({opacity: '0'},1000);
      $("#PINCEL").animate({opacity: '0'},1000);
      $scope.blushVisible = true;

      $("#BATOM_ROSA").animate({opacity: '0'},1000);
      $("#BATOM_LARANJA").animate({opacity: '0'},1100);
      $("#BATOM_VERMELHO").animate({opacity: '0'},1200);
      $("#BATOM_ROXO").animate({opacity: '0'},1300);
      $("#BATOM").animate({opacity: '0'},1400);
      $scope.batomVisible = true;

    }


  };


});
