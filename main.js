
/*class for current Exploding Kittens game
    -takes in an array of players and assigns it to a property
    -takes in an array of cards, and assigns it as the game deck, 
    tailored to the number of players in the game
    -initially populates the turnQueue with the players array
    -has draw and discard pile properties, initially set to empty arrays
    -has a winner, initally set to null
    -has play method

*/

class CurrGame { 
    constructor(players, deck) {
        this.players = players
        this.gameDeck = correctDeckSize(deck, players.length) /*can I do this here or 
        do I need to do it in play()?*/
        this.turnQueue = players 
        this.drawPile = []
        this.discardPile = []
        this.winner = null
    }

    play() {
        while (!this.winner) {
           this.turnQueue.forEach(player => {
                player.discard()
                player.draw()
           }) 
        }
    }


    
}