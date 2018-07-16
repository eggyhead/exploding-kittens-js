/**contains the functionality for the cards in the exploding kittens
 * game. There are 12 kinds of cards, each with unique functionality:
 * 1. Attack card (4)
 *  -forces the next player to draw two cards
 * 2. Beard Cat card (4)
 * -does nothing
 * 3. Watermelon Cat card (4)
 * -does nothing
 * 4. Taco Cat card (4)
 * -does nothing
 * 5. Rainbow Cat card (4)
 * -does nothing
 * 6. Defuse card (6)
 * -keeps you alive after drawing an "exploding" card
 * 7. Exploding Kitten card (4)
 * -if the player who draws it has a defuse card, he/she can play 
 * it and the exploding card goes back in the draw pile
 * -if the player who draws it does NOT have a defuse card, he/she dies.
 * 8. Favor card (4)
 * -allows the player who draws it to get a card from another player
 * 9. Nope card (5)
 * -forces the player who played the last card to play again
 * 10. Skip card (4)
 * -forces the next player to lose his/her turn
 * 11. Shuffle card (4)
 * -allows the player to shuffle the cards in the draw pile
 * 12. See The Future (5)
 * -allows the player to see the top 3 cards from the draw pile
 * 
 * The card class contains a value "type", and methods for each of these unique card types.
 */
const cardTypes = ['attack', 'beard_cat', 'watermelon_cat', 'taco_cat', 'rainbow_cat',
'defuse', 'EXPLODING_KITTEN', 'favor', 'nope', 'skip', 'shuffle', 'see_the_future']

class Card {
    constructor(type) {
        this.type = type
    }
}

function useNumToCreateNew(n, classObj, resultArr, props) { //takes in # of obj to create, type of obj, and a "props" array
    for (let i = 0; i < n; i++) {
        resultArr.push(new classObj(...props)) //assigns the values passed in to the properties of the class
    }
    return resultArr;
}

function createCompleteDeck(types) {
    let resultDeck = [];
    types.forEach(type => {
        switch (type) {
            case 'defuse':
            useNumToCreateNew(6, Card, resultDeck, [type])
            break;
            case 'nope' || 'see_the_future':
            useNumToCreateNew(5, Card, resultDeck, [type])
                break;
            default:
            useNumToCreateNew(4, Card, resultDeck, [type])        
          }
    }) 
    return resultDeck;   
}

const deck = createCompleteDeck(cardTypes)

module.exports = {
     cardTypes, Card, deck
 }

