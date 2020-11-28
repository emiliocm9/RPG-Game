import Model from '../Model';

describe('Model class functionality', () => {
  let new_model;
  beforeEach(() => {
    new_model = new Model();
  });

  test('Model starts with constructors', () => {
    expect(new_model._soundOn).toBe(true);
    expect(new_model._musicOn).toBe(true);
    expect(new_model._bgMusicPlaying).toBe(false);
    expect(new_model._playerName).toBe('');
  });

  test('Turn off the music method and read', () => {
    new_model._musicOn = false;
    expect(new_model._musicOn).toBe(false);
  });

  test('Turn off the sound method and read', () => {
    new_model._soundOn = false;
    expect(new_model._soundOn).toBe(false);
  });

  test('Turn on the bgMusicPlaying method and read', () => {
    new_model._bgMusicPlaying = true;
    expect(new_model._soundOn).toBe(true);
  });

  test('Turn on the bgMusicPlaying method and read', () => {
    new_model._playerName = 'Jane Dafoe';
    expect(new_model._playerName).toBe('Jane Dafoe');
  });
});