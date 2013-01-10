<?php  if ( ! defined('BMICALC_VERSION')) exit('No direct script access allowed');
$widget_place = (isset($widget_place) && $widget_place !='')? $widget_place: 'content';
?>
<!-- BMICalc widget start here -->
<style type="text/css">
.widget-bmi{position:relative;overflow:hidden;margin:10px auto;padding:2%;border-radius:10px;background:#dceaf4;font-family:Times;font-size:16px;font-style:normal;font-variant:normal;font-weight:normal}
.widget-bmi.content{width:460px}.widget-bmi.sidebar{width:160px!important}.widget-bmi.sidebar span.b-bmi-field{clear:both;display:block;width:97%!important;line-height:24px}
.widget-bmi.content span.b-bmi-field{float:left;line-height:32px;margin-right:10px}.widget-bmi.sidebar input.bmi-field{float:right}.widget-bmi.sidebar .bmicalc-btn{display:block!important;margin:10px auto}
.widget-bmi.content .bmicalc-btn{display:inline}.widget-bmi .bmi-field{border:1px solid #CCC;border-radius:5px;padding:2px;line-height:16px;width:4em}
.widget-bmi .b-bmi-field{text-align:center}.widget-bmi .bmi-btn{display:block;padding:5px 14px 6px;border:1px solid #ccc;border-radius:4px;background-color:#e6e6e6;background-image:-webkit-gradient(linear,0 0,0 100%,from(#fff),color-stop(0.25,#fff),to(#e6e6e6));background-image:-webkit-linear-gradient(#fff,#fff .25,#e6e6e6);background-image:-moz-linear-gradient(#fff,#fff .25,#e6e6e6);background-image:-o-linear-gradient(#fff,#fff .25,#e6e6e6);background-image:-ms-linear-gradient(#fff,#fff .25,#e6e6e6);background-image:linear-gradient(#fff,#fff .25,#e6e6e6);background-repeat:no-repeat;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);box-shadow:inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);color:#333;text-shadow:0 1px 1px rgba(255,255,255,0.75);font-size:13px;line-height:normal;cursor:pointer;-webkit-transition:.1s linear all;-moz-transition:.1s linear all;-o-transition:.1s linear all;transition:.1s linear all;-ms-transition:.1s linear all;border-bottom-color:#bbb;clear:both}
.widget-bmi .bmi-btn-style{border-color:#5493a4 #5493a4 hsl(193,32%,41.5%);background-color:hsl(193,32%,49%)!important;background-image:-khtml-gradient(linear,left top,left bottom,from(#b8d3da),to(#5493a4));background-image:-webkit-linear-gradient(top,#b8d3da,#5493a4);background-image:-moz-linear-gradient(top,#b8d3da,#5493a4);background-image:-o-linear-gradient(top,#b8d3da,#5493a4);background-image:-ms-linear-gradient(top,#b8d3da,#5493a4);background-image:linear-gradient(top,#b8d3da,#5493a4);-image background-repeat:repeat-x;color:#333!important;text-shadow:0 1px 1px rgba(255,255,255,0.49);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#b8d3da",endColorstr="#5493a4");-webkit-font-smoothing:antialiased}
.widget-bmi .bmi-btn:hover{background-position:0 -15px;color:#333;text-decoration:none}.widget-bmi .bmicalc-conclusion{display:none;color:#454545}.widget-bmi .bmicalc-result{color:#000;font-size:20px}
.widget-bmi .bmicalc-range{color:#F00;font-size:20px}
</style>

 <div class="widget-bmi content <?php echo $widget_place;?>">
	<span class="b-bmi-field">
		Ваш рост (см) <input type="text"  class="bmi-field bmicalc-height" value="">
	</span>
	<span class="b-bmi-field">
			Ваш вес (кг) <input type="text" class="bmi-field bmicalc-weight" value="">
	</span>
	<button class="bmi-btn bmicalc-btn bmi-btn-style">Рассчитать ИМТ</button>
	<hr>
	<p class="bmicalc-conclusion">Ваш индекс массы тела составляет <span class="bmicalc-result">17</span>, это <span  class="bmicalc-range"></span></p>
</div>


<script>
var BMI=(function(){var m=function(u,t,q,p){p=p||false;if(u.addEventListener){u.addEventListener(t,q,p);return true;}else{if(u.attachEvent){var s=u.attachEvent("on"+t,q);
return s;}else{u["on"+t]=q;}}};var a=function(p){p.preventDefault();p.stopPropagation();return false;};var d=function(r,q){var p;try{p=(r.className.match(new RegExp("(\\s|^)"+q+"(\\s|$)"))[0]!==-1)?true:false;
}catch(s){p=false;}return p;};var h=function(q,p){if(!d(q,p)){q.className+=" "+p;return true;}else{return false;}};var b=function(p,q){return p.toFixed(q);
};var i=function(){if(document.getElementsByClassName=="undefined"){document.getElementsByClassName=function(t){var s=new RegExp("(?:^|\\s)"+t+"(?:$|\\s)");
var u=document.getElementsByTagName("*");var r=[];var q;for(var p=0;(q=u[p])!==null;p++){var v=q.className;if(v&&v.indexOf(t)!=-1&&s.test(v)){r.push(q);
}}return r;};}};var g=new RegExp(/^[0-9]\d{0,2}$/);var f=new RegExp(/^[0-9]\d{0,3}(\.\d{1,2})?%?$/);var c=function(r){var q=(r.keyCode?r.keyCode:r.which);
var p=String.fromCharCode(q);var s=this.value;if(q==39||q==37||q==8||q==46||q==9){return true;}if(!g.test(s+p)){a(r);}};var l=function(r){var q=(r.keyCode?r.keyCode:r.which);
var p=String.fromCharCode(q);var s=this.value;if(q==39||q==37||q==8||q==46||q==9||q==190){return true;}if(!f.test(s+p)){a(r);}};var j=function(v){var t=v.target||v.srcElement;
var q=~~n[t.i].weight_el.value;var s=~~n[t.i].height_el.value;if(q===""||q===0||q==="undefined"||s===""||s===0||s==="undefined"){n[t.i].conclusion_el.style.display="none";
return false;}s=s*0.01;var x=s*s;var p=q/x;var u=b(p,1);n[t.i].result_el.innerHTML=u.toString();var r=b(s,2);if(u<=16.49){n[t.i].range_el.innerHTML="выраженный дефицит массы тела";
}if((u>=16.5)&&(u<=18.49)){n[t.i].range_el.innerHTML="недостаточная (дефицит) масса тела";}if((u>=18.5)&&(u<=24.99)){n[t.i].range_el.innerHTML="нормальная масса тела";
}if((u>=25)&&(u<=29.99)){n[t.i].range_el.innerHTML="избыточная масса тела";}if((u>=30)&&(u<=34.99)){n[t.i].range_el.innerHTML="ожирение первой степени";
}if((u>=35)&&(u<=39.99)){n[t.i].range_el.innerHTML="ожирение второй степени";}if(u>=40){n[t.i].range_el.innerHTML="ожирение третьей степени";}n[t.i].conclusion_el.style.display="block";
return false;};var k="widget-bmi";var n=document.getElementsByClassName(k);var e=function(){i();for(var q in n){if(d(n[q],k+"-enable")){continue;}if(!d(n[q],k)){continue;
}var p=n[q].childNodes;n[q].height_el=n[q].getElementsByClassName("bmicalc-height")[0];n[q].weight_el=n[q].getElementsByClassName("bmicalc-weight")[0];
n[q].range_el=n[q].getElementsByClassName("bmicalc-range")[0];n[q].conclusion_el=n[q].getElementsByClassName("bmicalc-conclusion")[0];n[q].result_el=n[q].getElementsByClassName("bmicalc-result")[0];
n[q].btn_el=n[q].getElementsByClassName("bmicalc-btn")[0];n[q].btn_el.i=q;h(n[q],k+"-enable");m(n[q].btn_el,"click",j);m(n[q].height_el,"keydown",c);m(n[q].weight_el,"keydown",l);
}};var o=function(){e();};o();})();
	</script>
<!-- BMICalc widget end here -->