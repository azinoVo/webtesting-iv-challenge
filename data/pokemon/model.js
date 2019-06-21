const db = require('../dbConfig');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

function insert(pokemon) {
  return db('pokemon')
    .insert(pokemon, 'id')
}

async function update(id, changes) {
  return undefined;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('pokemon');
}

function findById(id) {
  return null;
}
