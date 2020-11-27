import { getScore, setScore } from '../API/leaderboard';
import '@babel/polyfill';
const fetch = require('node-fetch');
jest.mock('node-fetch');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PSBnU6aG0QwcWXBIDrK6/scores/';
const player = {
  user: 'Jane Doe',
  score: 10,
};

describe('Creates a new player and receives an array of players\' scores', () => {
  test('It creates a new player', async () => {
    await expect(setScore(player.user, player.score)).toBeTruthy();
  });

  test('It receives all scores', async () => {
    global.fetch = jest.fn(() => {
      Promise.resolve();
    });
    const result = await expect(getScore());
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(result).toBeInstanceOf(Object);
  });
});