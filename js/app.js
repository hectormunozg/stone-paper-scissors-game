// variables and objects

var gameOptions = {
	stonePath 			: "img/stone.svg",
	scissorsPath    	: "img/scissors.svg",
	paperPath       	: "img/paper.svg",
	gameStarted 		: false,
	playerWins			: 0,
	computerWins		: 0,
	drawGames			: 0,
	totalGames			: 0,
	gameWinner			: "",
	gameValues 			: [
							"stone",
							"scissors",
							"paper"
						],
	playerIconTable		: "",
	computerIconTable	: ""					
};

var playerOne = {
	userName  	  : "Player One",
	currentChoose : ""
};

var computer = {
	currentChoose : ""
};

var randomNumber = "";
var socialSharingCount = 0;

$('#startOverBtn').hide();

// functions
	// show the whole board
var showBoard = function() {
	$('#gamePlayerBoard').show();
	$('#gameComputerBoard').show();
	$('#gameStatsWrap').show();	
};
	// roulette efect
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

// computer gets random choice
var computerChoose = function() {
	$('#computerChoose').hide();
	rand = getRandom(0,3);
	computer.currentChoose = (gameOptions.gameValues[randomNumber]);
	$('#'+computer.currentChoose).show();

	console.log(playerOne.currentChoose + ' ' + computer.currentChoose);
}

// show start again button
var startOverBtn = function() {
	$('#startOverBtn').show();
}

// alerts
var alertWin = function(){
	startOverBtn();
	$('#alerts').append("<div id='alert' class='col-md-8 col-md-offset-2'><div class='alert alert-success alert-dismissible fade in' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Yeahhh! </strong>" + playerOne.currentChoose + ' beats ' + computer.currentChoose + '!!!' + ' You win!!!' + "</div></div>")
}

var alertLose = function() {
	startOverBtn();
	$('#alerts').append("<div id='alert' class='col-md-8 col-md-offset-2'><div class='alert alert-danger alert-dismissible fade in' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>UPPPPSSS! </strong>" + computer.currentChoose + ' beats ' + playerOne.currentChoose + '!!!' + ' You lose!!!' + "</div></div>")
}

var alertDraw = function() {
	startOverBtn();
	$('#alerts').append("<div id='alert' class='col-md-8 col-md-offset-2'><div class='alert alert-warning alert-dismissible fade in' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Hmmmmm!! </strong>" + 'Draw!!! Not bad, right?' + "</div></div>")
}

// evaluation of choices
var evaluateGame = function() {
	// checking scenarios
	if (playerOne.currentChoose === computer.currentChoose) {
		gameOptions.gameWinner = "draw";
		console.log('draw!');
		alertDraw();

	} else if (playerOne.currentChoose === "stone") {
				switch(playerOne.currentChoose === "stone"){
					case computer.currentChoose === "paper":
						gameOptions.gameWinner = "computer";
						console.log('Paper beat stone! Computer wins!');
						alertLose();
					
						gameOptions.playerResultTable = "lose";
						break;
					case computer.currentChoose === "scissors":
						gameOptions.gameWinner = "player";
						console.log('Stone beat Scissors! Player wins!');
						alertWin();
						break;
					} 

				} else if (playerOne.currentChoose === "scissors") {
						switch(playerOne.currentChoose === "scissors"){
							case computer.currentChoose === "paper":
								gameOptions.gameWinner = "player";
								console.log('Scissors beat paper! Player wins');
								alertWin();
								break;
							case computer.currentChoose === "stone":
								gameOptions.gameWinner = "computer";
								console.log('Stone beats scissors! Computer wins');
								alertLose();
								break;
							}

						} else if (playerOne.currentChoose === "paper") {
									switch(playerOne.currentChoose === "paper"){
										case computer.currentChoose === "scissors":
											gameOptions.gameWinner = "computer";
											console.log('Scissors beats paper! Computer wins');
											alertLose();
											break;
										case computer.currentChoose === "stone":
											gameOptions.gameWinner = "player";
											console.log('Paper beats stone! Player wins');
											alertWin();
											break;
										}
								}

	};

// adding scores to boards
var addScores = function() {
	gameOptions.totalGames = gameOptions.totalGames + 1;
	$('#scoreTotal').text(gameOptions.totalGames);
	switch(gameOptions.gameWinner != ""){
		case gameOptions.gameWinner == "player":
			gameOptions.playerWins = gameOptions.playerWins + 1;
			$('#scoreCountPlayer').text(gameOptions.playerWins);
			break;
		case gameOptions.gameWinner == "computer":
			gameOptions.computerWins = gameOptions.computerWins + 1;
			$('#scoreCountComputer').text(gameOptions.computerWins);
			break;
		case gameOptions.gameWinner == "draw":
			gameOptions.drawGames = gameOptions.drawGames + 1;
			$('#scoreCountDraw').text(gameOptions.drawGames);
			break;
		};
	$('#scoresTable').append('<tr class="single-game"><td class="gameNumber">' 
		+ gameOptions.totalGames + '</td><td id="playerIconTable" class="playerChoose">'
		+ '<img class="gameIcons" alt="">' 
		+ '</td><td id="computerIconTable" class="computerChoose">'
	    + '<img class="gameIcons" alt="">'
		+ '</td><td class="whoWins">' 
		+ displayUserName() + '</td></tr>');
	
	displayIconTable();

};

// displaying icons on table
var displayIconTable = function() {
	switch(playerOne.currentChoose !== ""){
		case playerOne.currentChoose == "stone":
			gameOptions.playerIconTable = gameOptions.stonePath; 
			break;
		case playerOne.currentChoose == "scissors":
			gameOptions.playerIconTable = gameOptions.scissorsPath; 
			break;
		case playerOne.currentChoose == "paper":
			gameOptions.playerIconTable = gameOptions.paperPath; 
			break;	
	};

	switch(computer.currentChoose !== ""){
		case computer.currentChoose == "stone":
			gameOptions.computerIconTable = gameOptions.stonePath; 
			break;
		case computer.currentChoose == "scissors":
			gameOptions.computerIconTable = gameOptions.scissorsPath; 
			break;
		case computer.currentChoose == "paper":
			gameOptions.computerIconTable = gameOptions.paperPath; 
			break;	
	};	

	$('#playerIconTable img').last().attr('src', gameOptions.playerIconTable);
	$('#computerIconTable img').last().attr('src', gameOptions.computerIconTable);

};

// show username on tables
var displayUserName = function() {
	if (gameOptions.gameWinner == "player") {
		return playerOne.userName;
	} else if (gameOptions.gameWinner == "player") {
		return gameOptions.gameWinner;
			} else {
				return gameOptions.gameWinner;
			}
};

// displaying social modal
var socialSharing = function() {
	if ((socialSharingCount > 10)) {
		$('#socialSharing').modal('show');
		socialSharingCount = 5;
	} else {
		socialSharingCount += 1;
	}
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

	if (!gameOptions.gameStarted) {
		gameOptions.gameStarted = true;
		$(this).css('width', '160px');
		playerOne.currentChoose = $(this).attr('game');
		computerChoose();
		evaluateGame();
		addScores();		

	} else {
		console.log(gameOptions.gameStarted);
	};	
});

// start over button
$("#startOverBtn").click(function(event) {
	event.preventDefault();
	gameOptions.gameStarted = false;
	$('#'+computer.currentChoose).hide();
	$('#computerChoose').show();
	$('.gameIconsSet').css('width', '100px');
	$('#alert').remove();
	socialSharing();
});
