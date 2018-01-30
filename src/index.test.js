import { expect } from 'chai';
import darkSouls from './index';

describe('darksouls-names', function () {
    describe('all', function () {
        it('should be an array of strings', function () {
            var all = darkSouls.all();
            expect(all.I.Bosses).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function (item) {
                    return typeof item === 'string';
                });
            }
        });

        it('should contain `Solaire of Astora`', function () {
            var npc = darkSouls.all();
            expect(npc.I.NPCs).to.include('Solaire of Astora');
        });
    });

    describe('random', function () {
        it('should return a random item from the darkSouls.all', function () {
            var all = darkSouls.all();
            var randomItem = darkSouls.random('I', 'Bosses');
            expect(all.I.Bosses).to.include(randomItem);
        });

        it('should return an array of random items if passed a number', function () {
            var all = darkSouls.all();
            var randomItems = darkSouls.random('I', 'Bosses', 3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function (item) {
                expect(all.I.Bosses).to.include(item);
            });
        });

        it('should return a full array of random items when not passed a number', function () {
            var randomItems = darkSouls.random('II', 'Bosses');
            var l = randomItems.length;
            expect(randomItems).to.have.length(l);
        });
    });
});
