var board = []
var total = 0	

var pieces = {black: [], red: []}

var b0 = 0
var r0 = 0

for(var x = 0; x < 20; x++){
	pieces.black.push(document.createElement("DIV"))
	pieces.red.push(document.createElement("DIV"))
	pieces.black[x].className = "black"
	pieces.red[x].className = "red"
	pieces.red[x].onclick = function(){active = this}
	pieces.black[x].onclick = function(){active = this}
}

var active = pieces.black[0]

for(var x = 0; x < 10; x++){
	board.push([])
	var row = document.createElement("TR")
	for(var i = 0; i < 10; i++){
		total++
		board[x].push({cell: document.createElement("TD")})
		row.appendChild(board[x][i].cell)
		if(total % 2 == 0){
			board[x][i].cell.style.backgroundColor = "#000000"
			if(x < 4){
				board[x][i].cell.appendChild(pieces.black[b0])
				b0++
			} else if(x > 5){
				board[x][i].cell.appendChild(pieces.red[r0])
				r0++
			}
		} else {
			board[x][i].cell.style.backgroundColor = "#ffffff"
		}
	}
	total++
	document.getElementById("grid").appendChild(row)
}

setInterval(function(){
	pieces.black.forEach(x => x.setAttribute("active", "false"))
	pieces.red.forEach(x => x.setAttribute("active", "false"))
	active.setAttribute("active", "true")
}, 10)