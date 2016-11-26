// function createCoin(coin){
// 	var ran = Math.floor(Math.random() * 3) + 1;
// 	if(ran==1)coin='Y';
// 	else if(ran==2)coin='W';
// 	else coin='C';
// 	var contrainer = document.createElement('contrainer');
// 	var y = document.getElementById(coin).getContext("2d");
// 	if(coin=='Y')
// 		var color = "#D22E36";
// 	else if(coin=='W')
// 		var color = "#2CAB3B";
// 	else if(coin=='C')
// 		var color = "#416AED";

// 	y.arc(50,50,49,0,2*Math.PI);
// 	// y.strokeStyle = color;
// 	// y.stroke();

// 	y.fillStyle = color;
// 	y.fill();

// 	y.font = "70px bold";
// 	y.fillStyle = 'white';

// 	if(coin=='W')
// 		y.fillText(coin,18,78);
// 	else 
// 		y.fillText(coin,25,75);
// }
// function createBin(){
// 	var y = document.getElementById('bin').getContext("2d");
// 	y.rect(0,0,200,100);
// 	y.fillStyle = 'green';
// 	y.fill();
// }
// function right(){
// 	keydown(39);
// }
// function left(){
// 	keydown(37);
// }
// function keydown(e){
// 	var bin = document.getElementById('div-bin');
// 	var char = event.which || event.keyCode;
// 	var movement = 20;
// 	// while(event.which || event.keyCode){
// 		if(char==37 || e==37){
// 			if(bin.offsetLeft-movement<0)return;
// 			var move = -movement;
// 		}
// 		else if(char==39 || e==39){
// 			var move = movement;
// 		}

// 		bin.style.left = (bin.offsetLeft + move) +'px';
// 	// }
// }
// function move(id) {
//    	var coin = document.getElementById(id);
//    	coin.style.top = (coin.offsetTop + 10) +'px';
//    	console.log(coin.style.top)
// }

