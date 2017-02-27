var number = 3; //Количество картинок в папке;
function imgNext() {
	var img = document.getElementById('projectImg').src;
	var numImg = img.slice(87, 88);

	if((numImg.slice(-1)) == 3) {
		document.getElementById('projectImg').src = "images/project/img_1.jpg";
	}
	else {
		num = Number(numImg)+1;
		document.getElementById('projectImg').src = "images/project/img_"+num+".jpg";
	}
}

function imgBack() {
	var img = document.getElementById('projectImg').src;
	var numImg = img.slice(87, 88);

	if((numImg.slice(-1)) == 1) {
		document.getElementById('projectImg').src = "images/project/img_"+number+".jpg";
	}
	else {
		num = Number(numImg)-1;
		document.getElementById('projectImg').src = "images/project/img_"+num+".jpg";
	}
}