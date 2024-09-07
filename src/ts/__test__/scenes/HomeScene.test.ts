import { HomeScene } from "../../scenes/HomeScene";

describe("HomeScene", () => {
  it("should create a new instance of HomeScene", () => {
    const homeScene = new HomeScene();
    expect(homeScene).toBeInstanceOf(HomeScene);
  });

  it("should have a scene property", () => {
    const homeScene = new HomeScene();
    expect(homeScene.scene).toBeDefined();
  });

  it("should call the init method", () => {
    const homeScene = new HomeScene();
    const spy = jest.spyOn(homeScene, "init");
    homeScene.init();
    expect(spy).toHaveBeenCalled();
  });

  it("should call the bindEvents method", () => {
    const homeScene = new HomeScene();
    const spy = jest.spyOn(homeScene, "bindEvents");
    homeScene.bindEvents();
    expect(spy).toHaveBeenCalled();
  });
});