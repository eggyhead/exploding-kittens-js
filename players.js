/* Player has:
-hand of cards property
-discard method which takes in a card choice and puts it on the discard pile
-draw method which takes in a deck (the draw pile) and outputs the first card  
-respond method which takes in an attack and prompts the user to choose a response 
-count the cards in the deck method
-steal method which takes in another player, the option "view" or "mystery", and the number
of cards to steal
-skip method, which moves on to the next player in the turn queue
-seeTheFuture method which allows me to see the first 3 cards of the deck
-die method which takes in turn queue and deletes player from turn queue
-defuse method which randomly places exploding kitten card back in the draw pile
-nope method which takes in the card, player who played the previous card, and the turn queue. It checks if the card 
is "explding kittens" or not and if the Player who played the card is the current player. If one or both of these conditions 
are met, the player has the option to defuse the card or die. If not, the game prompts the current player in the game queue 
to respond again. 
-shuffle the deck method
their own hand */

class Player {
    constructor(cards, playerId) {
        this.hand = cards
        this.playerId = playerId
    }
    discard(card, discardPile) {
        [card].concat(discardPile)
    }
    draw(drawPile) {
        let drawCard = drawPile[0]
        drawPile = drawPile.slice(1)
    }   
    respond(attack) {
    let choice = null;
    //check hand
    if (this.hand.contains(skip || nope)) {
        choice = 
    }    
        //skip()-- do I have a skip card? if so, prompt user to respond y/n to play it
        //draw two cards
        //give card to another player
        //nope(card) -- do I have a nope card? if so, prompt user to respond y/n to play it
    }
    count(deck) {
        return this.deck.length
    }
    steal(player, option, n) {

    }
    skip(turnQueue) {

    }
    seeTheFuture(deck) {

    }
    die(turnQueue) {

    }
    defuse(drawPile) {

    }
    nope(card, player, turnQueue) {

    }
    shuffle(deck) {

    }

}