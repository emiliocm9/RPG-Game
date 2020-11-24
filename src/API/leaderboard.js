const fetch = require('node-fetch');

const getGameId = async () => {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Hyperflix',
    }),
  };

  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', request);
    const gameId = await response.json();
    return gameId;
  } catch (err) {
    throw ('Something went wrong your request:', err);
  }
};

const setScore = async (playerName, playerScore) => {
  const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PSBnU6aG0QwcWXBIDrK6/scores/';
  const score = JSON.stringify({
    user: playerName,
    score: playerScore,
  });

  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: score,
  };

  try {
    const response = await fetch(URL, request);
    const result = await response.json();
    return result;
  } catch (err) {
    throw ('Something went wrong with your request - setScore:', err);
  }
};

const getScore = async (type) => {
  const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PSBnU6aG0QwcWXBIDrK6/scores/';
  const request = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(URL, request);
    const obj = await response.json();
    return obj.result.sort((a, b) => b.score - a.score).slice(0, 10);
  } catch (err) {
    throw ('Something went wrong with your request - getScore:', err);
  }
};

export { setScore, getScore, getGameId };