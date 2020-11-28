import BootScene from '../Scenes/BootScene';

describe('BootScene class', () => {
  let new_boot;
  beforeEach(() => {
    new_boot = new BootScene();
  });

  test('Check BootScene', () => {
    expect(new_boot).toBeInstanceOf(BootScene);
  });
});