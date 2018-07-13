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

function useNumToCreateNew(n, classObj, props) {
    for (let i = 0; i < n; i++) {
        return new classObj(...props)
    }
}

function createCompleteDeck(cardTypes) {
    switch (type) {
        case 'attack':
          
          break;
        case 'Mangoes':
        case 'Papayas':
          console.log('Mangoes and papayas are $2.79 a pound.');
          // expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        default:
          console.log('Sorry, we are out of ' + expr + '.');
      }
}

 class Card {
     constructor(type, n) {
         this.type = type
         this.numInDeck = n
     }
 }

console.log(useNumToCreateNew(3, Card, ['attack', 4]))

 module.exports = {
     cardTypes, Card
 }

