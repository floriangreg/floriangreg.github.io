
 let str="";
 let x=1.0;
 let y=1.0; // 100%
 var v=0;
 var w = window.innerWidth;
 var h = window.innerHeight;
 var size = "Width: " + w + ", " + "Height: " + h;
 var r=0;
// Attaching the event listener function to window's resize event
  window.addEventListener("resize", displayWindowSize);
  //window.addEventListener("click", displayWindowClick);
    
  document.getElementById("foot").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " Autor: Florian Greg.</p>";  
    
    
    
    
  // Defining event listener function
    function displayWindowSize() {
    	
     w = window.innerWidth;
     h = window.innerHeight;
     size = "Width: " + w + ", " + "Height: " + h;
     //document.getElementById("result").innerHTML = size;
     if ( w < 1290 ) {
     	document.getElementById("menu").style.display="none";
     	document.getElementById("m-menu").style.display="block";
     	v=0;
     } else {
     	  document.getElementById("menu").style.display="block";
     	  document.getElementById("m-menu").style.display="none";
     	  v=1;
       }
    }   
 
    
function hide_dev() {
  //let i=0;
    for(let i in arguments){
         document.getElementById(arguments[i]).style.display = "none";
    }
}
function visible_dev() {
  //let i=0;
   
    for(let i in arguments){
        document.getElementById(arguments[i]).style.display = "block";
    }
}



function minmenu(v) {
	if (this.v==0) {
		document.getElementById("menu").style.display="block";
		this.v=1;
		return this.v;
	}
	if (this.v==1) {
		document.getElementById("menu").style.display="none";
	   this.v=0;
		return this.v;
	}
}

function start() {
    str="scena-0";
    document.getElementById("foot").innerHTML ="Autor Florian Greg 🖌️ " + new Date().getFullYear() + " </p>"; 
    //document.getElementById("foot").innerHTML ="<p>&copy;  " + new Date().getFullYear() + " Autor Florian Greg.</p>";  
    visible_dev('scena-0');
	// hide_dev('scena-0');
	 
//document.getElementById("result").innerHTML = size;
if ( w < 1400 ) {
     	document.getElementById("menu").style.display="none";
     	document.getElementById("m-menu").style.display="block";
     	v=0;
     	//visible_dev('scena-1','scena-2','scena-3','scena-4','scena-5');
     }else {
     	document.getElementById("m-menu").style.display="none";
     }
}



function j() {
    
    hide_dev('scena-0','scena-2','scena-3','scena-4','scena-5');
    visible_dev('scena-1');
    str="scena-1";
//window.scrollTo(0, 0);
document.documentElement.scrollTop = 1;

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
   document.documentElement.scrollTop = 1;
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
  
  //let objHtml = document.getElementById('scena-0');
  //let zoom = parseInt(objHtml.style.zoom) + 30 +'%';
  //objHtml.style.zoom = zoom;// chromiun ok
  //document.firstElementChild.style.zoom = 0.85; 
    x=x+0.10;
    y=y+0.05;
    let objHtml = document.getElementById(str);
    objHtml.style.transform="scale("+x+","+y+")";
   return;
}


function zoomMinus() {
   
     x=x-0.10;
     y=y-0.05;
     let objHtml = document.getElementById(str);
     objHtml.style.transform="scale("+x+","+y+")";
    return;
}

function home() {
   
     x=1.0;
     y=1.0;
     var rr=0;
     str="scena-0";
     document.getElementById(str).style.WebkitTransform = "rotate("+rr+"deg)"; 
    // Code for IE9
    document.getElementById(str).style.msTransform = "rotate("+rr+"deg)"; 
      
    hide_dev('scena-0','scena-1','scena-2','scena-3','scena-4','scena-5');
    visible_dev('scena-0');
    document.documentElement.scrollTop = 0;
    return;
}






function ufo() {
	
	//x=1.0;
	//y=1.0;
	if (r==360) { r=0;} r=r+180;
	//<!-- if (r==90 )  { document.documentElement.scrollTop =450;} -->
	
	
		  // Code for Chrome, Safari, Opera
    document.getElementById(str).style.WebkitTransform = "rotate("+r+"deg)"; 
    // Code for IE9
    document.getElementById(str).style.msTransform = "rotate("+r+"deg)"; 
	return;
}



