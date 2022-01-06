
 var str="";
 let x=1.0;
 let y=1.0; // 100%

function hide_dev() {
  //var i=0;
    for(var i in arguments){
         document.getElementById(arguments[i]).style.display = "none";
    }
}
function visible_dev() {
  //var i=0;
    for(var i in arguments){
        document.getElementById(arguments[i]).style.display = "block";
    }
}


function start() {
    str="scena-0";
	//visible_dev('scena-4');
	// hide_dev('scena-0');

}
function j() {
    hide_dev('scena-0','scena-2','scena-3','scena-4','scena-5');
    visible_dev('scena-1');
    str="scena-1";
//window.scrollTo(0, 0);
document.documentElement.scrollTop = 1;
//document.body.scrollTop = 1;
}
function m() {
    hide_dev('scena-0','scena-1','scena-3','scena-4','scena-5');
	 visible_dev('scena-2');
	 //document.body.scrollTop = 1; // For Safari
	 //window.scrollTo(0, 0);
    document.documentElement.scrollTop = 1; // 
   str="scena-2";
  
}
function n() {
    hide_dev('scena-0','scena-1','scena-2','scena-4','scena-5');
	 visible_dev('scena-3');
	 //document.body.scrollTop = 1; // For Safari
  document.documentElement.scrollTop = 1; // 
   str="scena-3";
}
function l() {
	 hide_dev('scena-0','scena-1','scena-2','scena-3','scena-5');
    visible_dev('scena-4');
   document.body.scrollTop = 1; // For Safari
 // document.documentElement.scrollTop = 1; // 
  //window.scrollTo(0, 0);
   str="scena-4";
} 
function k() {
    hide_dev('scena-0','scena-1','scena-2','scena-3','scena-4');
    visible_dev('scena-5');
    //document.body.scrollTop = 1; // For Safari
  document.documentElement.scrollTop = 1; // 
   str="scena-5";
} 
function goTop() {
    //document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
//visible_dev('scena-0');
}

 
 

 
function zoomPlus() {
  
  //var objHtml = document.getElementById('scena-0');
  //var zoom = parseInt(objHtml.style.zoom) + 30 +'%';
  //objHtml.style.zoom = zoom;// chromiun ok
  //document.firstElementChild.style.zoom = 0.85; 
    x=x+0.05;
    var objHtml = document.getElementById(str);
    objHtml.style.transform="scale("+x+","+y+")";
   return false;
}


function zoomMinus() {
   
     x=x-0.05;
     var objHtml = document.getElementById(str);
     objHtml.style.transform="scale("+x+","+y+")";
    return false;
}


var r=360;

function ufo() {
	
	//x=1.0;
	//y=1.0;
	if (r==360) { r=0;} r=r+45;
	
		  // Code for Chrome, Safari, Opera
    document.getElementById(str).style.WebkitTransform = "rotate("+r+"deg)"; 
    // Code for IE9
    document.getElementById(str).style.msTransform = "rotate("+r+"deg)"; 
	
}

function home() {
   
     x=1;
     y=1;
     r=0;
     str="scena-0";
      
    hide_dev('scena-0','scena-1','scena-2','scena-3','scena-4','scena-5');
    visible_dev('scena-0');
    document.documentElement.scrollTop = 0;
    return;
}

