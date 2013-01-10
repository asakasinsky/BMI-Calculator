
var bmi = [];
var x = [], y1 = [], y2 = [], y3 = [], y4 = [], y5 = [], y6 = [], y7 = [], weight = [], height = [];
window.onload = function () {
              console.time("Execution time took");


                var r = Raphael("holder"),
                    txtattr = { font: "12px sans-serif" };
                
                
                var minimum = 300;
              var points;
              var range;
                for (var i = minimum; i < 1600; i++) {
                    weight[i-minimum] = roundNumber(i * 0.1,1) ;
                    x[i-minimum] = i-minimum;
                }
                  
                minimum = 130;

                 for (var i = minimum; i < 230; i++) {
                    height[i-minimum] = roundNumber(i * 0.01, 2) ;
                 
                }
              
              for (var w in weight) {
                for (var h in height) {
                  var hSq =  height[h] * height[h];
                    var bmiRaw = weight[w] / hSq;
                
                    
                
                    var bmiRounded = roundNumber(bmiRaw,1);
                    var index = bmi.length;
                  var point = {};
                  point.value = bmiRounded;
                  point.x = ~~(weight[w]/0.1) - 300;
                  point.y = ~~(height[h]/0.01);
                  bmi[index] = point;
                    //console.log(bmiRounded);

                }
              }

              
              //  Calculate graphs
              y1 = calcRange(y1, 16.5);
              y2 = calcRange(y2, 18.5);
              y3 = calcRange(y3, 25);
              y4 = calcRange(y4, 30);
              y5 = calcRange(y5, 35);
              y6 = calcRange(y6, 40); 
              
  
              
             
              

              
               console.timeEnd("Execution time took");
               
                r.linechart(10, 0, 537, 180, x, [y1, y2, y3, y4, y5, y6] , { axis: "0 0 1 1",nostroke: true, shade: true, smooth: true });
               
            };
function roundNumber(num, dec) {
  return num.toFixed(dec);
}

function calcRange(arry, range) {
  
  var points = bmi.filter(function(item) {
    return item.value == range;
  });
  
  var temp;
  var prev = 130;
  for (var i in x){
    temp = true;
    for (var p in points) {
      if (x[i] == points[p].x) {
        temp = false;
        arry[i] = points[p].y;
        prev = arry[i];
        continue;
      }
    }
    if (temp===true) {
      
      arry[i] = prev;
    }
    
  }
  console.log(range);
  return arry;
}


