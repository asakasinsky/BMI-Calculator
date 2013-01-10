var x = 30;
var y = 1.3;
var bmiWs;
var bmiHs;
var bmiUnits;

$(document).ready(function() {

    bmiHs = $("#bmicalc_height_slider").slider({
        orientation: "vertical",
        range: "min",
        min: 1.3,
        max: 2.3,
        step: 0.01,
        slide: function( event, ui ) {
            y = ui.value;
            posHeightHandle(); 
            calcBmi();
        },
        start: function(event, ui) {
            calcHeight.show();
        },
        stop: function(event, ui) {
            calcHeight.hide();
            posHeightHandle(); 
        }
    });

    bmiWs = $("#bmicalc_weight_slider").slider({
        range: "min",  
        min: 30,
        max: 160,
        step: 0.1,
        slide: function( event, ui ) {
            x = ui.value;
            posWeightHandle(); 
            calcBmi();
        },
        start: function(event, ui) {
            calcWeight.show();
        },
        change: function(event, ui) {
            calcWeight.hide();
            posWeightHandle();
        }
    });

    //get the weight value
    function calcBmi() {

        var w = x;
        var h = y;

    //bmi calculation
    var hSq = h * h;
    var bmiRaw = w / hSq;

    function roundNumber(num, dec) {
        return num.toFixed(dec);
    }

    var bmiRounded = roundNumber(bmiRaw,1);

    $(".bmi-no").html(bmiRounded);

    //set indicator text
    var bmiRange = $("#bmicalc-range");



    var hRounded = roundNumber(h,2);


    //console.log("height in meters is " + hRounded + " height in feet is " + hFeetRounded + " weight in Kgs is " + w + " weight in stones is " + wStoneRounded);

    var kg = roundNumber(w,1);
    //weight and measures kg and meters

    calcWeight.html(kg + "кг");
    calcHeight.html(hRounded + "м");

    // 16,49 и менее - Выраженный дефицит массы тела
     if (bmiRounded <= 16.49) {
        bmiRange.html("выраженный дефицит массы тела");
        // Показываем блок текста
        // остальные блоки скрываем
    } 

    // 16,5—18,49    Недостаточная (дефицит) масса тела
     if ((bmiRounded >= 16.5) && (bmiRounded <= 18.49)) {
        bmiRange.html("недостаточная (дефицит) масса тела");
        // Показываем блок текста
        // остальные блоки скрываем
    } 
 
     // 18,5—24,99    Норма
     if ((bmiRounded >= 18.5) && (bmiRounded <= 24.99)) {
        bmiRange.html("нормальная масса тела");
        // Показываем блок текста
        // остальные блоки скрываем
    }     

     // 25—29,99       Избыточная масса тела
     if ((bmiRounded >= 25) && (bmiRounded <= 29.99)) {
        bmiRange.html("избыточная масса тела");
        // Показываем блок текста
        // остальные блоки скрываем
    }  

     // 30—34,99       Ожирение первой степени
     if ((bmiRounded >= 30) && (bmiRounded <= 34.99)) {
        bmiRange.html("ожирение первой степени");
        // Показываем блок текста
        // остальные блоки скрываем
    }  

     // 35—39,99       Ожирение второй степени
     if ((bmiRounded >= 35) && (bmiRounded <= 39.99)) {
        bmiRange.html("ожирение второй степени");
        // Показываем блок текста
        // остальные блоки скрываем
    } 

     // 40 и более      Ожирение третьей степени
     if (bmiRounded >= 40) {
        bmiRange.html("ожирение третьей степени");
        // Показываем блок текста
        // остальные блоки скрываем
    } 


    }


    var calcHeight = $("#calc-height");
    var calcWeight = $("#calc-weight");
    var bmiResult = $("#bmicalc-gi-result");
    var giInd = $("#bmicalc-gi-indicator");

    //position the indicators to follow the height slider
    function posHeightHandle() {
        var handlePos = ~~$("#bmicalc_height_slider .ui-slider-handle").position().top;
        giInd.css("top", handlePos + 6);
        bmiResult.css("top", handlePos - 25);
        calcHeight.css("top", handlePos - 14);
    }

    //position the indicators to follow the weight slider
    function posWeightHandle() {
        var handlePos = ~~$("#bmicalc_weight_slider .ui-slider-handle").position().left;

        giInd.css("left", handlePos - 3);
        bmiResult.css("left", handlePos + 10);
        calcWeight.css("left", handlePos + 16);
    }

    //set the position of the bmi graph indicator
    posHeightHandle();
    posWeightHandle();
    calcBmi();





});