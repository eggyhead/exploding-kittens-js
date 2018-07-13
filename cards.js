/**contains the functionality for the cards in the exploding kittens
 * game. There are 11 kinds of cards, each with unique functionality:
 * 1. Attack card
 *  -forces the next player to draw two cards
 * 2. Beard card
 * -does nothing
 * 3. Watermelon card
 * -does nothing
 * 4. Taco card 
 * -does nothing
 * 5. Rainbow card 
 * -does nothing
 * 6. Defuse card
 * -keeps you alive after drawing an "exploding" card
 * 7. Exploding card
 * -if the player who draws it has a defuse card, he/she can play 
 * it and the exploding card goes back in the draw pile
 * -if the player who draws it does NOT have a defuse card, he/she dies.
 * 8. Favor card
 * -allows the player who draws it to get a card from another player
 * 9. Nope card
 * -forces the player who played the last card to play again
 * 10. Skip card
 * -forces the next player to lose his/her turn
 * 11. Shuffle card 
 * -allows the player to shuffle the cards in the draw pile
 * 
 * The card class contains a value "type", and methods for each of these unique card types.
 */
const cardTypes = ['attack', 'beard_cat', 'watermelon_cat', 'taco_cat', 'rainbow_cat',
'defuse', 'EXPLODING_KITTEN', 'favor', 'nope', 'skip', 'shuffle']

 class Card {
     constructor(type) {
         this.type = type
     }
 }

 module.exports = {
     cardTypes, Card
 }

