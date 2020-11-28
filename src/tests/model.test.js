/* eslint-disable no-underscore-dangle */
import Model from '../Model';

describe('Model class functionality', () => {
  let newModel;
  beforeEach(() => {
    newModel = new Model();
  });

  test('Model starts with constructors', () => {
    expect(newModel._soundOn).toBe(true);
    expect(newModel._musicOn).toBe(true);
    expect(newModel._bgMusicPlaying).toBe(false);
    expect(newModel._playerName).toBe('');
  });

  test('Turn off the music method and read', () => {
    newModel._musicOn = false;
    expect(newModel._musicOn).toBe(false);
  });

  test('Turn off the sound method and read', () => {
    newModel._soundOn = false;
    expect(newModel._soundOn).toBe(false);
  });

  test('Turn on the bgMusicPlaying method and read', () => {
    newModel._bgMusicPlaying = true;
    expect(newModel._soundOn).toBe(true);
  });

  test('Turn on the bgMusicPlaying method and read', () => {
    newModel._playerName = 'Jane Dafoe';
    expect(newModel._playerName).toBe('Jane Dafoe');
  });
});