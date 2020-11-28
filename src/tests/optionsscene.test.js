import OptionsScene from '../Scenes/OptionsScene';

describe('Options class', () => {
  let newOptions;
  beforeEach(() => {
    newOptions = new OptionsScene();
  });

  test('Check OptionsScene', () => {
    expect(newOptions).toBeInstanceOf(OptionsScene);
  });
});