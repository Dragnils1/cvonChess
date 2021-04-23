
DEFAULT_URL = 'chess/board/';
var board1 = Chessboard('board1', 'start');
$(document).ready(function(){
	$('.toggle').click(function(){
		$('.toggle').toggleClass('active')
		$('.overlay').toggleClass('active')
		$('.menu').toggleClass('active')

	})
});
$(document).ready(function(){
	$('.regist').click(function(event) {
		$("#fForm").css("overflow", "visible")
		$('#fForm').animate({height : "120px"},500)
	})
});


