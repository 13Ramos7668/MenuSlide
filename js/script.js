///////////////////////////////////////////////
/**
// Author: Abbas
// Creation Date:  1-27-2015
// Revised: N/A
// Note: Short app to slide the front page
// to reveal a dashboard or menu. 
*/
///////////////////////////////////////////////
var openSize = "50rem";
var menuOpen = true;
var hamburger = O("menu");
var contentDiv = O("content");
window.onload = init;
window.onresize = resize;
//========== event handlers
menu.onclick = toggleMenu;
//-------------------------
function init(){
	resize();
	toggleMenu();


}
function resize(){
    S(document.documentElement).fontSize = innerWidth/100 + "px";
}
function toggleMenu(){
	if(menuOpen){
		closeMenu();
	
	}
	else{
		openMenu();
	
	}
	function closeMenu(){
		S("front").width = "100rem";
		menuOpen = false;
	
	
	}
	function openMenu(){
	S("front").width = openSize;
		menuOpen = true;
		
	
	}
}