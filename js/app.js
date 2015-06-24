// variables and objects

var gameOptions = {
	stonePath 			: "img/stone.svg",
	scissorsPath    	: "img/scissors.svg",
	paperPath       	: "img/paper.svg",
	gameStarted 		: false,
	totalGames			: 0,
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

$('#startOverBtn').hide();

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

var getRandom = function() {
  randomNumber =  Math.floor(Math.random() * 3);
}

var computerChoose = function() {
	$('#computerChoose').hide();
	rand = getRandom(0,3);
	computer.currentChoose = (gameOptions.gameValues[randomNumber]);
	$('#'+computer.currentChoose).show();

	console.log(playerOne.currentChoose + ' ' + computer.currentChoose);

}

var startOverBtn = function() {
	$('#startOverBtn').show();
}

var alertWin = function(){
	startOverBtn();
	$('#alerts').append("<div class='col-md-8 col-md-offset-2'><div class='alert alert-success alert-dismissible fade in' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Yeahhh! </strong>" + playerOne.currentChoose + ' beats ' + computer.currentChoose + '!!!' + ' You win!!!' + "</div></div>")
}

var alertLose = function() {
	startOverBtn();
	$('#alerts').append("<div class='col-md-8 col-md-offset-2'><div class='alert alert-danger alert-dismissible fade in' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>UPPPPSSS! </strong>" + computer.currentChoose + ' beats ' + playerOne.currentChoose + '!!!' + ' You lose!!!' + "</div></div>")
}

var alertDraw = function() {
	startOverBtn();
	$('#alerts').append("<div class='col-md-8 col-md-offset-2'><div class='alert alert-warning alert-dismissible fade in' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Hmmmmm!! </strong>" + 'Draw!!! Not bad, right?' + "</div></div>")
}


var evaluateGame = function() {
	if (playerOne.currentChoose === computer.currentChoose) {
		console.log('draw!');
		alertDraw();
	} else if (playerOne.currentChoose === "stone") {
				switch(playerOne.currentChoose === "stone"){
					case computer.currentChoose === "paper":
						console.log('Paper beat stone! Computer wins!');
						alertLose();
						break;
					case computer.currentChoose === "scissors":
						console.log('Stone beat Scissors! Player wins!');
						alertWin();
						break;

					} 
				} else if (playerOne.currentChoose === "scissors") {
						switch(playerOne.currentChoose === "scissors"){
							case computer.currentChoose === "paper":
								console.log('Scissors beat paper! Player wins');
								alertWin();
								break;
							case computer.currentChoose === "stone":
								console.log('Stone beats scissors! Computer wins');
								alertLose();
								break;
							}

						} else if (playerOne.currentChoose === "paper") {
									switch(playerOne.currentChoose === "paper"){
										case computer.currentChoose === "scissors":
											console.log('Scissors beats paper! Computer wins');
											alertLose();
											break;
										case computer.currentChoose === "stone":
											console.log('Paper beats stone! Player wins');
											alertWin();
											break;
										}
								}

	};

var addScores = function() {};

var displayResults = function() {};

var stopCurrentGame = function() {};

var startOver = function() {};



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

	if (!gameOptions.gameStarted) {
		gameOptions.gameStarted = true;
		$(this).css('width', '160px');
		playerOne.currentChoose = $(this).attr('game');
		computerChoose();
		evaluateGame();

	// addScores();
	// displayResults();
	// stopCurrentGame();		

	} else {
		console.log(gameOptions.gameStarted);
	};	

});