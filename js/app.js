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


