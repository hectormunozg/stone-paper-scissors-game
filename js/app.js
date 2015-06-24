// variables
var userName = "";
var userNameText = "";
var stone = "img/stone.svg";
var scissors = "img/scissors.svg";
var paper = "img/paper.svg";
var gameStarted = false;

// functions
var showBoard = function() {
	$('#gamePlayerBoard').show();
	$('#gameComputerBoard').show();
	$('#gameStatsWrap').show();	
};

var rouletteEffect = function() {
    setInterval(function(){
      $('#computerChoose li:first-child').fadeOut(0)
         .next('li').fadeIn(70)
         .end().appendTo('#computerChoose');}, 80);	
};

var gameRoulette = function() {
    $(function(){
        $('#computerChoose li:gt(0)').hide();
        rouletteEffect();
	});	
}

// change your name via modal 
$('#yourNameBtn').click(function() {
	// store the variable when button "save changes" is pressed
	var userName = $('#userName').val();
	// change the paragraph
	$('#userNameText').text('All right, ' + userName + "! Let's start! Your turn!");
	// change table 1 name
	$('#userNameTable').text(userName + ' Choose');
	// change table 2 name
	$('#userNameScores').text(userName);
	// show game boards
	showBoard();
	gameRoulette();
});

// show game board on click
$('#gameBtn').click(function() {
	showBoard();
	gameRoulette();
	$(this).prop('disabled', true);
});

// select you option
$('.gameIconsSet').click(function(event) {
	event.preventDefault();
	//prevent second choice before finishing the game
	if (!gameStarted) {
		gameStarted = true;
		$(this).css('width', '160px');
		clearInterval(rouletteEffect);
	} else {
		// yeahhh
	};


});

