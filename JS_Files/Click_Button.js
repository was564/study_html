
function changeNumBtn1(){
	var gameNumber = document.getElementById("Game");
	var num = parseInt((+gameNumber.innerText) * 2 + 1);
	gameNumber.innerHTML=num;
	
	clearGame(num);
}

function changeNumBtn2(){
	var gameNumber = document.getElementById("Game");
	var num = parseInt((+gameNumber.innerText) / 3 + 3);
	gameNumber.innerHTML=num;
	
	clearGame(num);
}

function changeNumBtn3(){
	var gameNumber = document.getElementById("Game");
	var num = parseInt((+gameNumber.innerText) % 20 + 4);
	gameNumber.innerHTML=num;
	
	clearGame(num);
}

function changeNumBtn4(){
	var gameNumber = document.getElementById("Game");
	var num = parseInt((+gameNumber.innerText) % 3 + 2);
	gameNumber.innerHTML=num;
	
	clearGame(num);
}

function resetNumBtn(){
	document.getElementById("Game").innerHTML = "0";
}

function clearGame(num){
	if(num != 30) return;
	
	document.getElementById("Game").innerHTML="Game Over";
	
	document.getElementById("resetNumBtn").remove();
	document.getElementById("changeNumBtn1").remove();
	document.getElementById("changeNumBtn2").remove();
	document.getElementById("changeNumBtn3").remove();
	document.getElementById("changeNumBtn4").remove();
}