var BMI = (function(){

    var bindEvent = function (elem,evType, fn, useCapture) {
          useCapture = useCapture || false;
          if (elem.addEventListener) {
             elem.addEventListener(evType, fn, useCapture);
             return true;
          }   else if (elem.attachEvent)   {
             var r = elem.attachEvent('on' + evType, fn);
             return r;
          }   else   {
             elem['on' + evType] = fn;
          }
       };

    var stopEvent = function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    };
  
    var hasClass = function (el,cls) {
            var result;
            try {
              result = (el.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'))[0] !== -1)? true: false;
                
            } catch (e) {
                result = false;
            }
            
          return result;
        };

    var addClass = function (el,cls) {
      if (!hasClass(el,cls)) {
          el.className += " "+cls;
          return true;
      } else {
          return false;
      }
    };

    var roundNumber = function (num, dec) {
        return num.toFixed(dec);
    };


    var getElementsByClassName_Fix = function(){
        if (document.getElementsByClassName == 'undefined')
        {
            document.getElementsByClassName = function(className)
            {
                var hasClassName = new RegExp("(?:^|\\s)" + className + "(?:$|\\s)");
                var allElements = document.getElementsByTagName("*");
                var results = [];
                var element;
                for (var i = 0; (element = allElements[i]) !== null; i++)
                {
                    var elementClass = element.className;
                    if (elementClass && elementClass.indexOf(className) != -1 && hasClassName.test(elementClass))
                    results.push(element);
                }
                return results;
            };
        }
    };

    var height_ptrn = new RegExp(/^[0-9]\d{0,2}$/);
    var weight_ptrn = new RegExp(/^[0-9]\d{0,3}(\.\d{1,2})?%?$/);
  
    var heightVerify = function(e){
          var keyCode = (e.keyCode ? e.keyCode : e.which);
          var lastChar = String.fromCharCode(keyCode);
          var val = this.value;
          if(keyCode==39||keyCode==37||keyCode==8||keyCode==46||keyCode==9) return true;
          if(!height_ptrn.test(val+lastChar)) stopEvent(e);
      };

   var weightVerify = function(e){
          var keyCode = (e.keyCode ? e.keyCode : e.which);
          var lastChar = String.fromCharCode(keyCode);
          var val = this.value;
          if(keyCode==39||keyCode==37||keyCode==8||keyCode==46||keyCode==9||keyCode==190) return true;
          if(!weight_ptrn.test(val+lastChar)) stopEvent(e);
      };
  
    var clickHandler = function (e){
        var el = e.target||e.srcElement;
        var w = ~~widgets[el.i].weight_el.value;
        var h = ~~widgets[el.i].height_el.value;

        if ( w === '' || w === 0 || w === 'undefined' || h === '' || h === 0 || h === 'undefined' ) {
            widgets[el.i].conclusion_el.style.display = "none";
            return false;
        }
         h=h*0.01;
        //bmi calculation
        var hSq = h * h;
        var bmiRaw = w / hSq;
        var bmiRounded = roundNumber(bmiRaw,1);
        widgets[el.i].result_el.innerHTML = bmiRounded.toString();
        var hRounded = roundNumber(h,2);


        // 16,49 и менее - Выраженный дефицит массы тела
        if (bmiRounded <= 16.49) {
          widgets[el.i].range_el.innerHTML = "выраженный дефицит массы тела";
        }

        // 16,5—18,49    Недостаточная (дефицит) масса тела
        if ((bmiRounded >= 16.5) && (bmiRounded <= 18.49)) {
          widgets[el.i].range_el.innerHTML = "недостаточная (дефицит) масса тела";
        }

        // 18,5—24,99    Норма
        if ((bmiRounded >= 18.5) && (bmiRounded <= 24.99)) {
          widgets[el.i].range_el.innerHTML = "нормальная масса тела";
        }

        // 25—29,99       Избыточная масса тела
        if ((bmiRounded >= 25) && (bmiRounded <= 29.99)) {
          widgets[el.i].range_el.innerHTML = "избыточная масса тела";
        }

        // 30—34,99       Ожирение первой степени
        if ((bmiRounded >= 30) && (bmiRounded <= 34.99)) {
          widgets[el.i].range_el.innerHTML = "ожирение первой степени";
        }

        // 35—39,99       Ожирение второй степени
        if ((bmiRounded >= 35) && (bmiRounded <= 39.99)) {
          widgets[el.i].range_el.innerHTML = "ожирение второй степени";
        }

        // 40 и более      Ожирение третьей степени
        if (bmiRounded >= 40) {
          widgets[el.i].range_el.innerHTML = "ожирение третьей степени";
        } 

        
        widgets[el.i].conclusion_el.style.display = "block";

        return false;
      };

    var widget_class = 'widget-bmi';
    var widgets = document.getElementsByClassName(widget_class);
    

    var widget = function(){
        getElementsByClassName_Fix();

        for (var el in widgets) {
            //console.log( widgets[el]);
            if( hasClass(widgets[el], widget_class+'-enable')) continue;

            // FIXME: Потому что getElementsByClassName возвращает в наборе всякую хрень
            if( !hasClass(widgets[el], widget_class) ) continue;

            var childElms = widgets[el].childNodes;

            widgets[el].height_el = widgets[el].getElementsByClassName('bmicalc-height')[0];
            widgets[el].weight_el = widgets[el].getElementsByClassName('bmicalc-weight')[0];
            widgets[el].range_el = widgets[el].getElementsByClassName('bmicalc-range')[0];
            widgets[el].conclusion_el = widgets[el].getElementsByClassName('bmicalc-conclusion')[0];
            widgets[el].result_el = widgets[el].getElementsByClassName('bmicalc-result')[0];
            widgets[el].btn_el = widgets[el].getElementsByClassName('bmicalc-btn')[0];
            widgets[el].btn_el.i = el;
            
            addClass(widgets[el],widget_class+'-enable');

            bindEvent( widgets[el].btn_el,'click',clickHandler);
            bindEvent(widgets[el].height_el,'keydown', heightVerify);
            bindEvent(widgets[el].weight_el,'keydown', weightVerify);
        }


    };

  var init = function () {
    widget();
  };
    init();

})();
