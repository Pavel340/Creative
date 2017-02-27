var number = 3; //Количество картинок в папке;
function imgNext() {
	var numImg = document.getElementById('projectImg').src.slice(-5, -4);

	if((numImg.slice(-1)) == 3) {
		document.getElementById('projectImg').src = "images/project/img_1.jpg";
	}
	else {
		num = Number(numImg)+1;
		document.getElementById('projectImg').src = "images/project/img_"+num+".jpg";
	}
}

function imgBack() {
	var numImg = document.getElementById('projectImg').src.slice(-5, -4);
	
	if(numImg == '1') {
		document.getElementById('projectImg').src = "images/project/img_"+number+".jpg";
	}
	else {
		num = Number(numImg)-1;
		document.getElementById('projectImg').src = "images/project/img_"+num+".jpg";
	}
}
