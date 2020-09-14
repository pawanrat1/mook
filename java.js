function myMove(){
	var elem = document.getElementById("myAninmation");
	var pos = 0;
	var id = setInterval(frame, 10);
	function frame(){
		if (pos == 350){
			clearlnterval(id);
		}else{
		pos++;
		elem.style.top = pos + 'px';
		elem.style.left = pos + 'px';
		}
	}
}