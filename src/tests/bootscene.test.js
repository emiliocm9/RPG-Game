import BootScene from '../Scenes/BootScene';

describe('BootScene class', () => {
  let newBoot;
  beforeEach(() => {
    newBoot = new BootScene();
  });

  test('Check BootScene', () => {
    expect(newBoot).toBeInstanceOf(BootScene);
  });
});