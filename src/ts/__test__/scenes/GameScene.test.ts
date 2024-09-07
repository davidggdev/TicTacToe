import { GameScene } from "../../scenes/GameScene";

describe("GameScene", () => {
  it("should create a new instance of GameScene", () => {
    const gameScene = new GameScene();
    expect(gameScene).toBeInstanceOf(GameScene);
  });

  it("should have a scene property", () => {
    const gameScene = new GameScene();
    expect(gameScene.scene).toBeDefined();
  });

  it("should call the init method", () => {
    const gameScene = new GameScene();
    const spy = jest.spyOn(gameScene, "init");
    gameScene.init();
    expect(spy).toHaveBeenCalled();
  });

  it("should call the bindEvents method", () => {
    const gameScene = new GameScene();
    const spy = jest.spyOn(gameScene, "bindEvents");
    gameScene.bindEvents();
    expect(spy).toHaveBeenCalled();
  });
});
