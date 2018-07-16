import {expect} from 'chai';
import {Player} from './players'
import {Card, deck} from './cards'

describe('Exploding Kittens Players', function() {
    let playerUno, playerDos;
    before(function() {
        playerUno = new Player(deck.slice(0, 2), 1, "uno")
        playerDos = new Player(deck.slice(5, 8), 2)
      });
    describe('player properties', () => {
        it('contains an array of Cards', () => {
            expect(playerUno.hand).to.be.a('array')
            expect(playerUno.hand[0].constructor).to.equal(Card)
        })
        it('contains a unique playerId', () => {
            expect(playerUno.playerId).to.not.be.equal(playerDos.playerId)
        })
        it('has a property "nickname", which defaults to null', () => {
            expect(playerUno.nickname).to.not.be.equal(null)
            expect(playerDos.nickname).to.be.equal(null)
        }) 

    })
})