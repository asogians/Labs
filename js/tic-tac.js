
$(document).ready(function(){
    "use strict";

    //icon switcher: turn number starts at 1 and keeps going up.

    var turnNumber = 1;
    var gameStarted = false;
    var playerOnePickedIcon = 'icon-square1';
    var playerTwoPickedIcon = 'icon-square2';
    var playerTurnToPickIcon = 'player one';



    //Logic for changing the html to which player's turn it is...and their specified icon.

    $('.start-game').click(function(e) {
        e.preventDefault();
        $(this).hide();

        $('.player-one-big-icon').addClass(playerOnePickedIcon);
        $('.player-one-turn-info').show();

        gameStarted = true;
        console.log(gameStarted);

    });

    // restarts game when reset button is pressed.

    // $('.')



    //this function hears for which player's turn it is to select an icon


    $('button').click(function(e) {
        if (e.target.id === 'player-one-button') {

            playerTurnToPickIcon = 'player one';

            $('.player-turn-message').html('Pick your poison player one!')
                .removeClass('player-two-message')
                .addClass('player-one-message');


            $('.icon-square').click(function () {
                $(this).addClass('player-one-select');
                $('.player-turn-message').html("You've chosen wisely!");
            });

        } else if (e.target.id === 'player-two-button') {
            playerTurnToPickIcon = 'player two';
            $('.player-turn-message').html('Your turn player two!')
                .removeClass('player-one-message')
                .addClass('player-two-message');

            $('.icon-square').one('click', function () {
                $(this).addClass('player-two-select');
                $('.player-turn-message').html("Great choice!");
            });
        }

        console.log(playerTurnToPickIcon);
    });


    //this function listens for which icon is being selected by each player.


    $('.icon-square').each(function(i, e) {
        $(this).click(function() {

            if (playerTurnToPickIcon === 'player one') {



                //Conditionals begin to check for each icon

                switch ($(this).index()) {
                    case 0:
                        playerOnePickedIcon = 'icon-square1';
                        break;
                    case 1:
                        playerOnePickedIcon = 'icon-square2';
                        break;
                    case 2:
                        playerOnePickedIcon = 'icon-square3';
                        break;
                    case 3:
                        playerOnePickedIcon = 'icon-square4';
                        break;
                    case 4:
                        playerOnePickedIcon = 'icon-square5';
                        break;
                    case 5:
                        playerOnePickedIcon = 'icon-square6';
                        break;
                    case 6:
                        playerOnePickedIcon = 'icon-square7';
                        break;
                    case 7:
                        playerOnePickedIcon = 'icon-square8';
                        break;
                    case 8:
                        playerOnePickedIcon = 'icon-square9';
                        break;
                    case 9:
                        playerOnePickedIcon = 'icon-square10';
                        break;
                    case 10:
                        playerOnePickedIcon = 'icon-square11';
                        break;
                    case 11:
                        playerOnePickedIcon = 'icon-square12';
                        break;
                    case 12:
                        playerOnePickedIcon = 'icon-square13';
                        break;
                    case 13:
                        playerOnePickedIcon = 'icon-square14';
                        break;
                    case 14:
                        playerOnePickedIcon = 'icon-square15';
                        break;
                    case 15:
                        playerOnePickedIcon = 'icon-square16';
                        break;
                    case 16:
                        playerOnePickedIcon = 'icon-square17';
                        break;
                    case 17:
                        playerOnePickedIcon = 'icon-square18';
                }
                return playerOnePickedIcon;

            } else if (playerTurnToPickIcon === 'player two') {



                switch ($(this).index()) {
                    case 0:
                        playerTwoPickedIcon = 'icon-square1';
                        break;
                    case 1:
                        playerTwoPickedIcon = 'icon-square2';
                        break;
                    case 2:
                        playerTwoPickedIcon = 'icon-square3';
                        break;
                    case 3:
                        playerTwoPickedIcon = 'icon-square4';
                        break;
                    case 4:
                        playerTwoPickedIcon = 'icon-square5';
                        break;
                    case 5:
                        playerTwoPickedIcon = 'icon-square6';
                        break;
                    case 6:
                        playerTwoPickedIcon = 'icon-square7';
                        break;
                    case 7:
                        playerTwoPickedIcon = 'icon-square8';
                        break;
                    case 8:
                        playerTwoPickedIcon = 'icon-square9';
                        break;
                    case 9:
                        playerTwoPickedIcon = 'icon-square10';
                        break;
                    case 10:
                        playerTwoPickedIcon = 'icon-square11';
                        break;
                    case 11:
                        playerTwoPickedIcon = 'icon-square12';
                        break;
                    case 12:
                        playerTwoPickedIcon = 'icon-square13';
                        break;
                    case 13:
                        playerTwoPickedIcon = 'icon-square14';
                        break;
                    case 14:
                        playerTwoPickedIcon = 'icon-square15';
                        break;
                    case 15:
                        playerTwoPickedIcon = 'icon-square16';
                        break;
                    case 16:
                        playerTwoPickedIcon = 'icon-square17';
                        break;
                    case 17:
                        playerTwoPickedIcon = 'icon-square18';
                }
                return playerTwoPickedIcon;
            }
        });
    });

    //conditional checking which turn it is: player 1 (number is odd) or player 2 (number is even)

    console.log(gameStarted);

    $('.small-square').click(function () {
        if (gameStarted) {
            if (turnNumber % 2 === 1) {
                $(this).addClass(playerOnePickedIcon);
                $('div.player-one-big-icon').addClass(playerOnePickedIcon);
                $('.player-two-turn-info').show();
                $('.player-one-turn-info').hide();
                console.log(turnNumber);


            } else if (turnNumber % 2 === 0) {
                $(this).addClass(playerTwoPickedIcon);
                $('div.player-two-big-icon').addClass(playerTwoPickedIcon);
                $('.player-one-turn-info').show();
                $('.player-two-turn-info').hide();
                console.log(turnNumber);
            }
            turnNumber++;
            $('div.player-two-big-icon').addClass(playerTwoPickedIcon);
        }
    });
















});