// variables and objects

var gameOptions = {
	stonePath 			: "img/stone.svg",
	scissorsPath    	: "img/scissors.svg",
	paperPath       	: "img/paper.svg",
	gameStarted 		: false,
	gameValues 			: [
							"stone",
							"scissors",
							"paper"
						]
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

var randomNumber = "";

var gameValues = [
	"stone",
	"scissors",
	"paper"
];

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

var storeSelection = function(target) {
	//prevent second choice before finishing the game
	if (!gameOptions.gameStarted) {
		gameOptions.gameStarted = true;
		target.css('width', '160px');
		playerOne.currentChoose = $(target).attr('game');
	} else {
		// yeahhh
	};		
}
var getRandom = function() {
  randomNumber =  Math.floor(Math.random() * 3);
}

var computerChoose = function() {
	$('#computerChoose').hide();
	rand = getRandom(0,3);
	computer.currentChoose = (gameOptions.gameValues[randomNumber]);
	console.log(gameOptions.gameValues[randomNumber]);
	$('#'+computer.currentChoose).show();

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

// player 1 choose option
$('.gameIconsSet').click(function(event) {
	event.preventDefault();
	storeSelection($(this));
	computerChoose();
});




// computer randomly select option
// game evaluate who wins
// data is stored in stats
// game is prepared for next round










