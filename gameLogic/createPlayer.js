export default function createPlayer(name = '') {
  let newName = name;
  if (newName === '') {
    newName = 'AI';
  }
  let player = {
    name: newName,
    hand: [],
    wonPile: [],
  };
  return player;
}
