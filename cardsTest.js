/**from senior checkpoint: 
import {expect} from 'chai';
import sinon from 'sinon';

import {groupBy, flowRight} from '../../server/flatline';

describe('▒▒▒ JavaScript tests ▒▒▒', function () {

    /**** These are based off of lodash methods. Reference lodash docs to clarify each method purpose. ****/
    // describe('flatline', () => {

    //     describe('groupBy function', () => {

            /*********************************
             *
             *   _.groupBy
             *
             *   in lodash: https://lodash.com/docs#groupBy
             *
             *   IMPORTANT note: the following specs do not encompass ALL features of lodash's groupBy;
             *   for example: taking an object as a parameter
             *
             *   Given a collection put through an iterator function, an object will be returned with
             *   keys relating to the return values of each element through the iterator and values as
             *   an array of those elements
             *
             *   e.g.
             *
             *      the collection `staff` ['Liz', 'Ceren', 'Shanna', 'Charlotte']
             *
             *      the `iterator` function (staffMember) {
             *          return staffMember[0]; // first letter of name
             *      }
             *
             *      _.groupBy(staff, iterator) returns
             *
             *     {
             *       'C': ['Ceren', 'Charlotte'],
             *       'L': ['Liz'],
             *       'S': ['Shanna']
             *     }
             *
             *
             *********************************/

        //     let users;
        //     beforeEach(() => {
        //         users = [
        //             { name: 'Greg', age: 12, state: 'NJ' },
        //             { name: 'Julie', age: 18, state: 'NY' },
        //             { name: 'Bobby', age: 24, state: 'NJ' },
        //             { name: 'Mark', age: 56, state: 'TX' },
        //             { name: 'Nicole', age: 21, state: 'NV' },
        //             { name: 'Joe', age: 13, state: 'NY' },
        //             { name: 'Emily', age: 56, state: 'MA' },
        //             { name: 'Katherine', age: 21, state: 'NJ' },
        //             { name: 'John', age: 6, state: 'TX' }
        //         ];
        //     });

        //     xit('returns an object', () => {
        //         const returnValue = groupBy(users, user => user.age > 13);
        //         expect(returnValue).to.be.an('object');
        //     });

        //     describe('returned object', () => {

        //         xit('has keys that match return values from the iterator and the value of each key is an array of the elements that was the parameter when the key was returned', () => {

        //             const returnValue = groupBy(users, user => {
        //                 if (user.age > 13) {
        //                     return 'over13';
        //                 } else {
        //                     return 'underOrExactly13';
        //                 }
        //             });

        //             expect(returnValue.underOrExactly13).to.be.an('array');
        //             expect(returnValue.underOrExactly13).to.have.length(3);
        //             expect(returnValue.over13).to.have.length(users.length - 3);

        //             const namesOfYoungOnes = returnValue.underOrExactly13.map(user => user.name);

        //             expect(namesOfYoungOnes).to.be.deep.equal(['Greg', 'Joe', 'John']);

        //         });

        //         xit('pulls and groups by specific property if a string is provided instead of a function', () => {

        //             const returnValue = groupBy(users, 'state');

        //             expect(Object.keys(returnValue)).to.be.deep.equal([
        //                 'NJ',
        //                 'NY',
        //                 'TX',
        //                 'NV',
        //                 'MA'
        //             ]);

        //             expect(returnValue.NJ).to.have.length(3);

        //             const namesFromNewJersey = returnValue.NJ.map(user => user.name);

        //             expect(namesFromNewJersey).to.be.deep.equal(['Greg', 'Bobby', 'Katherine']);

        //         });

        //     });

        // });

import {expect} from 'chai';
//import sinon from 'sinon';
import {cardTypes, Card, deck} from './cards'

describe('Exploding Kittens Cards', function() {
    describe('card type property', () => {
        it('contains a property "type"', () => {
            const testCard = new Card('test')
            expect(testCard.type).to.equal('test')
        })
        
    })
describe('testing test', () => {
    it('outputs "test"', () => {
        function testingFunc() {
            return "test"
        }
        expect(testingFunc()).to.equal("test")
    })
})

})