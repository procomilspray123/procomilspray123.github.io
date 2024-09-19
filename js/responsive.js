function doOnOrientationChange() {

	var tWidth = document.documentElement.clientWidth;
	var tHeight = document.documentElement.clientHeight;
	//alert("tWidth: " + tWidth + " - tHeight: " + tHeight);
	//switch(window.orientation) { 
	//	case -90:
	//	case 90:
		//alert('landscape');
		//
		var buttonBuy = $('body.fr #content #buy').text();
		if (tWidth <= 1480 && tWidth > 396) {				
			//alert(buttonBuy);
			$('body.fr #content #buy').empty();
			$('body.fr #content #buy').append('<i class="icon-basket"></i>Acheter le STUD100 !');
			
			$('body.en #content #buy').empty();
			$('body.en #content #buy').append('<i class="icon-basket"></i>Buy STUD100 now !');
		} else if (tWidth <= 396) {
			$('body.fr #content #buy').empty();
			$('body.fr #content #buy').append('<i class="icon-basket"></i>Acheter');
			
			$('body.en #content #buy').empty();
			$('body.en #content #buy').append('<i class="icon-basket"></i>Buy');
		} else {
			$('body.fr #content #buy').empty();
			$('body.fr #content #buy').append('<i class="icon-basket"></i>Acheter le STUD100 maintenant !');
			
			$('body.en #content #buy').empty();
			$('body.en #content #buy').append('<i class="icon-basket"></i>Buy STUD100 now !');
		}
		
	//	break;
	//	default:
		//alert('portrait');		
		//


	//	break;
	//}
}

//window.attachEvent('orientationchange', doOnOrientationChange);
//window.addEventListener('orientationchange', doOnOrientationChange);

if (window.attachEvent) {
    window.attachEvent('onresize', doOnOrientationChange);
	//window.attachEvent('orientationchange', doOnOrientationChange);
}
else if (window.addEventListener) {
    window.addEventListener('resize', doOnOrientationChange, false);
	window.addEventListener('orientationchange', doOnOrientationChange, false);
}
else {
    //The browser does not support Javascript event binding
}


/*
if (window.addEventListener) {
	window.addEventListener("resize", doOnOrientationChange, false);
} else if (window.attachEvent) {
	window.attachEvent("onresize", doOnOrientationChange);
}
*/

// Initial execution if needed
doOnOrientationChange();
	
function landscapeSize() {
}
function portraitSize() {
}




