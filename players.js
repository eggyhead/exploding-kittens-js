/* Player has:
-hand of cards property
-discard method which takes in a card choice and puts it on the discard pile
-draw method which takes in a deck (the draw pile) and outputs the first card  
-respond method which takes in an attack and prompts the user to choose a response 
-count the cards in the deck method
-steal method which takes in another player, the option "view", "mystery", or "name" and the number
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
-choose card from discard pile

their own hand */
const inquirer = require('inquirer')
/*types of questions: 
-confirm (y/n)
-input ('')
-list (item1, item2, item3)
-expand (autofills for different inputs, 'h' for 'help, show me all the options')
*/
// var questions = [
//     {
//       type: 'confirm',
//       name: 'toBeDelivered',
//       message: 'Is this for delivery?',
//       default: false
//     },
//     {
//       type: 'input',
//       name: 'phone',
//       message: "What's your phone number?",
//       validate: function(value) {
//         var pass = value.match(
//           /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
//         );
//         if (pass) {
//           return true;
//         }
  
//         return 'Please enter a valid phone number';
//       }
//     },
//     {
//       type: 'list',
//       name: 'size',
//       message: 'What size do you need?',
//       choices: ['Large', 'Medium', 'Small'],
//       filter: function(val) {
//         return val.toLowerCase();
//       }
//     },
//     {
//       type: 'expand',
//       name: 'toppings',
//       message: 'What about the toppings?',
//       choices: [
//         {
//           key: 'p',
//           name: 'Pepperoni and cheese',
//           value: 'PepperoniCheese'
//         },
//         {
//           key: 'a',
//           name: 'All dressed',
//           value: 'alldressed'
//         },
//         {
//           key: 'w',
//           name: 'Hawaiian',
//           value: 'hawaiian'
//         }
//       ]
//     }
// ]

// inquirer.prompt(questions).then(answers => {
//     console.log('\nOrder receipt:');
//     console.log('raw answers ', answers)
//     console.log(JSON.stringify(answers, null, '  '));
//   });
class Player {
    constructor(cards, playerId, playerNickname) {
        this.hand = cards
        this.playerId = playerId
        this.nickname = playerNickname || null
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
    // if (this.hand.contains(skip || nope)) {
    //     choice = 
    // }    
        //skip()-- do I have a skip card? if so, prompt user to respond y/n to play it
        //draw two cards
        //give card to another player
        //nope(card) -- do I have a nope card? if so, prompt user to respond y/n to play it
    }
    count(deck) {
        return this.deck.length
    }
    steal(player, option) {
        if (option == "view") {
          var cardOptions = [{
                  type: 'list',
                  name: 'cards',
                  message: 'Which card would you like to steal?',
                  choices: [player.hand],
                  filter: function(val) {
                    return val.toLowerCase();
                  }
            }]
            inquirer.prompt(cardOptions).then(answer => {
              this.hand = this.hand.concat([cardOptions])
              player.hand = player.hand.filter(card => card !== cardOptions)
            })
        } else if (option == "mystery") { //the code below is NOT correct-- simply copy/paste from above. 
          var cardOptions = [{
            type: 'list',
            name: 'cards',
            message: 'Which card would you like to give?',
            choices: [player.hand],
            filter: function(val) {
              return val.toLowerCase();
            }
      }]
        inquirer.prompt(cardOptions).then(answer => {
          this.hand = this.hand.concat([cardOptions])
          player.hand = player.hand.filter(card => card !== cardOptions)
        })
      } else {
        var cardOptions = [{
          type: 'input',
          name: 'steal_card',
          message: 'Which card would you like to name?'
    }]
      inquirer.prompt(cardOptions).then(answer => {
        this.hand = this.hand.concat([cardOptions])
        player.hand = player.hand.filter(card => card !== cardOptions)
      })
      }
    }
    skip(turnQueue) {
      let skipped = turnQueue[0]
      turnQueue = turnQueue.slice(1).concat[skipped]
    }
    seeTheFuture(deck) {
      return [deck[0], deck[1], deck[2]]
    }
    die(turnQueue) {
      console.log(`EXPLOSION!! Player ${this.playerId} is dead ☠️`)
      return turnQueue.filter(player => player.playerId !== this.playerId)
    }
    defuse(drawPile, explodingCard) {
      let rdmIdx = Math.random() * drawPile.length
      drawPile = drawPile.slice(0, rdmIdx).concat([explodingCard]).concat(drawPile.slice(rdmIdx))
    }
    nope(card) {
      console.log(`Your ${card.title} has been noped. Try again.`)

    }
    shuffle(deck) {
      let i = 0,
          j = 0,
          temp = null
      for (i = deck.length - 1; i >= 0; i--) {
        j = Math.floor(Math.random() * i + 1)
        temp = deck[i]
        deck[i] = deck[j]
        deck[j] = temp
      }
      return deck
    }
    chooseFromDiscard(discardPile) {
      var cardOptions = [{
        type: 'list',
        name: 'discard_choice',
        message: 'Which card would you like to take?',
        choices: [discardPile],
        filter: function(val) {
          return val.toLowerCase();
        }
  }]
  inquirer.prompt(cardOptions).then(answer => {
    this.hand = this.hand.concat([answer])
    game.discardPile = game.discardPile.filter(card => card.type !== answer.type)
  })
    }
}

module.exports = {Player};