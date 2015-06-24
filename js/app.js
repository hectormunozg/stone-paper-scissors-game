// variables and objects

var gameOptions = {
	stone 			: "img/stone.svg",
	scissors    	: "img/scissors.svg",
	paper       	: "img/paper.svg",
	stoneValue  	: 0,
	scissorsValue 	: 1,
	paperValue   	: 2,
	gameStarted 	: false
};

var playerOne = {
	userName  	  : "",
	totalWins     : 0,
	currentChoose : ""
};

var computer = {
	totalWins	  : 0,
	currentChoose : ""
};

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
	playerOne.userName = $('#userName').val();
	// change the paragraph
	$('#userNameText').text('All right, ' + playerOne.userName + "! Let's start! Your turn!");
	// change table 1 name
	$('#userNameTable').text(playerOne.userName + ' Choose');
	// change table 2 name
	$('#userNameScores').text(playerOne.userName);
	// show game boards
	showBoard();
	gameRoulette();
	$('#gameBtn').prop('disabled', true);
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
	if (!gameOptions.gameStarted) {
		gameOptions.gameStarted = true;
		$(this).css('width', '160px');
	} else {
		// yeahhh
	};
});

// player 1 choose option
// computer randomly select option
// game evaluate who wins
// data is stored in stats
// game is prepared for next round










