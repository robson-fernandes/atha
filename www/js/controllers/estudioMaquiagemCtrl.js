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

          $timeout(function () {
            $scope.voiceSpeech("Você está linda!");
          }, 500);
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


          $timeout(function () {
            $scope.voiceSpeech("Este batom ficou lindo em você!");
          }, 500);

        }

      },
      ondragleave: function (event) {  },
      ondrop: function (event) { }
    });


  }



  /**
   * Collection Acessórios do Menu
   * @type {*[]}
   */
  $scope.collectionAcessorios = [
    {id:1, nome:"Blush", image:"img/acessorios/blushOpen.png"},
    {id:2, nome:"Batom", image:"img/acessorios/batomOpen.png"},
    {id:4, nome:"Oculos", image:"img/acessorios/oculosOpen.png"},
    {id:3, nome:"Brinco", image:"img/acessorios/brincoOpen.png"},
    {id:5, nome:"Colar", image:"img/acessorios/colarOpen.png"},
    {id:1, nome:"Blush", image:"img/acessorios/blushOpen.png"}
  ];

  $scope.blushVisible = true;
  $scope.batomVisible = true;
  $scope.oculosVisible = true;
  $scope.brincoVisible = true;
  $scope.colarVisible = true;

  /**
   * Método para Ap
   * @param acessorio
   */
  $scope.onClickAcessorio = function(acessorio){

    if ($scope.blushVisible && acessorio.nome == "Blush"){

      $("#opcaoAcessorioBlush").show();
      $("#BLUSH_ROSA").animate({opacity: '1'},1000);
      $("#BLUSH_LARANJA").animate({opacity: '1'},1200);
      $("#BLUSH_VERMELHO").animate({opacity: '1'},1400);
      $("#PINCEL").animate({opacity: '1'},1400);
      $scope.blushVisible = false;

      $("#opcaoAcessorioBatom").hide();
      $("#BATOM_ROSA").animate({opacity: '0'},1000);
      $("#BATOM_LARANJA").animate({opacity: '0'},1100);
      $("#BATOM_VERMELHO").animate({opacity: '0'},1200);
      $("#BATOM_ROXO").animate({opacity: '0'},1300);
      $("#BATOM").animate({opacity: '0'},1400);
      $scope.batomVisible = true;

    }
    else  if ($scope.batomVisible && acessorio.nome == "Batom"){

      $("#opcaoAcessorioBatom").show();
      $("#BATOM_ROSA").animate({opacity: '1'},1000);
      $("#BATOM_LARANJA").animate({opacity: '1'},1100);
      $("#BATOM_VERMELHO").animate({opacity: '1'},1200);
      $("#BATOM_ROXO").animate({opacity: '1'},1300);
      $("#BATOM").animate({opacity: '1'},1400);
      $scope.batomVisible = false;

      $("#opcaoAcessorioBlush").hide();
      $("#BLUSH_ROSA").animate({opacity: '0'},1400);
      $("#BLUSH_LARANJA").animate({opacity: '0'},1200);
      $("#BLUSH_VERMELHO").animate({opacity: '0'},1000);
      $("#PINCEL").animate({opacity: '0'},1000);
      $scope.blushVisible = true;


    }
    else  if ($scope.oculosVisible && acessorio.nome == "Oculos"){

      $scope.voiceSpeech("Lindos Óculos!");
      $("#oculosModeloUm").css("opacity", 1);
      $scope.oculosVisible = false;

    }
    else  if ($scope.brincoVisible && acessorio.nome == "Brinco"){

      $scope.voiceSpeech("Amei os brincos!");
      $("#brincoEsquerdo").css("opacity", 1);
      $("#brincoDireito").css("opacity", 1);
      $scope.brincoVisible = false;

    }
    else  if ($scope.colarVisible && acessorio.nome == "Colar"){

      $scope.voiceSpeech("Ficou ótima com esse colar!");
      $("#colar").css("opacity", 1);
      $scope.colarVisible = false;

    }
    else{

      if (acessorio.nome == "Blush"){

        $("#opcaoAcessorioBlush").hide();
        $("#BLUSH_ROSA").animate({opacity: '0'},1400);
        $("#BLUSH_LARANJA").animate({opacity: '0'},1200);
        $("#BLUSH_VERMELHO").animate({opacity: '0'},1000);
        $("#PINCEL").animate({opacity: '0'},1000);
        $scope.blushVisible = true;
      }
      if (acessorio.nome == "Batom"){

        $("#opcaoAcessorioBatom").show();
        $("#BATOM_ROSA").animate({opacity: '0'},1000);
        $("#BATOM_LARANJA").animate({opacity: '0'},1100);
        $("#BATOM_VERMELHO").animate({opacity: '0'},1200);
        $("#BATOM_ROXO").animate({opacity: '0'},1300);
        $("#BATOM").animate({opacity: '0'},1400);
        $scope.batomVisible = true;
      }

      if (acessorio.nome == "Oculos") {
        $("#oculosModeloUm").css("opacity", 0);
        $scope.oculosVisible = true;
      }

      if (acessorio.nome == "Brinco") {
        $("#brincoEsquerdo").css("opacity", 0);
        $("#brincoDireito").css("opacity", 0);
        $scope.brincoVisible = true;
      }

      if (acessorio.nome == "Colar") {
        $("#colar").css("opacity", 0);
        $scope.colarVisible = true;
      }

    }


  };

  $scope.voiceSpeech = function(voice){

    if (window.cordova) {
      TTS
        .speak({
          text: voice,
          locale: 'pt-BR',
          rate: 1.1
        }, function () {
        }, function (reason) {
        });
    }
    else{
      var msg = new SpeechSynthesisUtterance(voice);
      window.speechSynthesis.speak(msg);
    }

  }


});
