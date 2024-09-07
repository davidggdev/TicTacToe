import { MainScene } from "../../scenes/MainScene";

describe("MainScene", () => {
  it("should create a new instance of MainScene", () => {
    const mainScene = new MainScene();
    expect(mainScene).toBeInstanceOf(MainScene);
  });

  it("should have a homeScene property", () => {
    const mainScene = new MainScene();
    expect(mainScene.homeScene).toBeDefined();
  });

  it("should have a gameScene property", () => {
    const mainScene = new MainScene();
    expect(mainScene.gameScene).toBeDefined();
  });

  it("should have a scoresScene property", () => {
    const mainScene = new MainScene();
    expect(mainScene.scoresScene).toBeDefined();
  });

  it("should call the init method of the homeScene property", () => {
    const mainScene = new MainScene();
    const spy = jest.spyOn(mainScene.homeScene, "init");
    mainScene.homeScene.init();
    expect(spy).toHaveBeenCalled();
  });

  it("should call the onMenuItemClick method", () => {
    const mainScene = new MainScene();
    const spy = jest.spyOn(mainScene, "onMenuItemClick");
    mainScene.onMenuItemClick();
    expect(spy).toHaveBeenCalled();
  });
});
