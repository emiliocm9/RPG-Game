import OptionsScene from '../Scenes/OptionsScene';

describe('Options class', () => {
  let new_options;
  beforeEach(() => {
    new_options = new OptionsScene();
  });

  test('Check OptionsScene', () => {
    expect(new_options).toBeInstanceOf(OptionsScene);
  });
});