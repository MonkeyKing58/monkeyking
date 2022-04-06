function generateSquares(vertex,polyIndex) {

    var Squares = Array.from(Array(49), () => new Array(4));

    var vtx = [0,1,2,3];

    for(i=0;i<49;i++){
        Squares[i][0] = i + Math.floor(i/5);
        Squares[i][1] = i + 1 + Math.floor(i/5);
        Squares[i][2] = i + 7 + Math.floor(i/5);
        Squares[i][3] = i + 6 + Math.floor(i/5);
    }

    vtx[0] = Squares[polyIndex][0];
    vtx[1] = Squares[polyIndex][1];
    vtx[2] = Squares[polyIndex][2];
    vtx[3] = Squares[polyIndex][3];

    var newPoly = vertex[vtx[0]].x + "," + vertex[vtx[0]].y + " " +
                  vertex[vtx[1]].x + "," + vertex[vtx[1]].y + " " +
                  vertex[vtx[2]].x + "," + vertex[vtx[2]].y + " " +
                  vertex[vtx[3]].x + "," + vertex[vtx[3]].y;

    console.log(polyIndex+"|"+newPoly);

    return newPoly;
  }
  function generatePoints(vertex,polyIndex,variant) {
    var vtx = [1,2,3];

    var Triangles = [
      /*0*/ [0,1,3],
      /*1*/ [0,3,4],
      /*2*/ [3,4,5],
      /*3*/ [1,2,3],
      /*4*/ [2,3,5],
      /*5*/ [4,5,7],
      /*6*/ [4,6,7],
      /*7*/ [7,8,9],
      /*8*/ [7,9,11],
      /*9*/ [5,7,11],

      /*10*/[2,5,11],
      /*11*/[2,10,11],
      /*12*/[9,11,12],
      /*13*/[11,12,14],
      /*14*/[10,11,14],
      /*15*/[12,13,14],
      /*16*/[13,14,18],
      /*17*/[13,18,40],
      /*18*/[16,18,40],
      /*19*/[15,16,40],

      /*20*/[15,16,17],
      /*21*/[14,18,19],
      /*22*/[18,19,20],
      /*23*/[18,20,21],
      /*24*/[16,18,21],
      /*25*/[16,21,22],
      /*26*/[16,17,22],
      /*27*/[17,22,23],
      /*28*/[22,23,26],
      /*29*/[22,25,26],

      /*30*/[21,22,25],
      /*31*/[20,21,25],
      /*32*/[20,24,25],
      /*33*/[19,20,24],
      /*34*/[10,14,19],
      /*35*/[10,19,27],
      /*36*/[19,24,28],
      /*37*/[19,27,28],
      /*38*/[27,28,29],
      /*39*/[28,29,31],

      /*40*/[29,30,31],
      /*41*/[24,25,33],
      /*42*/[25,32,33],
      /*43*/[32,33,35],
      /*44*/[33,34,35],
      /*45*/[25,26,32],
      /*46*/[26,32,36],
      /*47*/[26,36,37],
      /*48*/[36,37,39],
      /*49*/[36,38,39]
  ];

    vtx[0] = Triangles[polyIndex][0];
    vtx[1] = Triangles[polyIndex][1];
    vtx[2] = Triangles[polyIndex][2];

    var newPoly = vertex[vtx[0]].x + "," + vertex[vtx[0]].y + " " +
                  vertex[vtx[1]].x + "," + vertex[vtx[1]].y + " " +
                  vertex[vtx[2]].x + "," + vertex[vtx[2]].y;

    console.log(polyIndex+"|"+newPoly);

    return newPoly;
  }

  function generateNewVertex(vtx,index,x) {
    if (x)
      return vtx[index].x;
    else
      return vtx[index].y
  }

new Vue({
      el: "#video_poly",
      data: function() {

        var vtx_start = [
          /*0*/{ x: 17, y: 5},
          /*1*/{ x: 30, y: 5},
          /*2*/{ x: 43, y: 5},
          /*3*/{ x: 56, y: 5},
          /*4*/{ x: 69, y: 5},
          /*5*/{ x: 82, y: 5},
          /*6*/{ x: 17, y: 18},
          /*7*/{ x: 30, y: 18},
          /*8*/{ x: 43, y: 18},
          /*9*/{ x: 56, y: 18},
          /*10*/{ x: 69, y: 18},
          /*11*/{ x: 82, y: 18},
          /*12*/{ x: 17, y: 31},
          /*13*/{ x: 30, y: 31},
          /*14*/{ x: 43, y: 31},
          /*15*/{ x: 56, y: 31},
          /*16*/{ x: 69, y: 31},
          /*17*/{ x: 82, y: 31},
          /*18*/{ x: 17, y: 44},
          /*19*/{ x: 30, y: 44},
          /*20*/{ x: 43, y: 44},
          /*21*/{ x: 56, y: 44},
          /*22*/{ x: 69, y: 44},
          /*23*/{ x: 82, y: 44},
          /*24*/{ x: 17, y: 57},
          /*25*/{ x: 30, y: 57},
          /*26*/{ x: 43, y: 57},
          /*27*/{ x: 56, y: 57},
          /*28*/{ x: 69, y: 57},
          /*29*/{ x: 82, y: 57},
          /*30*/{ x: 17, y: 70},
          /*31*/{ x: 30, y: 70},
          /*32*/{ x: 43, y: 70},
          /*33*/{ x: 56, y: 70},
          /*34*/{ x: 69, y: 70},
          /*35*/{ x: 82, y: 70},
          /*36*/{ x: 17, y: 83},
          /*37*/{ x: 30, y: 83},
          /*38*/{ x: 43, y: 83},
          /*39*/{ x: 56, y: 83},
          /*40*/{ x: 69, y: 83},
          /*41*/{ x: 82, y: 83},
          /*42*/{ x: 17, y: 96},
          /*43*/{ x: 30, y: 96},
          /*44*/{ x: 43, y: 96},
          /*45*/{ x: 56, y: 96},
          /*46*/{ x: 69, y: 96},
          /*47*/{ x: 82, y: 96}
        ];

        var vtx_uno = [
          /*0*/{ x: 30, y: 5},
          /*1*/{ x: 30, y: 5},
          /*2*/{ x: 43, y: 5},
          /*3*/{ x: 56, y: 5},
          /*4*/{ x: 69, y: 5},
          /*5*/{ x: 69, y: 5},
          /*6*/{ x: 30, y: 18},
          /*7*/{ x: 30, y: 18},
          /*8*/{ x: 43, y: 18},
          /*9*/{ x: 56, y: 18},
          /*10*/{ x: 69, y: 18},
          /*11*/{ x: 69, y: 18},
          /*12*/{ x: 30, y: 31},
          /*13*/{ x: 30, y: 31},
          /*14*/{ x: 43, y: 31},
          /*15*/{ x: 56, y: 31},
          /*16*/{ x: 69, y: 31},
          /*17*/{ x: 69, y: 31},
          /*18*/{ x: 43, y: 31},
          /*19*/{ x: 43, y: 31},
          /*20*/{ x: 43, y: 44},
          /*21*/{ x: 56, y: 44},
          /*22*/{ x: 69, y: 44},
          /*23*/{ x: 69, y: 44},
          /*24*/{ x: 43, y: 57},
          /*25*/{ x: 43, y: 57},
          /*26*/{ x: 43, y: 57},
          /*27*/{ x: 56, y: 57},
          /*28*/{ x: 69, y: 57},
          /*29*/{ x: 69, y: 57},
          /*30*/{ x: 43, y: 70},
          /*31*/{ x: 43, y: 70},
          /*32*/{ x: 43, y: 70},
          /*33*/{ x: 56, y: 70},
          /*34*/{ x: 69, y: 70},
          /*35*/{ x: 69, y: 70},
          /*36*/{ x: 43, y: 83},
          /*37*/{ x: 43, y: 83},
          /*38*/{ x: 43, y: 83},
          /*39*/{ x: 56, y: 83},
          /*40*/{ x: 69, y: 83},
          /*41*/{ x: 69, y: 83},
          /*42*/{ x: 43, y: 96},
          /*43*/{ x: 43, y: 96},
          /*44*/{ x: 43, y: 96},
          /*45*/{ x: 56, y: 96},
          /*46*/{ x: 69, y: 96},
          /*47*/{ x: 69, y: 96}
        ];

        var vtx_dos = [
          /*0*/{ x: 17, y: 5},
          /*1*/{ x: 30, y: 5},
          /*2*/{ x: 43, y: 5},
          /*3*/{ x: 56, y: 5},
          /*4*/{ x: 69, y: 5},
          /*5*/{ x: 82, y: 5},
          /*6*/{ x: 17, y: 18},
          /*7*/{ x: 30, y: 18},
          /*8*/{ x: 43, y: 18},
          /*9*/{ x: 56, y: 18},
          /*10*/{ x: 69, y: 18},
          /*11*/{ x: 82, y: 18},
          /*12*/{ x: 17, y: 31},
          /*13*/{ x: 30, y: 31},
          /*14*/{ x: 43, y: 31},
          /*15*/{ x: 56, y: 31},
          /*16*/{ x: 69, y: 31},
          /*17*/{ x: 82, y: 31},
          /*18*/{ x: 43, y: 44},
          /*19*/{ x: 43, y: 44},
          /*20*/{ x: 43, y: 44},
          /*21*/{ x: 56, y: 44},
          /*22*/{ x: 69, y: 44},
          /*23*/{ x: 82, y: 44},
          /*24*/{ x: 17, y: 57},
          /*25*/{ x: 30, y: 57},
          /*26*/{ x: 43, y: 57},
          /*27*/{ x: 56, y: 57},
          /*28*/{ x: 69, y: 57},
          /*29*/{ x: 82, y: 57},
          /*30*/{ x: 17, y: 70},
          /*31*/{ x: 30, y: 70},
          /*32*/{ x: 43, y: 70},
          /*33*/{ x: 56, y: 70},
          /*34*/{ x: 69, y: 70},
          /*35*/{ x: 82, y: 70},
          /*36*/{ x: 17, y: 83},
          /*37*/{ x: 30, y: 83},
          /*38*/{ x: 43, y: 83},
          /*39*/{ x: 56, y: 83},
          /*40*/{ x: 69, y: 83},
          /*41*/{ x: 82, y: 83},
          /*42*/{ x: 17, y: 96},
          /*43*/{ x: 30, y: 96},
          /*44*/{ x: 43, y: 96},
          /*45*/{ x: 56, y: 96},
          /*46*/{ x: 69, y: 96},
          /*47*/{ x: 82, y: 96}
        ];

        var defaultVertex = 48;
        var defaultPoly = 35;
        var updateRadius = 1;

        var vertex = vtx_start;

        var poly = Array.apply(null, { length: defaultPoly }).map(
          function(path,index) {
            return { path: generateSquares(vertex,index,0) }
          }
        );

        return {
          vertex: vertex,
          vtx_uno: vtx_uno,
          vtx_dos: vtx_dos,
          updateInterval: 1000,
          updateRadius: updateRadius,
          poly: poly,
          variant:0
        };
      },
      methods: {
        changeImage(digit) {

          var vm = this;
          var vtx = this.vtx_start;

          switch(digit){
            case 1: { vtx = this.vtx_uno;    break; }
            case 2: { vtx = this.vtx_dos;    break; }
            case 3: { vtx = this.vtx_tres;   break; }
            case 4: { vtx = this.vtx_quadro; break; }
            case 5: { vtx = this.vtx_sinka;  break; }
            default: break;
          }

          this.vertex.forEach(function(element,index) {
            TweenLite.to(element, vm.updateInterval / 1000, {
              x: generateNewVertex(vtx,index,1),
              y: generateNewVertex(vtx,index,0)
            });
          });

          this.poly.forEach(function(element,index,) {
            TweenLite.to(element, vm.updateInterval / 1000, {
              path: generateSquares(vtx,index)
            });
          });

        }
      }
});


/*
new Vue({
      el: "#video_poly",
      data: function() {

        var defaultStars = 2;
        var updateInterval = 2500;

        var points_square = [
          /*0*/{ x: 25, y: 25 },
          /*1*/{ x: 75, y: 25 },
          /*2*/{ x: 75, y: 75 },
          /*3*/{ x: 25, y: 75 }
        ];

        var currentPath = Array.apply(null, { length: defaultStars }).map(
          function(el,index) {
            return Math.ceil(Math.random()*4)-1;
          }
        );

        var counter = Array.apply(null, { length: defaultStars }).map(
          function() {
            return 0;
          }
        );

        var star = Array.apply(null, { length: defaultStars }).map(
          function(el,index) {

            var pointStart = currentPath[index],
                pointEnd = currentPath[index] + 1,
                xStart = 0,
                yStart = 0;

            if (pointEnd == 4) pointEnd = 0;

            if (points_square[pointStart].x < points_square[pointEnd].x)
              xStart = points_square[pointStart].x;
            else
              xStart = points_square[pointEnd].x;

            if (points_square[pointStart].y < points_square[pointEnd].y)
              yStart = points_square[pointStart].y;
            else
              yStart = points_square[pointEnd].y;

            var x = Math.ceil(xStart + Math.random()*Math.abs(points_square[pointEnd].x - points_square[pointStart].x));

            if(points_square[pointEnd].x - points_square[pointStart].x)
              var y = ( points_square[pointEnd].y*(x - points_square[pointStart].x) - points_square[pointStart].y*(x - points_square[pointEnd].x) ) / (points_square[pointEnd].x - points_square[pointStart].x);
            else
              var y = Math.ceil(yStart + Math.random()*(Math.abs(points_square[pointStart].y - points_square[pointEnd].y)));

            return{
              x: x,
              y: y
            }
          }
        );

        return {
          points_square: points_square,
          star: star,
          updateInterval: 1000,
          updateInterval: updateInterval,
          interval: null,
          currentPath: currentPath,
          switcher: Math.random(),
          counter : counter
        }
      },
      watch: {
        currentPath: function() {
          var vm = this;
          var duration = this.updateInterval;
          this.star.forEach(function(element,index) {
            if(!vm.counter[index]) {
              duration = 10000;
              vm.counter[index]+=1;
            }
            TweenLite.to(element, duration / 1000, {
              x: vm.points_square[vm.currentPath[index]].x,
              y: vm.points_square[vm.currentPath[index]].y,
              ease:Linear.easeNone
            });
          });
        }
      },
      mounted: function() {
        //this.resetInterval();
      },
      methods: {
        resetInterval: function() {
          var vm = this;
          clearInterval(this.interval);
          this.interval = setInterval(function() {
            vm.nextPath();
            vm.switcher = Math.random();
          }, this.updateInterval);
        },
        nextPath: function() {
          var vm = this;
          this.currentPath.forEach(function(element,index) {
            if (element == 0) vm.currentPath[index] = 1;
            else if (element == 1) vm.currentPath[index] = 2;
            else if (element == 2) vm.currentPath[index] = 3;
            else if (element == 3) vm.currentPath[index] = 0;
          });
        }
      }
});*/