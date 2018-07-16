import {expect} from 'chai';
import {cardTypes, Card, deck} from './cards'

describe('Exploding Kittens Cards', function() {
    describe('card type property', () => {
        it('contains a property "type"', () => {
            const testCard = new Card('test')
            expect(testCard.type).to.equal('test')
        })
        
    })
    describe('full card deck', () => {
        it('contains Card objects', () => {
            expect(deck[0].constructor).to.equal(Card)
        })
        it('contains cards for each card type', () => {
            let testDeck = new Set()
            deck.forEach(card => testDeck.add(card.type))
            expect(testDeck.size).to.equal(cardTypes.length)
        })
    })
})