import dsNames from './darksouls-names.json';
class DsNames {
    /**
     * Get All data
     *
     * @returns Object
     * @memberof DsNames
     */
    all() {
        return dsNames;
    }
    /**
     * Get a random data
     *
     * @param {String} version DS version I, II or III
     * @param {String} category DS category NPCs, Enemies or Bosses
     * @param {Number} number DS category NPCs, Enemies or Bosses
     * @memberof DsNames
     */
    random(version, category, number) {
        if (number === undefined) {
            return this.__uniqueRandom(dsNames[version][category]);
        } else {
            const randomItems = [];
            for (let i = 0; i < number; i++) {
                randomItems.push(this.__uniqueRandom(dsNames[version][category]));
            }
            return randomItems;
        }
    }
    /**
     * Return a unique random value
     *
     * @param {any} arr Value to return
     * @returns String
     * @memberof DsNames
     */
    __uniqueRandom(arr) {
        var rand = this.__rand(0, arr.length - 1);
        return arr[rand];
    }
    /**
     * Make a random value
     *
     * @param {any} min
     * @param {any} max
     * @returns
     * @memberof DsNames
     */
    __rand(min, max) {
        var prev;
        var num = Math.floor(Math.random() * (max - min + 1) + min);
        return prev = num === prev && min !== max ? this.__rand() : num;
    }
}
module.exports = new DsNames();
