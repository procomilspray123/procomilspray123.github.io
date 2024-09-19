//  The addEventListener() method is not supported in Internet Explorer 8 and earlier versions.
//document.getElementById("buy").addEventListener("click", lnkAction);
document.getElementById("buy").onclick = function() {lnkAction()};
function lnkAction() {
    window.location = document.getElementById("buy").getAttribute("data-lnk");	
	return false;
}