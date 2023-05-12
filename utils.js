const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const hasPerson = (arr, person) => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr.find(obj => obj.person === person) ? true : false;
}

const getQuotesByPerson = (arr, person) => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  if(!hasPerson(arr, person)){
    return []
  } else {
    return arr.filter(obj => obj.person === person)
  }
}

module.exports = {
  getRandomElement,
  hasPerson,
  getQuotesByPerson
};
