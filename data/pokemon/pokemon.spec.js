const db = require('../dbConfig');

const { insert, remove } = require('./model');

describe('Pokemon Model', () => {
  beforeEach(async () => {
    await db('pokemon').truncate();
  });

  it('should return true', () => {
    expect(true).toBe(true);
  });

  describe('inserting a pokemon', () => {
    it('should insert a pokemon', async () => {
        const pokemon = await db('pokemon');

        await insert({name: 'Milotic', typeOne: 'Water'});
        await insert({name: 'Froslass', typeOne: 'Ice'});

        expect(pokemon).toHaveLength(2);
    });

  });
});
