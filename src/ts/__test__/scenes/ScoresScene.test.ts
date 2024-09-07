import { ScoresScene } from "../../scenes/ScoresScene";

describe("ScoresScene", () => {
  it("should create a new instance of ScoresScene", () => {
    const scoresScene = new ScoresScene();
    expect(scoresScene).toBeInstanceOf(ScoresScene);
  });

  it("should have a scene property", () => {
    const scoresScene = new ScoresScene();
    expect(scoresScene.scene).toBeDefined();
  });

  it("should call the init method", () => {
    const scoresScene = new ScoresScene();
    const spy = jest.spyOn(scoresScene, "init");
    scoresScene.init();
    expect(spy).toHaveBeenCalled();
  });

  it("should call the bindEvents method", () => {
    const scoresScene = new ScoresScene();
    const spy = jest.spyOn(scoresScene, "bindEvents");
    scoresScene.bindEvents();
    expect(spy).toHaveBeenCalled();
  });
});
