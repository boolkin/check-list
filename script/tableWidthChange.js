function resizeCols(){
	let headCols = document.getElementById("resultTable").getElementsByTagName("th");
	for (let i=0;i<headCols.length;i++){
		headCols[i].addEventListener('click', changeWidth);
	}
}

function changeWidth() {
	document.getElementById("searchWind").innerHTML = "<input type='button' value='-' onclick='minus(\'"+this+"\')'><input type='button' value='+' onclick='this.style.width = getComputedStyle(this).width +10;'>"
	function minus(d){
		console.log(this);
	}
	//this.style.width = getComputedStyle(this).width -10;
	console.log(this);
}